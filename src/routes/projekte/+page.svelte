<script lang="ts">
    import GradientHeading from "$lib/components/GradientHeading.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import {projects} from '$lib/data/projects';

    const pageTitle = 'Projekte | Webentwicklung Portfolio von Fabian Thies';
    const pageDescription = 'Ausgewählte Webentwicklungsprojekte von Fabian Thies: Svelte, TailwindCSS, WordPress, PHP, SQL, UI/UX und individuelle digitale Lösungen.';
    const canonicalUrl = 'https://fabianthies.de/projekte';
    const ogImageUrl = 'https://fabianthies.de/images/og-image.png';
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: 'de-DE',
        isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://fabianthies.de/#website',
            name: 'Fabian Thies Portfolio',
            url: 'https://fabianthies.de/'
        },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: projects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'CreativeWork',
                    name: project.title,
                    description: project.description,
                    url: project.href ?? canonicalUrl,
                    creator: {
                        '@type': 'Person',
                        '@id': 'https://fabianthies.de/#person',
                        name: 'Fabian Thies'
                    },
                    keywords: project.technologies.join(', ')
                }
            }))
        }
    };
    const structuredDataJson = JSON.stringify(structuredData).replace(/</g, '\\u003c');
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription}/>
    <meta name="robots" content="index, follow, max-image-preview:large"/>
    <link rel="canonical" href={canonicalUrl}/>

    <meta property="og:type" content="website"/>
    <meta property="og:locale" content="de_DE"/>
    <meta property="og:site_name" content="Fabian Thies"/>
    <meta property="og:url" content={canonicalUrl}/>
    <meta property="og:title" content={pageTitle}/>
    <meta property="og:description" content={pageDescription}/>
    <meta property="og:image" content={ogImageUrl}/>
    <meta property="og:image:alt" content="Projektübersicht von Fabian Thies"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={pageTitle}/>
    <meta name="twitter:description" content={pageDescription}/>
    <meta name="twitter:image" content={ogImageUrl}/>
    <script type="application/ld+json">{@html structuredDataJson}</script>
</svelte:head>

<article>
    <!-- Hero Section -->
    <section class="text-black relative bg-white pt-28 md:pt-32">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 text-center pb-8 md:pb-10">
            <GradientHeading
                    description="Eine vollständige Übersicht meiner Projekte in den Bereichen Webentwicklung, Design und kreatives Programmieren."
                    subtitle="Meine Arbeit"
                    title="Alle Projekte"
            />
        </div>
    </section>

    <!-- Projects Section -->
    <section class="pt-6 pb-12 md:pt-8 md:pb-16 flex items-center justify-center relative bg-white text-black">
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each projects as project}
                    <ProjectCard {project}/>
                {/each}
            </div>
        </div>
    </section>

    <!-- Back to Home Section -->
    <section class="py-10 md:py-12 bg-white">
        <div class="container mx-auto text-center">
            <a class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] text-white font-[ClashGrotesk-Medium] hover:shadow-lg transition-shadow"
               href="/">
                Zurück zur Startseite
            </a>
        </div>
    </section>

    <Footer/>
</article>
