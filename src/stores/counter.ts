import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Recipe } from '@/types/Recipe'

export const useRecipesStore = defineStore('counter', () => {
  const recipes = ref<Recipe[]>()
  const recipesCount = computed(() => recipes.value?.length ?? 0)
  async function fetchRecipes() {
    try {
      const res = await fetch('/data/recipes.json')
      recipes.value = await res.json()
      console.log(recipesCount.value)
    } catch (e) {
      alert(e)
    }
  }
  fetchRecipes()

  return { recipes, recipesCount, fetchRecipes }
})
