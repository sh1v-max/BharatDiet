import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import CalorieCalculator from '../pages/CalorieCalculator.jsx'
import ProteinCalculator from '../pages/ProteinCalculator.jsx'
import FoodDatabase from '../pages/FoodDatabase.jsx'
import FoodDetail from '../pages/FoodDetail.jsx'
import Placeholder from '../pages/Placeholder.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/meal-planner"
        element={<Placeholder title="Meal Planner" week={4} />}
      />
      <Route path="/calculators/calories" element={<CalorieCalculator />} />
      <Route path="/calculators/protein" element={<ProteinCalculator />} />
      <Route path="/foods" element={<FoodDatabase />} />
      <Route path="/foods/:slug" element={<FoodDetail />} />
      <Route path="/blog" element={<Placeholder title="Blog" week={6} />} />
      <Route
        path="/blog/:slug"
        element={<Placeholder title="Article" week={6} />}
      />
      <Route path="/about" element={<Placeholder title="About" week={6} />} />
      <Route
        path="/contact"
        element={<Placeholder title="Contact" week={6} />}
      />
      <Route path="/faq" element={<Placeholder title="FAQ" week={6} />} />
      <Route
        path="/pricing"
        element={<Placeholder title="Pricing" week={6} />}
      />
      <Route
        path="*"
        element={<Placeholder title="Page Not Found" week={6} />}
      />
    </Routes>
  )
}
