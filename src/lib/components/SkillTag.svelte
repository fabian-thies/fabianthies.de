<script lang="ts">
    export let text: string;
    export let size: 'small' | 'normal' = 'normal';
</script>

{#if size === 'small'}
    <span class="px-2 py-1 text-xs rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">{text}</span>
{:else}
    <span class="px-4 py-2 rounded-full bg-[#ff6600]/10 text-[#ff6600] font-[ClashGrotesk-Medium]">{text}</span>
{/if}