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

        animate('#about', {
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

    <!-- About Section -->
    <section id="about" class="min-h-screen flex items-center justify-center relative z-10 bg-white text-black">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12">
            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="font-[ClashGrotesk-Medium] text-2xl text-gray-600">About Me</h2>
                <h1 class="font-[ClashGrotesk-Semibold] text-5xl md:text-6xl bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent">
                    Crafting Digital Experiences
                </h1>
                <p class="font-[ClashGrotesk-Regular] text-lg text-gray-800 leading-relaxed">
                    I'm a passionate developer and designer focused on creating innovative digital solutions that
                    combine
                    <span class="font-[ClashGrotesk-Medium] text-[#ff6600]">functionality</span> with
                    <span class="font-[ClashGrotesk-Medium] text-[#ff6600]">aesthetic appeal</span>.
                </p>
                <p class="font-[ClashGrotesk-Regular] text-lg text-gray-800 leading-relaxed">
                    With expertise in modern web technologies and a keen eye for design, I transform complex ideas into
                    intuitive and engaging user experiences.
                </p>
                <div class="pt-4 flex flex-wrap gap-3">
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Web Development</span>
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">UI/UX Design</span>
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Creative Coding</span>
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Problem Solving</span>
                </div>
            </div>
            <div class="w-full md:w-1/2 flex justify-center">
                <div class="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-[#ff6600]/20 shadow-xl">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#ff2d00]/20 via-[#ff6600]/20 to-[#ff9e00]/20"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <span class="font-[ClashGrotesk-Bold] text-8xl text-[#ff6600]/30">FT</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="relative">
        <div class="w-screen h-[40rem] contact-bg before:block after:block flex flex-col justify-center items-center relative z-[2] bg-white text-black">
            <h2 class="font-[ClashGrotesk-Medium] text-2xl text-gray-600 px-4 text-center">Want to collaborate?</h2>
            <h1 class="font-[ClashGrotesk-Semibold] text-7xl text-center px-4 bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent">
                Let's get in touch!
            </h1>
            <div class="flex flex-row gap-x-6 items-center mt-[14vh]">
                <a href="mailto:kontakt@fabianthies.de"
                   class="flex gap-x-2 rounded-full border-2 border-[#ff6600]/40 px-2 py-1 hover:bg-[#ff6600]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="text-[#ff6600]">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/fabian-thies-63026331b/" target="_blank"
                   class="flex gap-x-2 rounded-full border-2 border-[#ff6600]/40 px-2 py-1 hover:bg-[#ff6600]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="text-[#ff6600]">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                </a>
                <a href="https://github.com/fabian-thies" target="_blank"
                   class="flex gap-x-2 rounded-full border-2 border-[#ff6600]/40 px-2 py-1 hover:bg-[#ff6600]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="text-[#ff6600]">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                </a>
            </div>
        </div>
    </section>
</article>
