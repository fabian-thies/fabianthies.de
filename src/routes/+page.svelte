<script lang="ts">
    import downArrow from '$lib/assets/images/down.svg';
    import Shader from "$lib/components/Shader.svelte";
    import {onMount} from "svelte";
    import {animate, onScroll} from 'animejs';

    onMount(() => {
        animate('#background-layer', {
            backgroundColor: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
            ease: 'linear',
            autoplay: onScroll({
                target: '#home',
                enter: '30% 60%',
                leave: '40% 100%',
                sync: true,
                debug: true,
            })
        });

        animate('#next-section', {
            backgroundColor: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
            ease: 'linear',
            autoplay: onScroll({
                target: '#home',
                enter: '30% 60%',
                leave: '40% 100%',
                sync: true,
                debug: true,
            })
        });

        animate(['.menu-text', '.menu-icon'], {
            color: ['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)'],
            ease: 'linear',
            autoplay: onScroll({
                target: '#home',
                enter: '30% 60%',
                leave: '40% 100%',
                sync: true,
                debug: true,
            })
        });
    });
</script>

<article>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center text-title dark:text-title-dark relative">
        <div id="background-layer" class="absolute inset-0 z-0"></div>
        <Shader/>
        <div class="absolute top-1/2 transform -translate-y-1/2 -mt-20 left-30">
            <h1 class="text-9xl font-bold max-w-6xl font-[ClashGrotesk-Bold]">
                Turning ideas into
                <span class="bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent font-[garamond] italic">
                    creative
                </span>
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

    <!-- Next Section -->
    <section id="next-section" class="min-h-screen flex items-center justify-center">
        <h2 class="text-5xl">Welcome to the next section!</h2>
    </section>
</article>
