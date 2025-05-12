<script>
    import Shader from "$lib/components/Shader.svelte";
    import TypeWriter from "$lib/components/TypeWriter.svelte";
    import {onMount} from "svelte";

    let {error, status} = $props();

    let errorMessage = "Ein Fehler ist aufgetreten.";

    onMount(() => {
        const menuText = document.querySelectorAll('.menu-text');
        const menuIcon = document.querySelectorAll('.menu-icon');

        menuText.forEach((text) => {
            text.classList.add('text-black');
        });

        menuIcon.forEach((icon) => {
            icon.classList.add('text-black');
        });
    });
</script>

<section class="min-h-screen flex items-center justify-center text-title-dark relative">
    <div class="absolute inset-0 z-0 bg-white"></div>
    <Shader/>

    <div class="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
        <h1 class="text-8xl sm:text-[10rem] font-bold font-[ClashGrotesk-Bold]">
            <span class="bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent">
                {status || '404'}
            </span>
        </h1>

        <div class="mt-6 md:mt-10">
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-[ClashGrotesk-Medium] text-black">
                <TypeWriter
                        loop={false}
                        speed={50}
                        text={errorMessage}
                />
            </h2>
        </div>

        <div class="mt-12 md:mt-16">
            <a class="px-6 py-3 bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] text-white rounded-md font-[ClashGrotesk-Medium] text-lg hover:opacity-90 transition-opacity"
               href="/">
                Zurück zur Startseite
            </a>
        </div>
    </div>
</section>
