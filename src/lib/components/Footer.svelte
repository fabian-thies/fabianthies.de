<script lang="ts">
    export let showYear: boolean = true;
</script>

<section class="py-8 bg-white" id="privacy">
    <div class="container mx-auto text-center text-gray-600 text-sm">
        <div class="flex justify-center gap-4">
            <a class="hover:text-[#ff6600] transition-colors" href="/impressum">Impressum</a>
            <span>|</span>
            <a class="hover:text-[#ff6600] transition-colors" href="/datenschutz">Datenschutz</a>
        </div>
        {#if showYear}
            <p class="mt-2">© 2023 Fabian Thies. Alle Rechte vorbehalten.</p>
        {/if}
    </div>
</section>