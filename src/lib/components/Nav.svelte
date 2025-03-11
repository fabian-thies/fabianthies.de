<!-- src/lib/components/Nav.svelte -->
<script lang=\`ts\`>
    import logo from '$lib/assets/images/site-logo.svg';
    import {fly} from 'svelte/transition';
    import {quadInOut} from 'svelte/easing';

    let showMenu = false;

    function onclick() {
        showMenu = !showMenu;
    }
</script>

<header class="p-8 flex w-full justify-between text-title dark:text-title-dark items-center z-50 fixed">
    <nav>
        <a href="/">
            <img src={logo} alt="Site Logo">
        </a>
    </nav>
    <div class="text-2xl flex gap-2">
        <button {onclick} class="flex flex-nowrap hover:cursor-pointer">
            <span class="hidden sm:block">
                menu
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="text-black dark:text-white pt-1">
                <line x1="5" x2="19" y1="9" y2="9"></line>
                <line x1="5" x2="19" y1="15" y2="15"></line>
            </svg>
        </button>
    </div>
    {#if showMenu}
        <aside
                class="fixed right-0 top-0 h-screen w-full sm:w-[40rem] px-10 flex content-center justify-center items-center bg-background-dark dark:bg-background text-title-dark dark:text-title"
                transition:fly={{x: 200, duration: 500, easing: quadInOut}}>
            <header class="absolute top-8 right-8">
                <button {onclick} aria-label="Menü Schließen" class="hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
            </header>
            <section
                    class="relative flex flex-wrap flex-col-reverse sm:flex-row gap-y-16 justify-around w-full -mt-16 ml-6">
                <div
                        transition:fly={{x: -200, duration: 500, delay: 300}}>
                    <h3 class="text-xl font-light mb-5">Social</h3>
                    <ul class="text-2xl space-y-2">
                        <li>
                            <a href="https://www.linkedin.com/in/fabian-thies-63026331b/">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/fabian-thies">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                        transition:fly={{y: -200, duration: 500, delay: 400}}>
                    <h3 class="text-xl font-light mb-5">Menu</h3>
                    <ul class="text-3xl font-medium space-y-5">
                        <li>
                            <a href="/about">
                                Über mich
                            </a>
                        </li>
                        <li>
                            <a href="/portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <footer class="space-y-1 absolute bottom-8 sm:bottom-14 left-10"
                    transition:fly={{y: 100, duration: 400, delay: 500}}>
                <h4 class="text-sm text-subtitle">
                    Kontaktiere mich
                </h4>
                <p class="text-lg">
                    kontakt@fabianthies.de
                </p>
            </footer>
        </aside>
    {/if}
</header>