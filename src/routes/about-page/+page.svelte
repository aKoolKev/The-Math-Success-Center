<script lang="ts">
    import CardComp from "$lib/CardComp.svelte";
    import NavbarComp from "$lib/NavbarComp.svelte";
</script>

<NavbarComp />

<!-- Heading -->
<h1>Meet the Tutors!</h1>

<!-- The tutors -->
<main class="flex justify-center">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
        <CardComp name="Tutor 1" imgUrl="" value="Insert text" />
        <CardComp name="Tutor 2" imgUrl="" value="Insert text" />
        <CardComp name="Tutor 3" imgUrl="" value="Insert text" />
        <CardComp name="Tutor 4" imgUrl="" value="Insert text" />
        <CardComp name="Tutor 5" imgUrl="" value="Insert text" />
        <CardComp name="Tutor 6" imgUrl="" value="Insert text" />
        <CardComp name="Tutor 7" imgUrl="" value="Insert text" />
        <CardComp name="Tutor 8" imgUrl="" value="Insert text" />
    </div>
</main>

<style>
    h1{
        text-align: center;
        font-size: x-large;
        font-weight: bold;
    }
</style>

<!-- Note: Not responsive for tablet or mobile devices yet -->