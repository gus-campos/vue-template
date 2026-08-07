<script setup lang="ts">
  import { useRouteLayout } from '@/layouts/useRouteLayout';
  const { layout } = useRouteLayout();
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
