<script lang="ts">
    import { Card, ImagePlaceholder } from 'flowbite-svelte';

    let props:{name:string, imgUrl:string, value:string} = $props();

</script>
  
<div class="space-y-4 text-center">
    <Card img={props.imgUrl}>
        <ImagePlaceholder imgOnly={true} divClass="mx-auto my-5"></ImagePlaceholder>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{props.value}</p>
    </Card>
</div>