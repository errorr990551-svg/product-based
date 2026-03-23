import React from 'react'
import { Helmet } from 'react-helmet-async'
import WhychooseIOT from '../Components/iotsense/WhychooseIOT'
import Corefeatures from '../Components/iotsense/Corefeatures'
import Getstarted from '../Components/iotsense/Getstarted'
import Usecases from '../Components/iotsense/Usecases'
import Realworld from '../Components/iotsense/Realworld'
import IOTvideo from '../Components/iotsense/IOTvideo'

const IOTsensePage = () => {
  return (
    <>
      <Helmet>
        <title>IOT Sense: Smart Flow Intelligence & Remote Telemetry Platform</title>
        <meta name="description" content="Transform flow data into intelligence with IOT Sense. Real-time dashboards for smart water meters, CGWA/CPCB compliance, and Industry 4.0 telemetry. Explore now." />
        <meta name="keywords" content="IOT Sense, smart flow intelligence, remote telemetry system, industrial IoT platform, smart water meter software, CGWA compliance telemetry, CPCB flow monitoring, Industry 4.0 flow data, AMR AMI network, real-time flow dashboard" />
      </Helmet>
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