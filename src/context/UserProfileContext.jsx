import { createContext, useContext, useMemo, useState } from 'react'

/*
 * Global user profile — the single source every calculator and the meal
 * planner reads from (Phase 10 data flow). Values stay null until the
 * user provides them; consumers must handle the incomplete state.
 */
const defaultProfile = {
  age: null,
  gender: null, // 'male' | 'female'
  heightCm: null,
  weightKg: null,
  region: null, // 'north' | 'south' | 'east' | 'west'
  goal: null, // 'weight-loss' | 'weight-gain' | 'muscle-gain' | 'fat-loss' | 'maintenance'
  activityLevel: null, // 'sedentary' | 'light' | 'moderate' | 'very' | 'athlete'
  budget: null, // 'ultra' | 'budget' | 'standard' | 'premium'
  dietType: null, // 'veg' | 'egg' | 'non-veg'
}

const UserProfileContext = createContext(null)

export function UserProfileProvider({ children }) {
  const [profile, setProfile] = useState(defaultProfile)

  const value = useMemo(
    () => ({
      profile,
      updateProfile: (updates) =>
        setProfile((prev) => ({ ...prev, ...updates })),
      resetProfile: () => setProfile(defaultProfile),
      isProfileComplete: Object.values(profile).every((v) => v !== null),
    }),
    [profile],
  )

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  )
}

export function useUserProfile() {
  const ctx = useContext(UserProfileContext)
  if (!ctx) {
    throw new Error('useUserProfile must be used within UserProfileProvider')
  }
  return ctx
}
