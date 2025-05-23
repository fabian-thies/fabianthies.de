<script lang="ts">
    import downArrow from '$lib/assets/images/down.svg';
    import Shader from "$lib/components/Shader.svelte";
    import {onDestroy, onMount} from "svelte";
    import {gsap} from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';

    import TypeWriter from "$lib/components/TypeWriter.svelte";
    import GradientHeading from "$lib/components/GradientHeading.svelte";
    import SkillTag from "$lib/components/SkillTag.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import SocialLink from "$lib/components/SocialLink.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { featuredProjects } from '$lib/data/projects';
    import { socialLinks } from '$lib/data/socialLinks';

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('#background-layer',
            {backgroundColor: 'rgba(255, 255, 255, 0)'},
            {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '#home',
                    start: 'center center',
                    end: 'bottom center',
                    scrub: 0.35
                }
            }
        );

        gsap.fromTo(['.menu-text', '.menu-icon'],
            {color: 'rgba(255, 255, 255, 1)'},
            {
                color: 'rgba(0, 0, 0, 1)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '#home',
                    start: 'center center',
                    end: 'bottom center',
                    scrub: 0.35
                }
            }
        );

        gsap.fromTo('#about',
            {opacity: 0},
            {
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#home',
                    start: 'center center',
                    end: 'bottom center',
                    scrub: 0.35
                }
            }
        );
        onDestroy(() => {
            scrollTriggers.forEach(st => st.kill());
            gsap.set(['.menu-text', '.menu-icon'], {clearProps: "color"});
            gsap.set('#background-layer', {clearProps: "backgroundColor"});
            gsap.set('#about', {clearProps: "opacity"});
        });
    });
</script>

<article>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center text-title dark:text-title-dark relative" id="home">
        <div class="absolute inset-0 z-0" id="background-layer"></div>
        <Shader/>
        <div class="container mx-auto px-4 md:px-8 lg:px-16 relative ">
            <div class="text-center md:text-left md:ml-10 lg:ml-20">
                <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold max-w-6xl font-[ClashGrotesk-Bold]">
                    Ideen in
                    <span class="bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent font-[garamond] italic">
                        kreative
                    </span>
                    Lösungen verwandeln.
                </h1>
                <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mt-4 md:mt-10 font-[ClashGrotesk-light]">
                    <TypeWriter
                            loop={true}
                            speed={50}
                            text="Wo Vorstellungskraft auf Innovation trifft."></TypeWriter>
                </p>
            </div>
        </div>
        <div class="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center">
            <img alt="down arrow" class="w-8 md:w-10 h-8 md:h-10 animate-bounce" src={downArrow}/>
        </div>
    </section>

    <!-- About Section -->
    <section class="min-h-screen flex items-center justify-center py-24 md:py-0 relative  bg-white text-black"
             id="about">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div class="w-full md:w-1/2 space-y-4 md:space-y-6">
                <GradientHeading
                        subtitle="Über mich"
                        title="Innovation durch Informatik"
                />
                <p class="font-[ClashGrotesk-Regular] text-lg text-gray-800 leading-relaxed">
                    Ich bin ein 22-jähriger Student der Angewandten Informatik mit einer Leidenschaft für innovative
                    Technologien. Als Werkstudent im Bereich
                    <span class="font-[ClashGrotesk-Medium] text-[#ff6600]">Research & Development</span> sammle ich
                    wertvolle
                    <span class="font-[ClashGrotesk-Medium] text-[#ff6600]">praktische Erfahrung</span>.
                </p>
                <p class="font-[ClashGrotesk-Regular] text-lg text-gray-800 leading-relaxed">
                    Durch meine Erfahrung in der Web-Entwicklung verbinde ich theoretisches Wissen mit praktischer
                    Anwendung. Mein Ziel ist es, mich stetig weiterzuentwickeln und an zukunftsweisenden, innovativen
                    Projekten mitzuwirken.
                </p>
                <div class="pt-4 flex flex-wrap gap-3">
                    <SkillTag text="Full-Stack-Entwicklung"/>
                    <SkillTag text="DevOps & CI/CD"/>
                    <SkillTag text="Backend- & API-Entwicklung"/>
                    <SkillTag text="Datenbank-Management"/>
                    <SkillTag text="App-Entwicklung"/>
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

    <!-- Portfolio Section -->
    <section class="min-h-screen py-16 md:py-20 flex items-center justify-center relative bg-white text-black"
             id="portfolio">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <GradientHeading
                    description="Eine Auswahl meiner neuesten Arbeiten in den Bereichen Webentwicklung, Design und kreatives Programmieren."
                    subtitle="Meine Arbeit"
                    title="Ausgewählte Projekte"
            />

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each featuredProjects as project}
                    <ProjectCard {project} animated={false}/>
                {/each}
            </div>

            <div class="mt-12 text-center">
                <a class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] text-white font-[ClashGrotesk-Medium] hover:shadow-lg transition-shadow"
                   href="/projekte">
                    Alle Projekte anzeigen
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="relative" id="contact">
        <div class="w-full min-h-[30rem] md:min-h-[40rem] py-16 md:py-0 flex flex-col justify-center items-center bg-white text-black text-center">
            <GradientHeading
                    subtitle="Lust auf Zusammenarbeit?"
                    title="Lass uns in Kontakt treten!"
            />
            <div class="flex flex-row gap-x-2 md:gap-x-6 items-center mt-[14vh]">
                {#each socialLinks as link}
                    <SocialLink {link}/>
                {/each}
            </div>
        </div>
    </section>

    <Footer/>
</article>
