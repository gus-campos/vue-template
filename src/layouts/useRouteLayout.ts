import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const LAYOUTS = {
  default: DefaultLayout,
  authenticated: AuthenticatedLayout,
};

export function useRouteLayout() {
  const route = useRoute();

  const layout = computed(() => {
    const layoutKey = route.meta.layout as keyof typeof LAYOUTS;

    if (!layoutKey) return null;

    if (!(layoutKey in LAYOUTS)) {
      const message = `Layout key "${layoutKey}" not found. Available: ${Object.keys(LAYOUTS).join(', ')}`;
      console.error(message);
      throw new Error(message);
    }

    return LAYOUTS[layoutKey as keyof typeof LAYOUTS];
  });

  return { layout };
}
