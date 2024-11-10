<script>
    import AccordianComp from "$lib/AccordianComp.svelte";
import NavbarComp from "$lib/NavbarComp.svelte";


</script>

<NavbarComp />

<main class="w-3/4 mx-auto m-5">
    <h1 class="font-bold text-2xl m-5 text-center"> Useful Resources </h1>
    <AccordianComp />
</main>

<style>
    main{
        min-height: 100vh;
    }
</style>