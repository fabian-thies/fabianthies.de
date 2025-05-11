<script lang="ts">
    export let subtitle: string;
    export let title: string;
    export let description: string = '';
</script>

<div class="mb-10 md:mb-16">
    <p class="font-[ClashGrotesk-Medium] text-xl md:text-2xl text-gray-600">{subtitle}</p>
    <h2 class="font-[ClashGrotesk-Semibold] text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-[#ff2d00] via-[#ff6600] to-[#ff9e00] bg-clip-text text-transparent leading-tight">
        {title}
    </h2>
    {#if description}
        <p class="font-[ClashGrotesk-Regular] text-base md:text-lg text-gray-800 max-w-3xl mx-auto mt-4 md:mt-6 px-2">
            {description}
        </p>
    {/if}
</div>