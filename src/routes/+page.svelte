<script>
    import { ImagePlaceholder} from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
</script>

<!-- HOME PAGE -->
<svelte:head>
    <title>The Math Success Center - Home</title>
    <meta name="description" content="The Math Success Center, a free tutoring service provided by Lindenwood University. Tutors available for various university math courses, as well as computer science and physics."/>
</svelte:head>

<!-- HERO SECTION -->
<div class="text-center border-b-2 border-black">
    <ImagePlaceholder imgOnly divClass="mt-8 mx-auto" />
    <p>(Logo)</p>

    <h1 class="text-5xl m-5 uppercase">The Math Success Center</h1>

    <p class="italic m-2">"The Math Success Center Tagline"</p>
</div>

<!-- MAIN CONTENT -->
<main>
    <!-- Home page para -->
    <div class="border-2 border-black my-20 mx-10 p-10">
        <h1 class="text-center font-bold text-2xl">Welcome!</h1>
        <p class="my-5"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
            fugit alias quasi veritatis iure voluptas perspiciatis sint repellat 
            neque distinctio veniam labore soluta, nisi similique repellendus natus 
            vitae id inventore! Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Dolores atque fugit reprehenderit fugiat. Eos quibusdam nobis qui 
            voluptatibus deleniti sapiente molestiae quaerat odio. Sit repellendus 
            quis, pariatur odio temporibus voluptatibus.
        </p>
    </div>

    <div class="button-container flex justify-center m-20">
        <!-- Buttons to other page of website -->
        <Button class="m-2" color="dark" pill href="about-page">About Us</Button>
        <Button class="m-2" color="dark" pill href="tutoring-page">Tutoring Services</Button>
        <Button class="m-2" color="dark" pill href="contact-page">Contact Info</Button>
        <Button class="m-2" color="dark" pill href="resource-page">Resources</Button>
    </div>

</main>


<style>
</style>