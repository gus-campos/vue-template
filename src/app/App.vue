<script setup lang="ts">
  import { useRouteLayout } from '@/layouts/useRouteLayout';
  const { layout } = useRouteLayout();
</script>

<template>
  <component v-if="layout" :is="layout">
    <router-view />
  </component>
  <template v-else>
    <router-view />
  </template>
</template>
