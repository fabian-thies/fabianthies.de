<script>
    import {onMount} from "svelte";

    onMount(() => {
        const menuText = document.querySelectorAll('.menu-text');
        const menuIcon = document.querySelectorAll('.menu-icon');

        menuText.forEach((text) => {
            text.classList.add('text-black');
        });

        menuIcon.forEach((text) => {
            text.classList.add('text-black');
        });
    });
</script>