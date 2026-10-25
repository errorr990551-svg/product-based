import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Calculator, 
  Gauge, 
  Wind, 
  Activity, 
  Check, 
  Copy, 
  RotateCcw, 
  Info, 
  ArrowRight, 
  Sliders, 
  FileText,
  Layers,
  Thermometer,
  Zap,
  HelpCircle,
  TrendingUp,
  CircleDot
} from "lucide-react";

// Standard DN Inner Diameters in mm (approx standard steel/schedule 40)
const STANDARD_DN = [
  { label: "DN15 (½\")", mm: 15 },
  { label: "DN25 (1\")", mm: 25 },
  { label: "DN40 (1½\")", mm: 40 },
  { label: "DN50 (2\")", mm: 50 },
  { label: "DN65 (2½\")", mm: 65 },
  { label: "DN80 (3\")", mm: 80 },
  { label: "DN100 (4\")", mm: 100 },
  { label: "DN150 (6\")", mm: 150 },
  { label: "DN200 (8\")", mm: 200 },
  { label: "DN250 (10\")", mm: 250 },
  { label: "DN300 (12\")", mm: 300 },
];

// Profile factor presets as specified
const PF_PRESETS = [
  {
    id: "0.739",
    value: 0.739,
    label: "PF = 0.739",
    description: "SS 20.2xx / 20.4xx / 20.5xx / HVAC 100",
  },
  {
    id: "0.804",
    value: 0.804,
    label: "PF = 0.804",
    description: "SS 20.6xx / 20.7xx",
  },
  {
    id: "1.000",
    value: 1.0,
    label: "PF = 1.000",
    description: "Mean Flow Velocity (No Profile Correction)",
  },
  {
    id: "custom",
    value: null,
    label: "Custom PF",
    description: "User Defined Calibration Factor",
  },
];

export default function FlowCalculator() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculation mode: 'velocity' (find v) | 'flow' (find Q) | 'diameter' (find d)
  const [calcMode, setCalcMode] = useState("velocity");

  // Pipe Shape: 'round' | 'rectangular'
  const [pipeShape, setPipeShape] = useState("round");

  // Flow input type: 'standard' (Q_std directly) | 'operating' (Q_op with p_over and T)
  const [flowType, setFlowType] = useState("standard");

  // Round pipe diameter input (in mm by default)
  const [diameterMm, setDiameterMm] = useState("100");
  const [diameterUnit, setDiameterUnit] = useState("mm"); // mm | inch | m

  // Rectangular dimensions (in mm)
  const [rectWidthMm, setRectWidthMm] = useState("200");
  const [rectHeightMm, setRectHeightMm] = useState("100");
  const [rectUnit, setRectUnit] = useState("mm");

  // Flow inputs
  const [qStdInput, setQStdInput] = useState("400"); // in m³/h
  const [flowUnit, setFlowUnit] = useState("m3h"); // m3h | m3s | lmin | ls | cfm

  // Operating data inputs
  const [qOpInput, setQOpInput] = useState("400"); // in m³/h
  const [pOver, setPOver] = useState("0"); // in bar (gauge overpressure)
  const [tempC, setTempC] = useState("20"); // in °C

  // Target Velocity input (when solving for Flow or Diameter)
  const [targetVelocity, setTargetVelocity] = useState("19.1");

  // Profile Factor
  const [selectedPfId, setSelectedPfId] = useState("0.739");
  const [customPf, setCustomPf] = useState("0.739");

  // Copy feedback state
  const [copied, setCopied] = useState(false);

  // Active Profile Factor value
  const activePf = useMemo(() => {
    if (selectedPfId === "custom") {
      const val = parseFloat(customPf);
      return isNaN(val) || val <= 0 ? 0.739 : val;
    }
    const found = PF_PRESETS.find((p) => p.id === selectedPfId);
    return found ? found.value : 0.739;
  }, [selectedPfId, customPf]);

  // Convert Diameter to meters
  const diameterMeters = useMemo(() => {
    const val = parseFloat(diameterMm);
    if (isNaN(val) || val <= 0) return 0;
    if (diameterUnit === "mm") return val / 1000;
    if (diameterUnit === "inch") return (val * 25.4) / 1000;
    if (diameterUnit === "m") return val;
    return val / 1000;
  }, [diameterMm, diameterUnit]);

  // Convert Rectangular dimensions to meters
  const rectMeters = useMemo(() => {
    const w = parseFloat(rectWidthMm) || 0;
    const h = parseFloat(rectHeightMm) || 0;
    const factor = rectUnit === "mm" ? 0.001 : rectUnit === "inch" ? 0.0254 : 1;
    return { w: w * factor, h: h * factor };
  }, [rectWidthMm, rectHeightMm, rectUnit]);

  // Pipe Cross-Sectional Area A (in m²)
  const pipeAreaM2 = useMemo(() => {
    if (pipeShape === "round") {
      if (diameterMeters <= 0) return 0;
      return (Math.PI * Math.pow(diameterMeters, 2)) / 4;
    } else {
      if (rectMeters.w <= 0 || rectMeters.h <= 0) return 0;
      return rectMeters.w * rectMeters.h;
    }
  }, [pipeShape, diameterMeters, rectMeters]);

  // Flow conversion helper to m³/h
  const convertToM3h = (val, unit) => {
    const num = parseFloat(val) || 0;
    switch (unit) {
      case "m3h":
        return num;
      case "m3s":
        return num * 3600;
      case "lmin":
        return num * 0.06;
      case "ls":
        return num * 3.6;
      case "cfm":
        return num * 1.69901;
      default:
        return num;
    }
  };

  // Convert operating flow to standard flow using Ideal Gas Law
  // Formula: Q_std = Q_op * [(1.01325 + p_over) / 1.01325] * [293.15 / (T + 273.15)]
  const operatingConversion = useMemo(() => {
    const qOp_m3h = convertToM3h(qOpInput, flowUnit);
    const p = parseFloat(pOver) || 0; // bar overpressure
    const t = parseFloat(tempC) || 0; // °C

    // Prevent division by zero
    const tempKelvin = t + 273.15;
    if (tempKelvin <= 0) return { qStd_m3h: 0, pRatio: 0, tRatio: 0 };

    const pRatio = (1.01325 + p) / 1.01325;
    const tRatio = 293.15 / tempKelvin;
    const qStd_m3h = qOp_m3h * pRatio * tRatio;

    return {
      qOp_m3h,
      qStd_m3h,
      pRatio,
      tRatio,
      pOver: p,
      tempC: t,
    };
  }, [qOpInput, flowUnit, pOver, tempC]);

  // Effective Standard Flow Rate (Q in m³/h) used in calculations
  const effectiveQ_m3h = useMemo(() => {
    if (flowType === "standard") {
      return convertToM3h(qStdInput, flowUnit);
    } else {
      return operatingConversion.qStd_m3h;
    }
  }, [flowType, qStdInput, flowUnit, operatingConversion]);

  // Effective Flow Rate in m³/s (Q = m³/h ÷ 3600)
  const effectiveQ_m3s = useMemo(() => {
    return effectiveQ_m3h / 3600;
  }, [effectiveQ_m3h]);

  // --- CORE CALCULATIONS ---
  // Formula 1: Velocity v = Q_m3s / (A * PF)
  const calculatedVelocity = useMemo(() => {
    if (pipeAreaM2 <= 0 || activePf <= 0) return 0;
    return effectiveQ_m3s / (pipeAreaM2 * activePf);
  }, [effectiveQ_m3s, pipeAreaM2, activePf]);

  // Formula 2: Flow Q_m3h = v * A * PF * 3600
  const calculatedFlowFromV = useMemo(() => {
    const v = parseFloat(targetVelocity) || 0;
    if (pipeAreaM2 <= 0 || activePf <= 0 || v <= 0) return 0;
    return v * pipeAreaM2 * activePf * 3600;
  }, [targetVelocity, pipeAreaM2, activePf]);

  // Formula 3: Required Diameter d = sqrt((4 * Q_m3h) / (3600 * pi * v * PF)) in meters
  const calculatedDiameterFromV = useMemo(() => {
    const v = parseFloat(targetVelocity) || 0;
    if (v <= 0 || activePf <= 0 || effectiveQ_m3h <= 0) return 0;
    const dSquared = (4 * effectiveQ_m3h) / (3600 * Math.PI * v * activePf);
    return dSquared > 0 ? Math.sqrt(dSquared) : 0;
  }, [targetVelocity, activePf, effectiveQ_m3h]);

  // Secondary units for velocity
  const velocity_fps = calculatedVelocity * 3.28084;
  const velocity_kmh = calculatedVelocity * 3.6;

  // Velocity Industrial Guidelines for Gas / Compressed Air
  const velocityCategory = useMemo(() => {
    const v = calculatedVelocity;
    if (v <= 0) return { label: "Zero / No Flow", color: "tw-bg-gray-100 tw-text-gray-700", desc: "No measurable flow detected." };
    if (v < 5) return { label: "Low Velocity (< 5 m/s)", color: "tw-bg-blue-100 tw-text-blue-800", desc: "Pipe may be oversized; low signal for some differential or vortex sensors." };
    if (v <= 25) return { label: "Optimal Velocity (5 – 25 m/s)", color: "tw-bg-emerald-100 tw-text-emerald-800", desc: "Excellent operating range for industrial air, gases, and thermal/ultrasonic flow meters." };
    if (v <= 40) return { label: "High Velocity (25 – 40 m/s)", color: "tw-bg-amber-100 tw-text-amber-800", desc: "Elevated flow speed; monitor piping pressure drop and acoustic noise." };
    return { label: "Critical Velocity (> 40 m/s)", color: "tw-bg-rose-100 tw-text-rose-800", desc: "Excessive speed; risk of pipe erosion, high pressure drop, and turbulence." };
  }, [calculatedVelocity]);

  // Reset to default test check:
  // Q = 400 m³/h, Round pipe d = 100 mm (0.1 m), PF = 0.739 -> Result: 19.1 m/s
  const handleResetCheck = () => {
    setCalcMode("velocity");
    setPipeShape("round");
    setFlowType("standard");
    setDiameterMm("100");
    setDiameterUnit("mm");
    setQStdInput("400");
    setFlowUnit("m3h");
    setSelectedPfId("0.739");
    setCustomPf("0.739");
    setPOver("0");
    setTempC("20");
    setTargetVelocity("19.1");
  };

  // Copy results summary
  const handleCopySummary = () => {
    const summary = `--- IOTAFLOW Velocity Calculator Result ---
Pipe Shape: ${pipeShape === "round" ? `Round (Diameter = ${diameterMm} ${diameterUnit})` : `Rectangular (${rectWidthMm}x${rectHeightMm} ${rectUnit})`}
Cross-Section Area: ${pipeAreaM2.toFixed(6)} m²
Profile Factor (PF): ${activePf}
Flow Condition: ${flowType === "standard" ? "Standard Flow" : `Operating (${pOver} bar(g), ${tempC} °C)`}
Volume Flow: ${effectiveQ_m3h.toFixed(2)} m³/h (${effectiveQ_m3s.toFixed(5)} m³/s)
Calculated Flow Velocity: ${calculatedVelocity.toFixed(2)} m/s (${velocity_fps.toFixed(2)} ft/s, ${velocity_kmh.toFixed(2)} km/h)
Formula Applied: v = Q / (A × PF)
Check verified: 19.1 m/s at 400 m³/h & 100mm DN100 with PF 0.739
`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="tw-bg-[#f8fafc] tw-min-h-screen tw-font-sans tw-text-gray-900">

      {/* --- HERO BANNER --- */}
      <section className="tw-bg-gradient-to-b tw-from-[#1a1a1a] tw-via-[#222222] tw-to-[#1a1a1a] tw-text-white tw-pt-12 tw-pb-16 tw-border-b tw-border-neutral-800">
        <div className="tw-container tw-mx-auto tw-px-4 tw-max-w-6xl">
          {/* Breadcrumbs */}
          <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-400 tw-mb-4">
            <Link to="/" className="hover:tw-text-[#ffd700] tw-transition-colors">Home</Link>
            <span>/</span>
            <Link to="/lean-manufacturing" className="hover:tw-text-[#ffd700] tw-transition-colors">Lean Resources</Link>
            <span>/</span>
            <span className="tw-text-[#ffd700] tw-font-medium">Flow Velocity Calculator</span>
          </div>

          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-items-center tw-justify-between tw-gap-8">
            <div className="tw-max-w-3xl">
              <div className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-amber-400/10 tw-border tw-border-[#ffd700]/30 tw-text-[#ffd700] tw-px-3.5 tw-py-1.5 tw-rounded-full tw-text-xs md:tw-text-sm tw-font-semibold tw-mb-4">
                <Calculator className="tw-w-4 tw-h-4" />
                Engineering Utility • Tool & Pipe Sizing
              </div>
              <h1 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-extrabold tw-tracking-tight tw-text-white">
                Flow Velocity <span className="tw-text-[#ffd700]">Calculator</span>
              </h1>
              <p className="tw-mt-3 tw-text-gray-300 tw-text-base md:tw-text-lg tw-leading-relaxed">
                Compute flow velocity <span className="tw-text-[#ffd700] tw-font-semibold">v = Q / (A × PF)</span> across round and rectangular pipes with sensor profile factors, DN presets, and ideal gas law operating conditions.
              </p>
            </div>

            {/* Test Check Quick Button */}
            <div className="tw-w-full lg:tw-w-auto tw-flex tw-flex-col sm:tw-flex-row lg:tw-flex-col tw-gap-3">
              <button
                onClick={handleResetCheck}
                className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-[#ffd700] hover:tw-bg-amber-400 tw-text-black tw-font-bold tw-px-5 tw-py-3 tw-rounded-xl tw-shadow-lg tw-transition-all tw-duration-200 tw-text-sm"
                title="Loads 400 m³/h, DN100 (100mm), PF 0.739 → Verified 19.1 m/s"
              >
                <RotateCcw className="tw-w-4 tw-h-4" />
                Reset Default Check (19.1 m/s)
              </button>
              <div className="tw-text-xs tw-text-gray-400 tw-text-center lg:tw-text-left">
                Check: 400 m³/h • 100mm • PF 0.739 = <strong>19.1 m/s</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CALCULATOR INTERFACE --- */}
      <section className="tw-py-10 md:tw-py-14">
        <div className="tw-container tw-mx-auto tw-px-4 tw-max-w-6xl">
          
          {/* CALCULATION MODE SELECTOR TABS */}
          <div className="tw-bg-white tw-p-2 tw-rounded-2xl tw-shadow-sm tw-border tw-border-gray-200 tw-mb-8 tw-flex tw-flex-col sm:tw-flex-row tw-gap-2">
            <button
              onClick={() => setCalcMode("velocity")}
              className={`tw-flex-1 tw-py-3 tw-px-4 tw-rounded-xl tw-font-semibold tw-text-sm md:tw-text-base tw-flex tw-items-center tw-justify-center tw-gap-2 tw-transition-all ${
                calcMode === "velocity"
                  ? "tw-bg-black tw-text-[#ffd700] tw-shadow-md"
                  : "tw-text-gray-600 hover:tw-bg-gray-100"
              }`}
            >
              <Gauge className="tw-w-4 tw-h-4" />
              1. Calculate Velocity (v)
            </button>
            <button
              onClick={() => setCalcMode("flow")}
              className={`tw-flex-1 tw-py-3 tw-px-4 tw-rounded-xl tw-font-semibold tw-text-sm md:tw-text-base tw-flex tw-items-center tw-justify-center tw-gap-2 tw-transition-all ${
                calcMode === "flow"
                  ? "tw-bg-black tw-text-[#ffd700] tw-shadow-md"
                  : "tw-text-gray-600 hover:tw-bg-gray-100"
              }`}
            >
              <Wind className="tw-w-4 tw-h-4" />
              2. Calculate Flow Rate (Q)
            </button>
            <button
              onClick={() => setCalcMode("diameter")}
              className={`tw-flex-1 tw-py-3 tw-px-4 tw-rounded-xl tw-font-semibold tw-text-sm md:tw-text-base tw-flex tw-items-center tw-justify-center tw-gap-2 tw-transition-all ${
                calcMode === "diameter"
                  ? "tw-bg-black tw-text-[#ffd700] tw-shadow-md"
                  : "tw-text-gray-600 hover:tw-bg-gray-100"
              }`}
            >
              <Sliders className="tw-w-4 tw-h-4" />
              3. Calculate Pipe Size (d)
            </button>
          </div>

          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-8">
            
            {/* LEFT COLUMN: INPUT CONTROLS (7 COLS) */}
            <div className="lg:tw-col-span-7 tw-space-y-6">
              
              {/* CARD 1: PIPE GEOMETRY & CROSS SECTION */}
              <div className="tw-bg-white tw-rounded-2xl tw-p-6 tw-shadow-md tw-border tw-border-gray-200">
                <div className="tw-flex tw-items-center tw-justify-between tw-mb-5 tw-border-b tw-border-gray-100 tw-pb-3">
                  <div className="tw-flex tw-items-center tw-gap-2.5">
                    <div className="tw-w-8 tw-h-8 tw-rounded-lg tw-bg-amber-100 tw-text-amber-800 tw-flex tw-items-center tw-justify-center">
                      <CircleDot className="tw-w-5 tw-h-5" />
                    </div>
                    <div>
                      <h2 className="tw-text-lg tw-font-bold tw-text-black">1. Pipe Geometry & Area (A)</h2>
                      <p className="tw-text-xs tw-text-gray-500">Cross-sectional area of round pipe or rectangular duct</p>
                    </div>
                  </div>

                  {/* Shape Switcher */}
                  <div className="tw-flex tw-bg-gray-100 tw-p-1 tw-rounded-lg tw-text-xs tw-font-semibold">
                    <button
                      onClick={() => setPipeShape("round")}
                      className={`tw-px-3 tw-py-1.5 tw-rounded-md tw-transition-all ${
                        pipeShape === "round"
                          ? "tw-bg-black tw-text-[#ffd700] tw-shadow"
                          : "tw-text-gray-600 hover:tw-text-black"
                      }`}
                    >
                      Round Pipe
                    </button>
                    <button
                      onClick={() => setPipeShape("rectangular")}
                      className={`tw-px-3 tw-py-1.5 tw-rounded-md tw-transition-all ${
                        pipeShape === "rectangular"
                          ? "tw-bg-black tw-text-[#ffd700] tw-shadow"
                          : "tw-text-gray-600 hover:tw-text-black"
                      }`}
                    >
                      Rectangular
                    </button>
                  </div>
                </div>

                {pipeShape === "round" ? (
                  <div>
                    {calcMode === "diameter" ? (
                      <div className="tw-p-4 tw-bg-amber-50 tw-border tw-border-amber-200 tw-rounded-xl tw-text-sm tw-text-amber-900 tw-mb-4">
                        💡 <strong>Diameter Solving Mode:</strong> The required pipe diameter will be calculated on the right side based on target flow and velocity limits.
                      </div>
                    ) : (
                      <>
                        <div className="tw-mb-4">
                          <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                            Inner Diameter (d)
                          </label>
                          <div className="tw-flex tw-gap-2">
                            <input
                              type="number"
                              step="any"
                              value={diameterMm}
                              onChange={(e) => setDiameterMm(e.target.value)}
                              placeholder="e.g. 100"
                              className="tw-flex-1 tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                            />
                            <select
                              value={diameterUnit}
                              onChange={(e) => setDiameterUnit(e.target.value)}
                              className="tw-bg-gray-100 tw-border tw-border-gray-300 tw-rounded-xl tw-px-3 tw-py-2.5 tw-text-sm tw-font-bold tw-text-gray-700 tw-outline-none focus:tw-border-[#ffd700]"
                            >
                              <option value="mm">mm</option>
                              <option value="inch">inches</option>
                              <option value="m">meters (m)</option>
                            </select>
                          </div>
                        </div>

                        {/* Quick DN Presets */}
                        <div>
                          <div className="tw-text-xs tw-font-semibold tw-text-gray-500 tw-mb-2">Quick Standard DN Presets:</div>
                          <div className="tw-flex tw-flex-wrap tw-gap-1.5">
                            {STANDARD_DN.map((dn) => (
                              <button
                                key={dn.label}
                                onClick={() => {
                                  setDiameterMm(dn.mm.toString());
                                  setDiameterUnit("mm");
                                }}
                                className={`tw-text-xs tw-px-2.5 tw-py-1.5 tw-rounded-lg tw-font-medium tw-transition-all ${
                                  diameterMm === dn.mm.toString() && diameterUnit === "mm"
                                    ? "tw-bg-[#ffd700] tw-text-black tw-font-bold tw-shadow-sm"
                                    : "tw-bg-gray-100 hover:tw-bg-gray-200 tw-text-gray-700"
                                }`}
                              >
                                {dn.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Pipe Area Output preview */}
                    <div className="tw-mt-4 tw-pt-3 tw-border-t tw-border-gray-100 tw-flex tw-items-center tw-justify-between tw-text-xs tw-text-gray-600">
                      <span>Formula: <code>A = π × d² / 4</code></span>
                      <span className="tw-font-bold tw-text-gray-900">
                        Area A = {pipeAreaM2.toFixed(6)} m² ({(pipeAreaM2 * 10000).toFixed(2)} cm²)
                      </span>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Rectangular Inputs */}
                    <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mb-4">
                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                          Width (W)
                        </label>
                        <input
                          type="number"
                          step="any"
                          value={rectWidthMm}
                          onChange={(e) => setRectWidthMm(e.target.value)}
                          placeholder="e.g. 200"
                          className="tw-w-full tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                        />
                      </div>
                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                          Height (H)
                        </label>
                        <input
                          type="number"
                          step="any"
                          value={rectHeightMm}
                          onChange={(e) => setRectHeightMm(e.target.value)}
                          placeholder="e.g. 100"
                          className="tw-w-full tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                        />
                      </div>
                    </div>

                    <div className="tw-flex tw-items-center tw-justify-between">
                      <div className="tw-flex tw-items-center tw-gap-2">
                        <span className="tw-text-xs tw-font-bold tw-text-gray-600">Unit:</span>
                        <div className="tw-flex tw-gap-1">
                          {["mm", "inch", "m"].map((u) => (
                            <button
                              key={u}
                              onClick={() => setRectUnit(u)}
                              className={`tw-text-xs tw-px-3 tw-py-1 tw-rounded-md ${
                                rectUnit === u
                                  ? "tw-bg-black tw-text-[#ffd700] tw-font-bold"
                                  : "tw-bg-gray-100 tw-text-gray-600"
                              }`}
                            >
                              {u}
                            </button>
                          ))}
                        </div>
                      </div>

                      <span className="tw-text-xs tw-font-bold tw-text-gray-900">
                        Area A = {pipeAreaM2.toFixed(6)} m²
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* CARD 2: FLOW RATE (Q) OR VELOCITY INPUT */}
              <div className="tw-bg-white tw-rounded-2xl tw-p-6 tw-shadow-md tw-border tw-border-gray-200">
                <div className="tw-flex tw-items-center tw-justify-between tw-mb-5 tw-border-b tw-border-gray-100 tw-pb-3">
                  <div className="tw-flex tw-items-center tw-gap-2.5">
                    <div className="tw-w-8 tw-h-8 tw-rounded-lg tw-bg-amber-100 tw-text-amber-800 tw-flex tw-items-center tw-justify-center">
                      <Wind className="tw-w-5 tw-h-5" />
                    </div>
                    <div>
                      <h2 className="tw-text-lg tw-font-bold tw-text-black">
                        {calcMode === "flow" ? "2. Target Flow Velocity (v)" : "2. Volume Flow Rate (Q)"}
                      </h2>
                      <p className="tw-text-xs tw-text-gray-500">
                        {calcMode === "flow" ? "Enter target line velocity to compute flow" : "Standard flow or operating condition data"}
                      </p>
                    </div>
                  </div>

                  {calcMode !== "flow" && (
                    <div className="tw-flex tw-bg-gray-100 tw-p-1 tw-rounded-lg tw-text-xs tw-font-semibold">
                      <button
                        onClick={() => setFlowType("standard")}
                        className={`tw-px-3 tw-py-1.5 tw-rounded-md tw-transition-all ${
                          flowType === "standard"
                            ? "tw-bg-black tw-text-[#ffd700] tw-shadow"
                            : "tw-text-gray-600 hover:tw-text-black"
                        }`}
                      >
                        Standard Flow (Q)
                      </button>
                      <button
                        onClick={() => setFlowType("operating")}
                        className={`tw-px-3 tw-py-1.5 tw-rounded-md tw-transition-all ${
                          flowType === "operating"
                            ? "tw-bg-black tw-text-[#ffd700] tw-shadow"
                            : "tw-text-gray-600 hover:tw-text-black"
                        }`}
                      >
                        Operating Data (Gas Law)
                      </button>
                    </div>
                  )}
                </div>

                {calcMode === "flow" ? (
                  <div>
                    <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                      Target Flow Velocity (v)
                    </label>
                    <div className="tw-flex tw-gap-2">
                      <input
                        type="number"
                        step="any"
                        value={targetVelocity}
                        onChange={(e) => setTargetVelocity(e.target.value)}
                        placeholder="e.g. 19.1"
                        className="tw-flex-1 tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                      />
                      <div className="tw-bg-gray-100 tw-border tw-border-gray-300 tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-sm tw-font-bold tw-text-gray-700 tw-flex tw-items-center">
                        m/s
                      </div>
                    </div>
                  </div>
                ) : flowType === "standard" ? (
                  <div>
                    <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                      Standard Volume Flow Rate (Q)
                    </label>
                    <div className="tw-flex tw-gap-2">
                      <input
                        type="number"
                        step="any"
                        value={qStdInput}
                        onChange={(e) => setQStdInput(e.target.value)}
                        placeholder="e.g. 400"
                        className="tw-flex-1 tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                      />
                      <select
                        value={flowUnit}
                        onChange={(e) => setFlowUnit(e.target.value)}
                        className="tw-bg-gray-100 tw-border tw-border-gray-300 tw-rounded-xl tw-px-3 tw-py-2.5 tw-text-sm tw-font-bold tw-text-gray-700 tw-outline-none focus:tw-border-[#ffd700]"
                      >
                        <option value="m3h">m³/h (Nm³/h)</option>
                        <option value="m3s">m³/s</option>
                        <option value="lmin">L/min</option>
                        <option value="ls">L/s</option>
                        <option value="cfm">CFM (ft³/min)</option>
                      </select>
                    </div>

                    <div className="tw-mt-3 tw-text-xs tw-text-gray-500 tw-flex tw-justify-between">
                      <span>Standard Reference: 20 °C, 1013.25 hPa (1.01325 bar)</span>
                      <span className="tw-font-bold tw-text-gray-900">
                        = {effectiveQ_m3h.toFixed(2)} m³/h ({effectiveQ_m3s.toFixed(5)} m³/s)
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="tw-space-y-4">
                    {/* Operating Data Section */}
                    <div>
                      <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                        Operating Flow Rate (Q_op)
                      </label>
                      <div className="tw-flex tw-gap-2">
                        <input
                          type="number"
                          step="any"
                          value={qOpInput}
                          onChange={(e) => setQOpInput(e.target.value)}
                          placeholder="e.g. 400"
                          className="tw-flex-1 tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                        />
                        <select
                          value={flowUnit}
                          onChange={(e) => setFlowUnit(e.target.value)}
                          className="tw-bg-gray-100 tw-border tw-border-gray-300 tw-rounded-xl tw-px-3 tw-py-2.5 tw-text-sm tw-font-bold tw-text-gray-700 tw-outline-none focus:tw-border-[#ffd700]"
                        >
                          <option value="m3h">m³/h (operating)</option>
                          <option value="m3s">m³/s</option>
                          <option value="lmin">L/min</option>
                          <option value="ls">L/s</option>
                          <option value="cfm">CFM</option>
                        </select>
                      </div>
                    </div>

                    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                          Gauge Pressure (p_over)
                        </label>
                        <div className="tw-flex">
                          <input
                            type="number"
                            step="any"
                            value={pOver}
                            onChange={(e) => setPOver(e.target.value)}
                            placeholder="0"
                            className="tw-w-full tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-l-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                          />
                          <div className="tw-bg-gray-100 tw-border tw-border-l-0 tw-border-gray-300 tw-rounded-r-xl tw-px-3 tw-py-2.5 tw-text-sm tw-font-bold tw-text-gray-700 tw-flex tw-items-center">
                            bar(g)
                          </div>
                        </div>
                        <span className="tw-text-[11px] tw-text-gray-500">Overpressure above atmospheric (1.01325 bar)</span>
                      </div>

                      <div>
                        <label className="tw-block tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-tracking-wider tw-mb-1.5">
                          Operating Temperature (T)
                        </label>
                        <div className="tw-flex">
                          <input
                            type="number"
                            step="any"
                            value={tempC}
                            onChange={(e) => setTempC(e.target.value)}
                            placeholder="20"
                            className="tw-w-full tw-bg-gray-50 tw-border tw-border-gray-300 focus:tw-border-[#ffd700] focus:tw-ring-2 focus:tw-ring-[#ffd700]/30 tw-rounded-l-xl tw-px-4 tw-py-2.5 tw-text-base tw-font-semibold tw-text-gray-900 tw-outline-none"
                          />
                          <div className="tw-bg-gray-100 tw-border tw-border-l-0 tw-border-gray-300 tw-rounded-r-xl tw-px-3 tw-py-2.5 tw-text-sm tw-font-bold tw-text-gray-700 tw-flex tw-items-center">
                            °C
                          </div>
                        </div>
                        <span className="tw-text-[11px] tw-text-gray-500">Standard temp = 20 °C (293.15 K)</span>
                      </div>
                    </div>

                    {/* Conversion Banner */}
                    <div className="tw-bg-amber-50 tw-border tw-border-amber-200 tw-rounded-xl tw-p-3.5 tw-text-xs">
                      <div className="tw-flex tw-items-center tw-justify-between tw-font-bold tw-text-amber-900 tw-mb-1">
                        <span>Converted Standard Flow (Q_std):</span>
                        <span className="tw-text-sm tw-text-black">{operatingConversion.qStd_m3h.toFixed(2)} m³/h</span>
                      </div>
                      <div className="tw-text-amber-800 tw-font-mono tw-text-[11px]">
                        Q_std = {operatingConversion.qOp_m3h.toFixed(1)} × [({(1.01325 + operatingConversion.pOver).toFixed(3)}) / 1.01325] × [293.15 / {(operatingConversion.tempC + 273.15).toFixed(2)}]
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CARD 3: PROFILE FACTOR (PF) */}
              <div className="tw-bg-white tw-rounded-2xl tw-p-6 tw-shadow-md tw-border tw-border-gray-200">
                <div className="tw-flex tw-items-center tw-gap-2.5 tw-mb-5 tw-border-b tw-border-gray-100 tw-pb-3">
                  <div className="tw-w-8 tw-h-8 tw-rounded-lg tw-bg-amber-100 tw-text-amber-800 tw-flex tw-items-center tw-justify-center">
                    <Sliders className="tw-w-5 tw-h-5" />
                  </div>
                  <div>
                    <h2 className="tw-text-lg tw-font-bold tw-text-black">3. Sensor Profile Factor (PF)</h2>
                    <p className="tw-text-xs tw-text-gray-500">
                      Flow velocity distribution coefficient across pipe cross-section
                    </p>
                  </div>
                </div>

                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-3 tw-mb-4">
                  {PF_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPfId(preset.id)}
                      className={`tw-text-left tw-p-3.5 tw-rounded-xl tw-border tw-transition-all ${
                        selectedPfId === preset.id
                          ? "tw-border-black tw-bg-neutral-900 tw-text-white tw-shadow-md"
                          : "tw-border-gray-200 tw-bg-gray-50 hover:tw-bg-gray-100 tw-text-gray-900"
                      }`}
                    >
                      <div className="tw-flex tw-items-center tw-justify-between">
                        <span className={`tw-font-bold tw-text-sm ${selectedPfId === preset.id ? "tw-text-[#ffd700]" : "tw-text-black"}`}>
                          {preset.label}
                        </span>
                        {selectedPfId === preset.id && (
                          <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-[#ffd700]"></span>
                        )}
                      </div>
                      <p className={`tw-text-xs tw-mt-1 ${selectedPfId === preset.id ? "tw-text-gray-300" : "tw-text-gray-500"}`}>
                        {preset.description}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Custom PF input */}
                {selectedPfId === "custom" && (
                  <div className="tw-p-3.5 tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-xl tw-flex tw-items-center tw-gap-3">
                    <label className="tw-text-xs tw-font-bold tw-text-gray-700 tw-whitespace-nowrap">
                      Enter Custom PF:
                    </label>
                    <input
                      type="number"
                      step="0.001"
                      min="0.1"
                      max="2.0"
                      value={customPf}
                      onChange={(e) => setCustomPf(e.target.value)}
                      placeholder="e.g. 0.739"
                      className="tw-w-full tw-bg-white tw-border tw-border-gray-300 focus:tw-border-[#ffd700] tw-rounded-lg tw-px-3 tw-py-1.5 tw-text-sm tw-font-bold tw-outline-none"
                    />
                  </div>
                )}

                <div className="tw-mt-3 tw-text-xs tw-text-gray-600 tw-flex tw-items-center tw-justify-between">
                  <span>Active Profile Factor:</span>
                  <span className="tw-font-bold tw-text-black tw-bg-gray-100 tw-px-2.5 tw-py-1 tw-rounded-md">
                    PF = {activePf}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CALCULATION RESULTS DISPLAY (5 COLS) */}
            <div className="lg:tw-col-span-5 tw-space-y-6">
              
              {/* PRIMARY RESULTS CARD */}
              <div className="tw-bg-gradient-to-br tw-from-[#1a1a1a] tw-to-[#2b2b2b] tw-text-white tw-rounded-2xl tw-p-6 tw-shadow-2xl tw-border tw-border-neutral-700 tw-sticky tw-top-24">
                
                <div className="tw-flex tw-items-center tw-justify-between tw-border-b tw-border-neutral-700 tw-pb-4 tw-mb-5">
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <Activity className="tw-w-5 tw-h-5 tw-text-[#ffd700]" />
                    <span className="tw-text-sm tw-font-bold tw-tracking-wider tw-uppercase tw-text-gray-300">
                      Calculation Output
                    </span>
                  </div>
                  <button
                    onClick={handleCopySummary}
                    className="tw-flex tw-items-center tw-gap-1.5 tw-bg-neutral-800 hover:tw-bg-neutral-700 tw-text-xs tw-text-[#ffd700] tw-px-3 tw-py-1.5 tw-rounded-lg tw-transition-colors"
                  >
                    {copied ? <Check className="tw-w-3.5 tw-h-3.5" /> : <Copy className="tw-w-3.5 tw-h-3.5" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {calcMode === "velocity" && (
                  <div>
                    <span className="tw-text-xs tw-text-gray-400 tw-font-semibold tw-uppercase tw-tracking-wider">
                      Flow Velocity (v)
                    </span>
                    <div className="tw-flex tw-items-baseline tw-gap-3 tw-mt-1">
                      <span className="tw-text-5xl md:tw-text-6xl tw-font-black tw-text-[#ffd700] tw-tracking-tight">
                        {calculatedVelocity.toFixed(1)}
                      </span>
                      <span className="tw-text-2xl tw-font-bold tw-text-white">m/s</span>
                    </div>

                    {/* Secondary Units */}
                    <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-4 tw-pt-4 tw-border-t tw-border-neutral-700">
                      <div className="tw-bg-neutral-800/70 tw-p-2.5 tw-rounded-xl">
                        <span className="tw-text-[11px] tw-text-gray-400 tw-block">Feet per second</span>
                        <span className="tw-text-base tw-font-bold tw-text-white">{velocity_fps.toFixed(1)} ft/s</span>
                      </div>
                      <div className="tw-bg-neutral-800/70 tw-p-2.5 tw-rounded-xl">
                        <span className="tw-text-[11px] tw-text-gray-400 tw-block">Kilometers / hour</span>
                        <span className="tw-text-base tw-font-bold tw-text-white">{velocity_kmh.toFixed(1)} km/h</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="tw-mt-4">
                      <div className={`tw-px-3 tw-py-2 tw-rounded-xl tw-text-xs tw-font-semibold tw-flex tw-items-center tw-gap-2 ${velocityCategory.color}`}>
                        <TrendingUp className="tw-w-4 tw-h-4 tw-flex-shrink-0" />
                        <div>
                          <strong>{velocityCategory.label}</strong>: {velocityCategory.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {calcMode === "flow" && (
                  <div>
                    <span className="tw-text-xs tw-text-gray-400 tw-font-semibold tw-uppercase tw-tracking-wider">
                      Calculated Volume Flow Rate (Q)
                    </span>
                    <div className="tw-flex tw-items-baseline tw-gap-3 tw-mt-1">
                      <span className="tw-text-4xl md:tw-text-5xl tw-font-black tw-text-[#ffd700]">
                        {calculatedFlowFromV.toFixed(1)}
                      </span>
                      <span className="tw-text-xl tw-font-bold tw-text-white">m³/h</span>
                    </div>

                    <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-4 tw-pt-4 tw-border-t tw-border-neutral-700">
                      <div className="tw-bg-neutral-800/70 tw-p-2.5 tw-rounded-xl">
                        <span className="tw-text-[11px] tw-text-gray-400 tw-block">Cubic meters / sec</span>
                        <span className="tw-text-base tw-font-bold tw-text-white">{(calculatedFlowFromV / 3600).toFixed(4)} m³/s</span>
                      </div>
                      <div className="tw-bg-neutral-800/70 tw-p-2.5 tw-rounded-xl">
                        <span className="tw-text-[11px] tw-text-gray-400 tw-block">Liters per second</span>
                        <span className="tw-text-base tw-font-bold tw-text-white">{((calculatedFlowFromV * 1000) / 3600).toFixed(1)} L/s</span>
                      </div>
                    </div>
                  </div>
                )}

                {calcMode === "diameter" && (
                  <div>
                    <span className="tw-text-xs tw-text-gray-400 tw-font-semibold tw-uppercase tw-tracking-wider">
                      Required Pipe Inner Diameter (d)
                    </span>
                    <div className="tw-flex tw-items-baseline tw-gap-3 tw-mt-1">
                      <span className="tw-text-5xl md:tw-text-6xl tw-font-black tw-text-[#ffd700]">
                        {(calculatedDiameterFromV * 1000).toFixed(1)}
                      </span>
                      <span className="tw-text-2xl tw-font-bold tw-text-white">mm</span>
                    </div>

                    <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-4 tw-pt-4 tw-border-t tw-border-neutral-700">
                      <div className="tw-bg-neutral-800/70 tw-p-2.5 tw-rounded-xl">
                        <span className="tw-text-[11px] tw-text-gray-400 tw-block">Inches</span>
                        <span className="tw-text-base tw-font-bold tw-text-white">{((calculatedDiameterFromV * 1000) / 25.4).toFixed(2)}"</span>
                      </div>
                      <div className="tw-bg-neutral-800/70 tw-p-2.5 tw-rounded-xl">
                        <span className="tw-text-[11px] tw-text-gray-400 tw-block">Meters</span>
                        <span className="tw-text-base tw-font-bold tw-text-white">{calculatedDiameterFromV.toFixed(3)} m</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Intermediate Key Values List */}
                <div className="tw-mt-6 tw-pt-4 tw-border-t tw-border-neutral-700 tw-space-y-2.5 tw-text-xs tw-text-gray-300">
                  <div className="tw-flex tw-justify-between">
                    <span className="tw-text-gray-400">Cross-Section Area (A):</span>
                    <span className="tw-font-mono tw-text-white tw-font-bold">{pipeAreaM2.toFixed(6)} m²</span>
                  </div>
                  <div className="tw-flex tw-justify-between">
                    <span className="tw-text-gray-400">Profile Factor (PF):</span>
                    <span className="tw-font-mono tw-text-[#ffd700] tw-font-bold">{activePf}</span>
                  </div>
                  <div className="tw-flex tw-justify-between">
                    <span className="tw-text-gray-400">Effective Flow (Q):</span>
                    <span className="tw-font-mono tw-text-white tw-font-bold">{effectiveQ_m3h.toFixed(1)} m³/h ({effectiveQ_m3s.toFixed(5)} m³/s)</span>
                  </div>
                  {flowType === "operating" && (
                    <div className="tw-flex tw-justify-between tw-text-amber-300">
                      <span>Gas Law Factor:</span>
                      <span className="tw-font-mono tw-font-bold">×{(operatingConversion.pRatio * operatingConversion.tRatio).toFixed(3)}</span>
                    </div>
                  )}
                </div>

                {/* Consultation CTA */}
                <div className="tw-mt-6 tw-pt-4 tw-border-t tw-border-neutral-700">
                  <Link
                    to="/contact"
                    className="tw-w-full tw-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-[#ffd700] hover:tw-bg-amber-400 tw-text-black tw-font-bold tw-py-3 tw-rounded-xl tw-text-sm tw-transition-colors"
                  >
                    Need Sizing Assistance? Contact Us
                    <ArrowRight className="tw-w-4 tw-h-4" />
                  </Link>
                </div>
              </div>

              {/* STEP-BY-STEP FORMULA SUBSTITUTION CARD */}
              <div className="tw-bg-white tw-rounded-2xl tw-p-6 tw-shadow-md tw-border tw-border-gray-200">
                <div className="tw-flex tw-items-center tw-gap-2 tw-mb-3">
                  <FileText className="tw-w-4 tw-h-4 tw-text-amber-600" />
                  <h3 className="tw-text-sm tw-font-bold tw-text-black tw-uppercase tw-tracking-wider">
                    Formula & Step-by-Step Breakdown
                  </h3>
                </div>

                <div className="tw-space-y-3 tw-text-xs tw-text-gray-700">
                  <div className="tw-p-3 tw-bg-gray-50 tw-rounded-xl tw-border tw-border-gray-200 tw-font-mono">
                    <div className="tw-text-gray-500 tw-mb-1">// Core Master Formula:</div>
                    <div className="tw-font-bold tw-text-sm tw-text-black">v = Q / (A × PF)</div>
                    {pipeShape === "round" && (
                      <div className="tw-text-[11px] tw-text-gray-600 tw-mt-1">
                        Combined: v = (4 × Q) / (3600 × π × d² × PF)
                      </div>
                    )}
                  </div>

                  <div className="tw-space-y-1.5 tw-font-mono tw-text-[11px]">
                    <div className="tw-bg-gray-50 tw-p-2 tw-rounded-lg">
                      <strong>Step 1 (Area):</strong> A = {pipeShape === "round" ? `(π × ${diameterMeters.toFixed(3)}²) / 4` : `${rectMeters.w.toFixed(3)} × ${rectMeters.h.toFixed(3)}`} = {pipeAreaM2.toFixed(6)} m²
                    </div>
                    <div className="tw-bg-gray-50 tw-p-2 tw-rounded-lg">
                      <strong>Step 2 (Flow):</strong> Q = {effectiveQ_m3h.toFixed(1)} m³/h ÷ 3600 = {effectiveQ_m3s.toFixed(5)} m³/s
                    </div>
                    <div className="tw-bg-amber-50 tw-text-amber-950 tw-p-2 tw-rounded-lg tw-border tw-border-amber-200">
                      <strong>Step 3 (Velocity):</strong> v = {effectiveQ_m3s.toFixed(5)} / ({pipeAreaM2.toFixed(6)} × {activePf}) = <strong>{calculatedVelocity.toFixed(2)} m/s</strong>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- REFERENCE DOCUMENTATION & SENSOR APPLICATION GUIDE --- */}
          <div className="tw-mt-16 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
            
            <div className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-sm tw-border tw-border-gray-200">
              <div className="tw-w-10 tw-h-10 tw-rounded-xl tw-bg-[#ffd700]/20 tw-text-amber-800 tw-flex tw-items-center tw-justify-center tw-mb-4">
                <Gauge className="tw-w-5 tw-h-5" />
              </div>
              <h3 className="tw-text-base tw-font-bold tw-text-black tw-mb-2">Profile Factor (PF) Guide</h3>
              <p className="tw-text-xs tw-text-gray-600 tw-leading-relaxed tw-mb-3">
                Profile factors account for the non-uniform velocity profile in turbulent pipe flow:
              </p>
              <ul className="tw-text-xs tw-space-y-1.5 tw-text-gray-700">
                <li>• <strong>PF = 0.739:</strong> For models SS 20.2xx, 20.4xx, 20.5xx, and HVAC 100 immersion probes.</li>
                <li>• <strong>PF = 0.804:</strong> For models SS 20.6xx and 20.7xx precision sensors.</li>
                <li>• <strong>PF = 1.000:</strong> Direct spatial mean average velocity without boundary correction.</li>
              </ul>
            </div>

            <div className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-sm tw-border tw-border-gray-200">
              <div className="tw-w-10 tw-h-10 tw-rounded-xl tw-bg-[#ffd700]/20 tw-text-amber-800 tw-flex tw-items-center tw-justify-center tw-mb-4">
                <Thermometer className="tw-w-5 tw-h-5" />
              </div>
              <h3 className="tw-text-base tw-font-bold tw-text-black tw-mb-2">Ideal Gas Law Conversion</h3>
              <p className="tw-text-xs tw-text-gray-600 tw-leading-relaxed tw-mb-3">
                When converting operating flow (Q_op) to standard conditions (20 °C, 1013.25 hPa):
              </p>
              <div className="tw-bg-gray-50 tw-p-2.5 tw-rounded-lg tw-font-mono tw-text-[11px] tw-text-gray-800">
                Q_std = Q_op × [(1.01325 + p_over) / 1.01325] × [293.15 / (T + 273.15)]
              </div>
              <p className="tw-text-[11px] tw-text-gray-500 tw-mt-2">
                Allows seamless normalization between compressed line conditions and standard reference m³/h.
              </p>
            </div>

            <div className="tw-bg-white tw-p-6 tw-rounded-2xl tw-shadow-sm tw-border tw-border-gray-200">
              <div className="tw-w-10 tw-h-10 tw-rounded-xl tw-bg-[#ffd700]/20 tw-text-amber-800 tw-flex tw-items-center tw-justify-center tw-mb-4">
                <Zap className="tw-w-5 tw-h-5" />
              </div>
              <h3 className="tw-text-base tw-font-bold tw-text-black tw-mb-2">Velocity Guidelines</h3>
              <p className="tw-text-xs tw-text-gray-600 tw-leading-relaxed tw-mb-3">
                Recommended industrial velocity standards for industrial fluids:
              </p>
              <ul className="tw-text-xs tw-space-y-1.5 tw-text-gray-700">
                <li>• <strong>Compressed Air:</strong> 6 – 20 m/s (max 25 m/s)</li>
                <li>• <strong>Saturated Steam:</strong> 25 – 40 m/s</li>
                <li>• <strong>Industrial Water / Glycol:</strong> 1.5 – 3.0 m/s</li>
                <li>• <strong>Natural Gas / Biogas:</strong> 10 – 25 m/s</li>
              </ul>
            </div>

          </div>

          {/* --- RELATED FLOW METERS BANNER --- */}
          <div className="tw-mt-12 tw-bg-gradient-to-r tw-from-[#1a1a1a] tw-to-neutral-900 tw-rounded-2xl tw-p-8 tw-text-white tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-justify-between tw-gap-6 tw-shadow-xl">
            <div>
              <div className="tw-inline-block tw-bg-[#ffd700] tw-text-black tw-text-xs tw-font-bold tw-px-3 tw-py-1 tw-rounded-full tw-mb-3">
                Precision Measurement
              </div>
              <h3 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-white">
                Looking for the Right Industrial Flow Meter?
              </h3>
              <p className="tw-text-gray-400 tw-text-sm tw-mt-1.5 tw-max-w-2xl">
                Explore IOTAFLOW’s range of Electromagnetic, Vortex, Ultrasonic, and Thermal Mass flow meters engineered for high accuracy and 7-day fast delivery.
              </p>
            </div>
            <div className="tw-flex tw-gap-3">
              <Link
                to="/product"
                className="tw-bg-[#ffd700] hover:tw-bg-amber-400 tw-text-black tw-font-bold tw-px-6 tw-py-3 tw-rounded-xl tw-text-sm tw-transition-all tw-whitespace-nowrap"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="tw-bg-neutral-800 hover:tw-bg-neutral-700 tw-text-white tw-font-bold tw-px-6 tw-py-3 tw-rounded-xl tw-text-sm tw-transition-all tw-whitespace-nowrap"
              >
                Request Quote
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
