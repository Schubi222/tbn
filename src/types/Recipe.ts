export type Recipe = {
  name: string
  image?: string
  description?: string
  ingredients: Ingredient[]
  portions: number
}
export type Ingredient = {
  name: string
  quantity: number
  unit: 'kg' | 'g' | 'l' | 'ml'
}
