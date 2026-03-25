import React from 'react'
import SEO from "../Components/common/SEO";
import WhychooseIOT from '../Components/iotsense/WhychooseIOT'
import Corefeatures from '../Components/iotsense/Corefeatures'
import Getstarted from '../Components/iotsense/Getstarted'
import Usecases from '../Components/iotsense/Usecases'
import Realworld from '../Components/iotsense/Realworld'
import IOTvideo from '../Components/iotsense/IOTvideo'

const IOTsensePage = () => {
  return (
    <>
      <SEO 
        title="IOT Sense: Smart Flow Intelligence & Remote Telemetry Platform"
        description="Transform flow data into intelligence with IOT Sense. Real-time dashboards for smart water meters, CGWA/CPCB compliance, and Industry 4.0 telemetry. Explore now."
        keywords="IOT Sense, smart flow intelligence, remote telemetry system, industrial IoT platform, smart water meter software, CGWA compliance telemetry, CPCB flow monitoring, Industry 4.0 flow data, AMR AMI network, real-time flow dashboard"
      />
        <IOTvideo />
        <WhychooseIOT />
        <Corefeatures />
        <Usecases />
        <Realworld />
        <Getstarted />
        
    </>
  )
}

export default IOTsensePage