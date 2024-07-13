<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/styles/variables.scss'
import '@/styles/global.scss'
import '@/styles/utils.scss'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
