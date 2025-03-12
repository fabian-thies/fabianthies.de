<script lang="ts">
    import downArrow from '$lib/assets/images/down.svg';
    import Shader from "$lib/components/Shader.svelte";
</script>

<article>
    <section class="min-h-screen flex items-center text-title dark:text-title-dark relative">
        <Shader/>
        <div class="absolute top-1/2 -translate-y-1/2 -mt-20 left-30">
            <h1 class="text-9xl font-bold max-w-6xl font-[ClashGrotesk-Bold]">
                Turning ideas into
                <span class="bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent font-[garamond] italic">creative</span>
                solutions.
            </h1>
            <p class="text-3xl font-semibold text-gray-300 mt-10 font-[ClashGrotesk-light]">
                Where Imagination Meets Innovation.
            </p>
        </div>
        <div class="absolute bottom-10 left-0 right-0 flex justify-center">
            <img src={downArrow} alt="down arrow" class="w-10 h-10 animate-bounce"/>
        </div>
    </section>
</article>