<script>
    import NavbarComp from "$lib/NavbarComp.svelte";
    import { Button, Card } from "flowbite-svelte";
</script>

<NavbarComp />

<main class="flex flex-col items-center justify-center">
    
    <!-- Director -->
    <h1>Meet the Director</h1>
    <Card class="text-center m-7">
    
        <!-- Name -->
        <h2 class="font-bold text-black text-lg">Name</h2>
        <!-- Title -->
        <p>Title</p>
    
        <!-- Card content container -->
        <div class="grid grid-cols-2 gap-0 border border-black p-5">
            <!-- Col 1 -->
            <div class= "m-1 border border-black">
                <img src="" alt="Insert Img Here">
            </div>
            <!-- Col 2 -->
            <div>
                <p class="border border-black m-1"> Lorem, ipsum dolor sit amet consectetur adipisicing elit! </p>
                <Button class="py-2">Email</Button>
            </div>
        </div>
    
    </Card>

    <!-- SEO to Tutoring page -->
    <Button>Meet the Tutors!</Button>

    <!-- Location & Hours -->
    <h1> Our Location and Operating Hours </h1>
    <div class="grid grid-cols-2 border border-black m-5 w-3/4">
        <!-- COL 1: Embeded map -->
        <div class="border border-black m-3">
            <p class="p-15 m-5">Embeded Map</p>
        </div>

        <!-- COL 2: Hour table -->
        <div class="border border-black m-3">
            <!-- <table class="border border-black p-15 m-5">Table of Hours</p> -->
            <table class="min-w-full border-collapse border border-gray-300">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="border border-gray-300 px-4 py-2 text-left">Day</th>
                        <th class="border border-gray-300 px-4 py-2 text-left">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="border border-gray-300 px-4 py-2">...</td>
                        <td class="border border-gray-300 px-4 py-2">...</td>
                    </tr>
                    <tr class="bg-gray-50">
                        <td class="border border-gray-300 px-4 py-2">...</td>
                        <td class="border border-gray-300 px-4 py-2">...</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="border border-gray-300 px-4 py-2">...</td>
                        <td class="border border-gray-300 px-4 py-2">...</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>


    <h1>Leave Feedback</h1>
    <div>
        <p class="p-20 m-5 border border-black">QR Code</p>
    </div>



</main>


<style>
    h1{
        font-weight: bold;
        font-size: x-large;
        margin-top: 30px;
    }
</style>