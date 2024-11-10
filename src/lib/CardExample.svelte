<script lang="ts">
    import alex from '$lib/favicon.png'
    import type { Snippet } from 'svelte';

    // giving card components properties
    // let props:{message:string, myName:string} = $props();

    //using Snippet for inserting things inside tag
    let props:{ children:Snippet, myName:string} = $props();

    // Object derefernecing example
    // let {children, myName}:{children:Snippet, myName:string} = $props();


</script>

<!-- using object dereferecnig -->
<!-- <h1>{myName}</h1> -->
<h1>{props.myName}</h1>
<div class="border border-black p-4 rounded-md shadow-md bg-white">

    <!-- Need to call render to get the Snipper -->
    <!-- <p>{@render children()}</p> -->
    <p>{@render props.children()}</p>
</div>

<style>
    h1{
        font-weight: bold; font-size: 20px;
    }
</style>