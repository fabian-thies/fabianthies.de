<script lang="ts">
    export let showYear: boolean = true;
</script>

<section id="privacy" class="py-8 bg-white">
    <div class="container mx-auto text-center text-gray-600 text-sm">
        <div class="flex justify-center gap-4">
            <a href="/impressum" class="hover:text-[#ff6600] transition-colors">Impressum</a>
            <span>|</span>
            <a href="/datenschutz" class="hover:text-[#ff6600] transition-colors">Datenschutz</a>
        </div>
        {#if showYear}
            <p class="mt-2">© 2023 Fabian Thies. Alle Rechte vorbehalten.</p>
        {/if}
    </div>
</section>