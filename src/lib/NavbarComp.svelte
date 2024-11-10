<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;

</script>
  
<Navbar>
    <!-- Logo -->
    <NavBrand href="/">
        <div class="my-placeholder bg-gray-200 rounded-md p-3">Logo</div> 
    </NavBrand>

<NavHamburger />
<NavUl {activeUrl}>
<NavLi href="/">Home</NavLi>
<NavLi href="/about-page">About</NavLi>
<NavLi href="/tutoring-page">Tutoring</NavLi>
<NavLi href="/contact-page">Contact</NavLi>
<NavLi href="/resource-page">Resources</NavLi>
</NavUl>
</Navbar>

<style>
</style>
