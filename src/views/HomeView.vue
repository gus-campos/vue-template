<script setup lang="ts">
  import { ref } from 'vue';

  const drawerOpened = ref(false);

  const handleToggleDrawer = () => (drawerOpened.value = !drawerOpened.value);
</script>

<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon v-if="!drawerOpened" @click="handleToggleDrawer" />
        <v-btn v-else icon="mdi-close" @click="handleToggleDrawer" />
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-heart" />
        <v-btn icon="mdi-magnify" />
        <v-btn icon="mdi-dots-vertical" />
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawerOpened">
      <v-list>
        <v-list-item title="Reagen" subtitle="Menu">
          <template #append> </template>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link title="List Item 1" />
        <v-list-item link title="List Item 2" />
        <v-list-item link title="List Item 3" />
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
