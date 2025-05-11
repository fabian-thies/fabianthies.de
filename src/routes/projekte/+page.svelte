<script lang="ts">
    import heideKuester from '$lib/assets/images/portfolio/heide-kuester.jpg?enhanced';
    import davidBitterlich from '$lib/assets/images/portfolio/david-bitterlich.jpg?enhanced';
    import gesundheitsreisen from '$lib/assets/images/portfolio/gesundheitsreisen.jpg?enhanced';
    import edudigibook from '$lib/assets/images/portfolio/edudigibook.jpg?enhanced';
    import foerdervereinMurnauer from '$lib/assets/images/portfolio/foerderverein-murnauer-gymnasium.jpg?enhanced';
    import fsm from '$lib/assets/images/portfolio/fsm.jpg?enhanced';

    import GradientHeading from "$lib/components/GradientHeading.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Footer from "$lib/components/Footer.svelte";

    const projects = [
        {
            image: heideKuester,
            title: "Heide Küster Webseite",
            description: "Eine professionelle Website für systemische Beratung und Supervision mit klarem Design und intuitiver Benutzerführung.",
            technologies: ["Svelte", "TailwindCSS"]
        },
        {
            image: gesundheitsreisen,
            title: "Gesundheitsreisen Portal",
            description: "Eine dynamische Buchungsplattform für Gesundheitsreisen mit integriertem Reservierungssystem und Verwaltungsbereich.",
            technologies: ["PHP", "SQL", "CSS"]
        },
        {
            image: davidBitterlich,
            title: "David Bitterlich Webseite",
            description: "Ein dynamisches Portfolio für einen professionellen Coloristen mit eleganter Bildergalerie, Video-Integration und responsivem Design.",
            technologies: ["Figma", "UI/UX", "Svelte", "TailwindCSS"]
        }, {
            image: edudigibook,
            title: "EduDigiBook Online-Shop",
            description: "Ein moderner Online-Shop für digitale Schulvideos, speziell konzipiert für Grund- und Mittelschulen. Der Fokus liegt auf englischsprachigen Lehrfilmen, entwickelt für die MedienLB, einen führenden Anbieter hochwertiger Bildungsmedien.",
            technologies: ["Wordpress", "Figma", "Custom Theme"]
        },
        {
            image: foerdervereinMurnauer,
            title: "Förderverein Murnauer Gymnasium",
            description: "Eine moderne Website für den Förderverein mit klarer Struktur und einfacher Navigation.",
            technologies: ["Wordpress"]
        },
        {
            image: fsm,
            title: "Fragen-Staunen-Mitmachen",
            description: "Die Lernplattform wurde gemeinsam mit Lehrern und Schülern entwickelt, für Einzel- und Gruppenarbeit auf mobilen Endgeräten optimiert und fördert interaktives Lernen. Die Website spiegelt die individuellen Vorgaben der Betreiber wider.",
            technologies: ["PHP", "SQL", "CSS"]
        },
    ];
</script>

<article>
    <!-- Hero Section -->
    <section class="min-h-[40vh] flex items-center text-black relative bg-white">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 text-center py-16 md:py-24">
            <GradientHeading
                subtitle="Meine Arbeit"
                title="Alle Projekte"
                description="Eine vollständige Übersicht meiner Projekte in den Bereichen Webentwicklung, Design und kreatives Programmieren."
            />
        </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16 md:py-20 flex items-center justify-center relative bg-white text-black">
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each projects as project}
                    <ProjectCard {project} />
                {/each}
            </div>
        </div>
    </section>

    <!-- Back to Home Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto text-center">
            <a href="/"
               class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] text-white font-[ClashGrotesk-Medium] hover:shadow-lg transition-shadow">
                Zurück zur Startseite
            </a>
        </div>
    </section>

    <Footer />
</article>
