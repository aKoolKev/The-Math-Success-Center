<script>
    import CheckboxComp from "$lib/CheckboxComp.svelte";
import NavbarComp from "$lib/NavbarComp.svelte";
    import SearchBarComp from "$lib/SearchBarComp.svelte";


</script>

<NavbarComp/>

<main>
    <!-- Search for tutor or subject -->
    <SearchBarComp />

    <h1> or </h1>

    <!-- Select tutor or subject -->
    <div class="flex justify-center m-5">
        <CheckboxComp />
    </div>

    <p class="m-5 p-20 border border-black rounded-xl w-1/2 flex mx-auto justify-center">
        Result field
    </p>

    <hr class="border border-black">

    <!-- Tutor Schedule -->
    <div class="flex justify-center">
        <p class="tutor-table m-10 border border-black text-center"> Table display of the tutor schedule </p>
    </div>
</main>

<style>
    h1{
        font-weight: bold;
        font-size: x-large;
        margin-top: 30px;
        text-align: center;
    }

    .tutor-table{
        width: 50vw;
        height: 75vh;   
    }



</style>