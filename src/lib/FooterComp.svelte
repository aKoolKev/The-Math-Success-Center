<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterIcon, ImagePlaceholder} from 'flowbite-svelte';
    import { InstagramSolid } from 'flowbite-svelte-icons';
</script>
  

<Footer>
  
    <div class="grid grid-cols-3 bg-gray-200 p-2">

        <!-- COL 1 -->
        <div class="flex my-auto">
            <!-- School logo -->
            <img src="" alt="Logo" class="p-3 mx-5 border border-black">
            <!-- School name & slogan -->
            <div class="flex-col text-xs m-0">
                <h1 class="font-bold">Lindenwood University</h1>
                <h6>Real Experience. </h6>
                <h6>Real Success. </h6>
            </div>

            <!-- Social media handle -->
            <FooterIcon href="/" class="my-auto">
                <InstagramSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white mx-5" />
            </FooterIcon>
        </div>

        <!-- COL 2  -->
        <div class="flex-col mt-auto">
            <!-- Copyright -->
            <FooterCopyright by="The Math Success Center." year={2024} />
        </div>

        <!-- COL 3 -->
        <div class="flex justify-start mt-auto">
            <FooterLinkGroup ulClass="flex justify-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <!-- Back to top of page-->
                <FooterLink href="#" class="text-sm text-gray-500 dark:text-gray-400">Back to Top</FooterLink>
            </FooterLinkGroup>
        </div>
    </div>

</Footer>

<style>

</style>

<!-- Note: Footer is not responsive for mobile view yet -->