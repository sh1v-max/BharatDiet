import { describe, it, expect } from 'vitest'
import foods from './foods.json'

/*
 * Data-quality gate for the food database (Phase 4). A bad entry here
 * silently corrupts every meal plan, so the dataset is tested like code.
 */

const REGIONS = ['north', 'south', 'east', 'west', 'all']
const DIETS = ['veg', 'egg', 'nonveg']

describe('food database', () => {
  it('has at least 200 items', () => {
    expect(foods.length).toBeGreaterThanOrEqual(200)
  })

  it('has unique ids', () => {
    const ids = foods.map((f) => f.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every item has all required fields with valid types', () => {
    for (const f of foods) {
      expect(f.id, f.id).toMatch(/^[a-z0-9-]+$/)
      expect(typeof f.name).toBe('string')
      expect(typeof f.category).toBe('string')
      expect(typeof f.serving).toBe('string')
      expect(Array.isArray(f.regions)).toBe(true)
      f.regions.forEach((r) => expect(REGIONS, `${f.id} region`).toContain(r))
      expect(DIETS, `${f.id} diet`).toContain(f.diet)
      for (const key of ['cal', 'protein', 'carbs', 'fat', 'cost']) {
        expect(typeof f[key], `${f.id}.${key}`).toBe('number')
        expect(f[key], `${f.id}.${key}`).toBeGreaterThanOrEqual(0)
      }
    }
  })

  it('calories are Atwater-consistent with macros (±25%)', () => {
    for (const f of foods) {
      const computed = f.protein * 4 + f.carbs * 4 + f.fat * 9
      if (computed < 20) continue // near-zero items (chaas, rasam) — skip ratio check
      const ratio = f.cal / computed
      expect(ratio, `${f.id}: cal ${f.cal} vs computed ${computed}`).toBeGreaterThan(0.75)
      expect(ratio, `${f.id}: cal ${f.cal} vs computed ${computed}`).toBeLessThan(1.25)
    }
  })

  it('costs are sane (₹1–₹200 per serving)', () => {
    for (const f of foods) {
      expect(f.cost, f.id).toBeGreaterThanOrEqual(1)
      expect(f.cost, f.id).toBeLessThanOrEqual(200)
    }
  })

  it('every diet type and region has enough coverage to build plans', () => {
    const vegCount = foods.filter((f) => f.diet === 'veg').length
    expect(vegCount).toBeGreaterThan(100)
    for (const region of ['north', 'south', 'east', 'west']) {
      const count = foods.filter(
        (f) => f.regions.includes(region) || f.regions.includes('all'),
      ).length
      expect(count, `region ${region}`).toBeGreaterThan(80)
    }
  })
})
