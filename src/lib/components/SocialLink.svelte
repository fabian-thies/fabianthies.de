<script lang="ts">
    export let link: {
        href: string;
        label: string;
        target?: string;
        icon: string;
    };
</script>

<a href={link.href} target={link.target}
   class="flex gap-x-2 rounded-full border-2 border-[#ff6600]/40 px-2 py-1 hover:bg-[#ff6600]/10 transition-colors">
    {@html link.icon}
    {link.label}
</a>