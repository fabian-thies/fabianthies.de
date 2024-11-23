<script lang="ts">
    import logo from '$lib/assets/images/site-logo.svg';
</script>

<header class="p-8 flex w-full justify-between text-title dark:text-title-dark items-center">
    <nav>
        <a href="/">
            <img src={logo} alt="Site Logo">
        </a>
    </nav>
    <div class="text-2xl flex gap-2 cursor-pointer">
        <h3 class="hidden sm:block">
            menu
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black dark:text-white pt-1">
            <line x1="5" x2="19" y1="9" y2="9"></line>
            <line x1="5" x2="19" y1="15" y2="15"></line>
        </svg>
    </div>
</header>