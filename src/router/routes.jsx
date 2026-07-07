import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import MealPlanner from '../pages/MealPlanner.jsx'
import CalorieCalculator from '../pages/CalorieCalculator.jsx'
import ProteinCalculator from '../pages/ProteinCalculator.jsx'
import ProteinGap from '../pages/ProteinGap.jsx'
import FoodDatabase from '../pages/FoodDatabase.jsx'
import FoodDetail from '../pages/FoodDetail.jsx'
import Blog from '../pages/Blog.jsx'
import BlogPost from '../pages/BlogPost.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import FAQPage from '../pages/FAQPage.jsx'
import Pricing from '../pages/Pricing.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal-planner" element={<MealPlanner />} />
      <Route path="/calculators/calories" element={<CalorieCalculator />} />
      <Route path="/calculators/protein" element={<ProteinCalculator />} />
      <Route path="/protein-gap" element={<ProteinGap />} />
      <Route path="/foods" element={<FoodDatabase />} />
      <Route path="/foods/:slug" element={<FoodDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
