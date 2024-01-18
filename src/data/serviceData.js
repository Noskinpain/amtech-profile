import React from "react";
import { SiSurveymonkey } from "react-icons/si";
import { GoWorkflow } from "react-icons/go";
import {
    MdDesignServices,
    MdSevereCold,
    MdOutlineSettingsInputComposite,
    MdModelTraining
} from "react-icons/md";
import { RiInstallFill } from "react-icons/ri";
import { GrInstall, GrInstallOption } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";


const data = [
    {
      icon: <SiSurveymonkey  />,
      title: 'FOC planning, Survey and Design',
      description: "Boost your network with our FOC Planning, Survey, and Design expertise."
    },
    {
      icon: <GoWorkflow  />,
      title: 'FOC implementation',
      description: "Elevate your network with our FOC Implementation services. "
    },
    {
      icon: <MdDesignServices/>,
      title: 'FTTH planning, Survey, design and implementation',
      description: "Elevate your connectivity with our end-to-end FTTH Planning, Survey, Design, and Implementation services."
    },
    {
      icon: <RiInstallFill/>,
      title: 'Microwave installations',
      description: "Experience reliability with our Microwave Installations. "
    },
    {
      icon: <GrInstall  className="text-green-300" />,
      title: 'Rf installations',
      description: "Experience seamless connectivity with our RF Installations. "
    },
    {
      icon: <GrInstallOption/>,
      title: 'confilsuration of wireless access point',
      description: "Optimize your connectivity with our Wireless Access Point (AP) Installation and Configuration services."
    },
    {
      icon: <MdSevereCold/>,
      title: 'Rural Telephony',
      description: "Empower rural communities with our Rural Telephony solutions."
    },
    {
      icon: <MdOutlineSettingsInputComposite/>,
      title: 'Site Audits',
      description: "We provide comprehensive assessments to help you make informed decisions."
    },
    {
      icon: <MdModelTraining />,
      title: 'ICT Training',
      description: "We offer the knowledge and skills you need for the digital world."
    },
    {
      icon: <CgWebsite/>,
      title: 'Web Design and hosting',
      description: "Elevate your online presence with our Web Design and Hosting services."
    }
  ];
  
  export default data;