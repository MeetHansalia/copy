import { Routes, Route } from "react-router-dom";
import { Campaign, Crm, DashBoard, PageNotFound, Reports, Staff, Support } from "../pages"



import React from 'react'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<DashBoard />}/>
        <Route path="home/campaign" element={<Campaign/>}/>
        <Route path="home/Crm" element={<Crm/>}/>
        <Route path="home/reports" element={<Reports/>}/>
        <Route path="home/staff" element={<Staff/>}/>
        <Route path="home/support" element={<Support/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes
