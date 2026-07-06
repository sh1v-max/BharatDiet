import Input from '../common/Input.jsx'
import Select from '../common/Select.jsx'
import { useUserProfile } from '../../context/UserProfileContext.jsx'

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

const activityOptions = [
  { value: 'sedentary', label: 'Sedentary — desk job, no exercise' },
  { value: 'light', label: 'Lightly Active — 1–3 days/week' },
  { value: 'moderate', label: 'Moderately Active — 3–5 days/week' },
  { value: 'very', label: 'Very Active — 6–7 days/week' },
  { value: 'athlete', label: 'Athlete — training twice daily' },
]

const goalOptions = [
  { value: 'weight-loss', label: 'Weight Loss' },
  { value: 'fat-loss', label: 'Fat Loss (keep muscle)' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'muscle-gain', label: 'Muscle Gain' },
  { value: 'weight-gain', label: 'Weight Gain' },
]

/*
 * Shared profile form — writes straight to UserProfileContext so the
 * calorie calculator, protein calculator, and meal planner all stay in sync.
 */
export default function CalculatorForm() {
  const { profile, updateProfile } = useUserProfile()

  const num = (field) => (e) =>
    updateProfile({ [field]: e.target.value === '' ? null : Number(e.target.value) })
  const str = (field) => (e) =>
    updateProfile({ [field]: e.target.value || null })

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
      <Input
        label="Age"
        type="number"
        min="13"
        max="100"
        inputMode="numeric"
        placeholder="e.g. 24"
        value={profile.age ?? ''}
        onChange={num('age')}
      />
      <Select
        label="Gender"
        options={genderOptions}
        value={profile.gender ?? ''}
        onChange={str('gender')}
      />
      <Input
        label="Height (cm)"
        type="number"
        min="120"
        max="230"
        inputMode="numeric"
        placeholder="e.g. 172"
        value={profile.heightCm ?? ''}
        onChange={num('heightCm')}
      />
      <Input
        label="Weight (kg)"
        type="number"
        min="30"
        max="250"
        inputMode="numeric"
        placeholder="e.g. 68"
        value={profile.weightKg ?? ''}
        onChange={num('weightKg')}
      />
      <Select
        label="Activity Level"
        options={activityOptions}
        value={profile.activityLevel ?? ''}
        onChange={str('activityLevel')}
        className="sm:col-span-2"
      />
      <Select
        label="Goal"
        options={goalOptions}
        value={profile.goal ?? ''}
        onChange={str('goal')}
        className="sm:col-span-2"
      />
    </form>
  )
}
