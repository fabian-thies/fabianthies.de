<script lang="ts">
    import Shader from "$lib/components/Shader.svelte";
    import {onDestroy, onMount} from "svelte";
    import {gsap} from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';

    import GradientHeading from "$lib/components/GradientHeading.svelte";
    import SkillTag from "$lib/components/SkillTag.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import SocialLink from "$lib/components/SocialLink.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import {featuredProjects} from '$lib/data/projects';
    import {socialLinks} from '$lib/data/socialLinks';

    const pageTitle = 'Fabian Thies | Informatik, Webentwicklung & Portfolio';
    const pageDescription = 'Portfolio von Fabian Thies: Student der Angewandten Informatik, Werkstudent im Research & Development und Ansprechpartner für moderne Webseiten und digitale Lösungen.';
    const canonicalUrl = 'https://fabianthies.de/';
    const ogImageUrl = 'https://fabianthies.de/images/og-image.png';
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${canonicalUrl}#person`,
                name: 'Fabian Thies',
                url: canonicalUrl,
                email: 'mailto:kontakt@fabianthies.de',
                jobTitle: 'Student der Angewandten Informatik und Werkstudent im Bereich Research & Development',
                sameAs: [
                    'https://www.linkedin.com/in/fabianthies',
                    'https://github.com/fabian-thies'
                ],
                knowsAbout: [
                    'Webentwicklung',
                    'Svelte',
                    'TailwindCSS',
                    'Docker',
                    'CI/CD Automatisierung',
                    'Research & Development',
                    'Softwareentwicklung'
                ]
            },
            {
                '@type': 'WebSite',
                '@id': `${canonicalUrl}#website`,
                url: canonicalUrl,
                name: 'Fabian Thies Portfolio',
                inLanguage: 'de-DE',
                publisher: {'@id': `${canonicalUrl}#person`}
            },
            {
                '@type': 'ProfilePage',
                '@id': canonicalUrl,
                url: canonicalUrl,
                name: pageTitle,
                description: pageDescription,
                inLanguage: 'de-DE',
                isPartOf: {'@id': `${canonicalUrl}#website`},
                about: {'@id': `${canonicalUrl}#person`},
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: ogImageUrl
                }
            }
        ]
    };
    const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
    const structuredDataTag = `<script type="application/ld+json">${structuredDataJson}<` + '/script>';

    const calculateAge = () => {
        const birthDate = new Date(2002, 11);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0) {
            age--;
        }

        return age;
    };

    const age = calculateAge();

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

        gsap.fromTo('#hero-content',
            {opacity: 1, y: 0},
            {
                opacity: 0,
                y: -24,
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
            ScrollTrigger.getAll().forEach((st) => st.kill());
            gsap.set(['.menu-text', '.menu-icon'], {clearProps: "color"});
            gsap.set('#background-layer', {clearProps: "backgroundColor"});
            gsap.set('#about', {clearProps: "opacity"});
            gsap.set('#hero-content', {clearProps: "opacity,transform"});
        });
    });
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription}/>
    <meta name="robots" content="index, follow, max-image-preview:large"/>
    <link rel="canonical" href={canonicalUrl}/>

    <meta property="og:type" content="profile"/>
    <meta property="og:locale" content="de_DE"/>
    <meta property="og:site_name" content="Fabian Thies"/>
    <meta property="og:url" content={canonicalUrl}/>
    <meta property="og:title" content={pageTitle}/>
    <meta property="og:description" content={pageDescription}/>
    <meta property="og:image" content={ogImageUrl}/>
    <meta property="og:image:alt" content="Portfolio von Fabian Thies"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={pageTitle}/>
    <meta name="twitter:description" content={pageDescription}/>
    <meta name="twitter:image" content={ogImageUrl}/>
    {@html structuredDataTag}
</svelte:head>

<article>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center text-title dark:text-title-dark relative overflow-hidden" id="home">
        <div class="absolute inset-0 z-0" id="background-layer"></div>
        <Shader/>
        <div class="container mx-auto px-4 md:px-8 lg:px-16 relative">
            <div class="flex min-h-screen items-center pt-28 pb-20 md:ml-10 lg:ml-20" id="hero-content">
                <div class="max-w-4xl text-center md:text-left">
                    <h1 class="font-[ClashGrotesk-Bold] text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-none">
                        Hey, ich bin
                        <span class="bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent font-[ClashGrotesk-Bold]">
                            Fabian
                        </span>.
                    </h1>
                    <p class="mt-6 max-w-2xl font-[ClashGrotesk-Regular] text-lg sm:text-xl md:text-2xl leading-relaxed text-white/75 md:mt-8">
                        Softwareentwickler, Informatikstudent und R&D-Werkstudent mit Blick für Code und Gestaltung.
                    </p>
                    <div class="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 md:mt-10">
                        <a class="inline-flex min-h-12 items-center justify-center border border-white bg-white px-6 text-base font-[ClashGrotesk-Medium] text-black transition-colors hover:bg-transparent hover:text-white"
                           href="#portfolio">
                            Projekte ansehen
                        </a>
                        <a class="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 text-base font-[ClashGrotesk-Medium] text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                           href="#contact">
                            Kontakt aufnehmen
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/50 md:flex">
            <span class="font-[ClashGrotesk-Regular] text-xs uppercase tracking-[0.22em]">Scroll</span>
            <span class="h-12 w-px bg-white/30"></span>
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
                    Ich bin ein {age}-jähriger Student der Angewandten Informatik mit einer Leidenschaft für innovative
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
                <!--
                <div class="pt-4 flex flex-wrap gap-3">
                    <SkillTag text="Full-Stack-Entwicklung"/>
                    <SkillTag text="DevOps & CI/CD"/>
                    <SkillTag text="App-Entwicklung"/>
                </div>
                -->
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
            <div class="flex flex-row gap-x-2 md:gap-x-6 items-center mt-10 md:mt-16">
                {#each socialLinks as link}
                    <SocialLink {link}/>
                {/each}
            </div>
        </div>
    </section>

    <Footer/>
</article>
