<script lang="ts">
    import downArrow from '$lib/assets/images/down.svg';
    import Shader from "$lib/components/Shader.svelte";
    import {onMount} from "svelte";
    import {animate, onScroll} from 'animejs';

    import heideKuester from '$lib/assets/images/portfolio/heide-kuester.jpg?enhanced';
    import davidBitterlich from '$lib/assets/images/portfolio/david-bitterlich.jpg?enhanced';
    import gesundheitsreisen from '$lib/assets/images/portfolio/gesundheitsreisen.jpg?enhanced';
    import edudigibook from '$lib/assets/images/portfolio/edudigibook.jpg?enhanced';
    import foerdervereinMurnauer from '$lib/assets/images/portfolio/foerderverein-murnauer-gymnasium.jpg?enhanced';
    import fsm from '$lib/assets/images/portfolio/fsm.jpg?enhanced';

    onMount(() => {
        animate('#background-layer', {
            backgroundColor: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
            ease: 'linear',
            autoplay: onScroll({
                target: '#home',
                enter: '30% 60%',
                leave: '40% 100%',
                sync: true,
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
            })
        });
    });
</script>

<article>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center text-title dark:text-title-dark relative">
        <div id="background-layer" class="absolute inset-0 z-0"></div>
        <Shader/>
        <div class="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            <div class="md:ml-10 lg:ml-20">
                <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold max-w-6xl font-[ClashGrotesk-Bold]">
                    Ideen in
                    <span class="bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent font-[garamond] italic">
                        kreative
                    </span>
                    Lösungen verwandeln.
                </h1>
                <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mt-6 md:mt-10 font-[ClashGrotesk-light]">
                    Wo Vorstellungskraft auf Innovation trifft.
                </p>
            </div>
        </div>
        <div class="absolute bottom-10 left-0 right-0 flex justify-center">
            <img src={downArrow} alt="down arrow" class="w-8 md:w-10 h-8 md:h-10 animate-bounce"/>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="min-h-screen flex items-center justify-center relative z-10 bg-white text-black">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12">
            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="font-[ClashGrotesk-Medium] text-2xl text-gray-600">Über mich</h2>
                <h1 class="font-[ClashGrotesk-Semibold] text-5xl md:text-6xl bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent">
                    Innovation durch Informatik
                </h1>
                <p class="font-[ClashGrotesk-Regular] text-lg text-gray-800 leading-relaxed">
                    Ich bin ein 22-jähriger Student der Angewandten Informatik mit einer Leidenschaft für innovative Technologien. Als Werkstudent im Bereich
                    <span class="font-[ClashGrotesk-Medium] text-[#ff6600]">Research & Development</span> sammle ich wertvolle
                    <span class="font-[ClashGrotesk-Medium] text-[#ff6600]">praktische Erfahrung</span>.
                </p>
                <p class="font-[ClashGrotesk-Regular] text-lg text-gray-800 leading-relaxed">
                    Durch meine Erfahrung in der Web-Entwicklung verbinde ich theoretisches Wissen mit praktischer Anwendung. Mein Ziel ist es, mich stetig weiterzuentwickeln und an zukunftsweisenden, innovativen Projekten mitzuwirken.
                </p>
                <div class="pt-4 flex flex-wrap gap-3">
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Web-Entwicklung</span>
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">CI/CD Automatisierung</span>
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Docker</span>
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Research & Development</span>
                    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Innovation</span>
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
    <section id="portfolio"
             class="min-h-screen py-20 flex items-center justify-center relative z-10 bg-white text-black">
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
            <div class="text-center mb-16">
                <p class="font-[ClashGrotesk-Medium] text-2xl text-gray-600">Meine Arbeit</p>
                <h2 class="font-[ClashGrotesk-Semibold] text-5xl md:text-6xl bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent">
                    Ausgewählte Projekte
                </h2>
                <p class="font-[ClashGrotesk-Regular] text-lg text-gray-800 max-w-3xl mx-auto mt-6">
                    Eine Auswahl meiner neuesten Arbeiten in den Bereichen Webentwicklung, Design und kreatives Programmieren.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-lg border border-[#ff6600]/10 hover:shadow-xl hover:border-[#ff6600]/30 transition-all duration-300 flex flex-col h-full">
                    <div class="h-48 overflow-hidden bg-gradient-to-br from-[#ff2d00]/10 via-[#ff6600]/10 to-[#ff9e00]/10 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="font-[ClashGrotesk-Bold] text-4xl text-[#ff6600]/30">
                                <enhanced:img loading="lazy" src={heideKuester} alt="Project 1"/>
                            </span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="font-[ClashGrotesk-Semibold] text-2xl text-[#ff6600] mb-2">Heide Küster Webseite</h3>
                        <p class="font-[ClashGrotesk-Regular] text-gray-700 mb-4">
                            Eine professionelle Website für systemische Beratung und Supervision mit klarem Design und intuitiver Benutzerführung.
                        </p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Svelte</span>
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">TailwindCSS</span>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-lg border border-[#ff6600]/10 hover:shadow-xl hover:border-[#ff6600]/30 transition-all duration-300 flex flex-col h-full">
                    <div class="h-48 overflow-hidden bg-gradient-to-br from-[#ff2d00]/10 via-[#ff6600]/10 to-[#ff9e00]/10 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="font-[ClashGrotesk-Bold] text-4xl text-[#ff6600]/30">
                                <enhanced:img loading="lazy" src={gesundheitsreisen} alt="Project 1"/>
                            </span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="font-[ClashGrotesk-Semibold] text-2xl text-[#ff6600] mb-2">Gesundheitsreisen Portal</h3>
                        <p class="font-[ClashGrotesk-Regular] text-gray-700 mb-4">
                            Eine dynamische Buchungsplattform für Gesundheitsreisen mit integriertem Reservierungssystem und Verwaltungsbereich.
                        </p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">PHP</span>
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">SQL</span>
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">CSS</span>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="bg-white rounded-xl overflow-hidden shadow-lg border border-[#ff6600]/10 hover:shadow-xl hover:border-[#ff6600]/30 transition-all duration-300 flex flex-col h-full">
                    <div class="h-48 overflow-hidden bg-gradient-to-br from-[#ff2d00]/10 via-[#ff6600]/10 to-[#ff9e00]/10 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="font-[ClashGrotesk-Bold] text-4xl text-[#ff6600]/30">
                                <enhanced:img loading="lazy" src={davidBitterlich} alt="Project 1"/>
                            </span>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="font-[ClashGrotesk-Semibold] text-2xl text-[#ff6600] mb-2">David Bitterlich Webseite</h3>
                        <p class="font-[ClashGrotesk-Regular] text-gray-700 mb-4">
                            Ein dynamisches Portfolio für einen professionellen Coloristen mit eleganter Bildergalerie, Video-Integration und responsivem Design.
                        </p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Figma</span>
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">UI/UX</span>
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">Svelte</span>
                            <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">TailwindCSS</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center">
                <a href="#contact"
                   class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] text-white font-[ClashGrotesk-Medium] hover:shadow-lg hover:shadow-[#ff6600]/20 transition-all duration-300">
                    Mehr Projekte ansehen
                </a>
            </div>
        </div>
    </section>

    <section id="contact" class="relative">
        <div class="w-full h-[40rem] flex flex-col justify-center items-center bg-white text-black">
            <p class="font-[ClashGrotesk-Medium] text-2xl text-gray-600 px-4 text-center">Lust auf Zusammenarbeit?</p>
            <h2 class="font-[ClashGrotesk-Semibold] text-7xl text-center px-4 bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent">
                Lass uns in Kontakt treten!
            </h2>
            <div class="flex flex-row gap-x-6 items-center mt-[14vh]">
                <a href="mailto:kontakt@fabianthies.de"
                   class="flex gap-x-2 rounded-full border-2 border-[#ff6600]/40 px-2 py-1 hover:bg-[#ff6600]/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="text-[#ff6600]">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    E-Mail
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
