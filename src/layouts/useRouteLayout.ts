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
  const layoutKey = route.meta.layout as keyof typeof LAYOUTS;

  if (layoutKey && !(layoutKey in LAYOUTS)) {
    throw new Error(
      `Layout key "${layoutKey}" not found. Available: ${Object.keys(LAYOUTS).join(', ')}`,
    );
  }

  const layout = computed(() => (!layoutKey ? null : LAYOUTS[layoutKey]));
  return { layout };
}
