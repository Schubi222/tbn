<script setup lang="ts">
import { useRecipesStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useRecipesStore()
const { recipesCount } = storeToRefs(store)
</script>

<template>
  <h2>Dashboard</h2>
  <div class="recipe__count">Count:{{ recipesCount }}</div>
</template>
