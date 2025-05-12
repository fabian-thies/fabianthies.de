<script lang="ts">
    import GradientHeading from "$lib/components/GradientHeading.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { projects } from '$lib/data/projects';
</script>

<article>
    <!-- Hero Section -->
    <section class="min-h-[40vh] flex items-center text-black relative bg-white pt-8 md:pt-0">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 text-center py-16 md:py-24">
            <GradientHeading
                    description="Eine vollständige Übersicht meiner Projekte in den Bereichen Webentwicklung, Design und kreatives Programmieren."
                    subtitle="Meine Arbeit"
                    title="Alle Projekte"
            />
        </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16 md:py-20 flex items-center justify-center relative bg-white text-black">
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each projects as project}
                    <ProjectCard {project}/>
                {/each}
            </div>
        </div>
    </section>

    <!-- Back to Home Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto text-center">
            <a class="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] text-white font-[ClashGrotesk-Medium] hover:shadow-lg transition-shadow"
               href="/">
                Zurück zur Startseite
            </a>
        </div>
    </section>

    <Footer/>
</article>
