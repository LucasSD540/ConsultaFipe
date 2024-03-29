import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VehicleModel from './pages/VehicleModel'
import VehicleYear from './pages/VehicleYear'
import VehicleBrand from './pages/VehicleBrand'
import VehicleInfo from './pages/VehicleInfo'

const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VehicleBrand/:vehicle" element={<VehicleBrand />} />
      <Route path="/VehicleModel/:brandCode" element={<VehicleModel />} />
      <Route path="/VehicleYear/:modelCode" element={<VehicleYear />} />
      <Route path="/VehicleInfo/:yearCode" element={<VehicleInfo />} />
    </Routes>
  )
}

export default PagesRouter
