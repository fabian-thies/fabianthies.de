<script lang="ts">
    export let project: {
        image: any;
        title: string;
        description: string;
        technologies: string[];
    };
    export let animated: boolean = false;
    
    import SkillTag from './SkillTag.svelte';
</script>

<div class="project-card {animated ? 'opacity-0' : ''} bg-white rounded-xl overflow-hidden shadow-lg border border-[#ff6600]/10 hover:shadow-xl hover:border-[#ff6600]/30 transition-all duration-300 flex flex-col h-full">
    <div class="h-48 overflow-hidden bg-gradient-to-br from-[#ff2d00]/10 via-[#ff6600]/10 to-[#ff9e00]/10 relative">
        <div class="absolute inset-0 flex items-center justify-center">
            <span class="font-[ClashGrotesk-Bold] text-4xl text-[#ff6600]/30">
                <enhanced:img loading="lazy" src={project.image} alt={project.title}/>
            </span>
        </div>
    </div>
    <div class="p-6 flex-grow">
        <h3 class="font-[ClashGrotesk-Semibold] text-2xl text-[#ff6600] mb-2">{project.title}</h3>
        <p class="font-[ClashGrotesk-Regular] text-gray-700 mb-4">
            {project.description}
        </p>
        <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.technologies as tech}
                <SkillTag text={tech} size="small" />
            {/each}
        </div>
    </div>
</div>