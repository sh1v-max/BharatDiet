import Select from '../common/Select.jsx'
import { useUserProfile } from '../../context/UserProfileContext.jsx'

const regionOptions = [
  { value: 'north', label: 'North India — roti, rajma, paneer' },
  { value: 'south', label: 'South India — rice, idli, sambar' },
  { value: 'east', label: 'East India — rice, fish, sattu' },
  { value: 'west', label: 'West India — bajra, dal, thepla' },
]

const dietOptions = [
  { value: 'veg', label: 'Vegetarian' },
  { value: 'egg', label: 'Eggetarian (veg + eggs)' },
  { value: 'nonveg', label: 'Non-Vegetarian' },
]

const budgetOptions = [
  { value: 'ultra', label: 'Ultra Budget — under ₹100/day' },
  { value: 'budget', label: 'Budget — ₹100–200/day' },
  { value: 'standard', label: 'Standard — ₹200–350/day' },
  { value: 'premium', label: 'Premium — ₹350+/day' },
]

/* The three plan-shaping choices beyond the body-stats form. */
export default function PlanPreferencesForm() {
  const { profile, updateProfile } = useUserProfile()
  const set = (field) => (e) => updateProfile({ [field]: e.target.value || null })

  return (
    <div className="grid gap-4">
      <Select
        label="Your region's food"
        options={regionOptions}
        value={profile.region ?? ''}
        onChange={set('region')}
      />
      <Select
        label="Dietary preference"
        options={dietOptions}
        value={profile.dietType ?? ''}
        onChange={set('dietType')}
      />
      <Select
        label="Daily food budget"
        options={budgetOptions}
        value={profile.budget ?? ''}
        onChange={set('budget')}
      />
    </div>
  )
}
