# @joknoll/lucide-svelte-animated

Animated [Lucide](https://lucide.dev/) icons as Svelte 5 components.

## Usage

```svelte
<script lang="ts">
	import { Activity, ArrowRight, Bell } from '@joknoll/lucide-svelte-animated';
</script>

<Activity />
<ArrowRight size={20} />
<Bell color="#0f766e" strokeWidth={1.5} animate />
```

All icons are exported as named components and share the same props:

- `size?: number` default `24`
- `color?: string` default `currentColor`
- `strokeWidth?: number` default `2`
- `animate?: boolean`
- `class?: string`

Icons animate on hover and can also be rendered in an animated state with `animate`.
