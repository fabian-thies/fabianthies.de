<script lang="ts">
    import SkillTag from './SkillTag.svelte';

    export let project: {
        image: any;
        title: string;
        description: string;
        technologies: string[];
        href?: string;
    };
    export let animated: boolean = false;

    const Wrapper = project.href ? 'a' : 'div';
    const wrapperProps = project.href
        ? {href: project.href, target: '_blank', rel: 'noopener noreferrer'}
        : {};
</script>

<svelte:element
        this={Wrapper}
        class="block h-full"
        {...wrapperProps}
>
    <div
            class="project-card bg-white rounded-xl overflow-hidden shadow-lg border border-[#ff6600]/10 hover:shadow-xl hover:border-[#ff6600]/30 transition-all duration-300 flex flex-col h-full"
            class:opacity-0={animated}
    >
        <div class="h-48 overflow-hidden bg-gradient-to-br from-[#ff2d00]/10 via-[#ff6600]/10 to-[#ff9e00]/10 relative">
            <div class="absolute inset-0 flex items-center justify-center">
        <span class="font-[ClashGrotesk-Bold] text-4xl text-[#ff6600]/30">
          <enhanced:img alt={project.title} loading="lazy" src={project.image}/>
        </span>
            </div>
        </div>
        <div class="p-6 flex-grow">
            <h3 class="font-[ClashGrotesk-Semibold] text-2xl text-[#ff6600] mb-2">
                {project.title}
            </h3>
            <p class="font-[ClashGrotesk-Regular] text-gray-700 mb-4">
                {project.description}
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
                {#each project.technologies as tech}
                    <SkillTag text={tech} size="small"/>
                {/each}
            </div>
        </div>
    </div>
</svelte:element>
