<script lang="ts">
	import NavbarComp from '$lib/NavbarComp.svelte';
    import { Footer } from 'flowbite-svelte';
	import '../app.css';
    import FooterComp from '$lib/FooterComp.svelte';
	let { children } = $props();
</script>


	<!-- <NavbarComp /> -->

<!-- Page content -->
{@render children()}

<!-- Footer -->
<FooterComp/>