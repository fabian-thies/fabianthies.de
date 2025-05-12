<script lang="ts">
    import logo from '$lib/assets/images/site-logo.svg';
    import {fly} from 'svelte/transition';
    import {quadInOut} from 'svelte/easing';

    let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<header class="p-8 flex w-full justify-between text-title dark:text-title-dark items-center z-50 fixed">
    <nav>
        <a href="/">
            <img alt="Site Logo" src={logo}>
        </a>
    </nav>
    <div class="text-2xl flex gap-2">
        <button aria-label="Menü öffnen" class="flex flex-nowrap hover:cursor-pointer" on:click={toggleMenu}>
            <span class="menu-text hidden sm:block">
                menü
            </span>
            <svg class="menu-icon pt-1" fill="none" height="32" stroke="currentColor" stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" x2="19" y1="9" y2="9"></line>
                <line x1="5" x2="19" y1="15" y2="15"></line>
            </svg>
        </button>
    </div>
    {#if showMenu}
        <div
                class="fixed inset-0 bg-black opacity-45 z-40"
                transition:fly={{ opacity: 0, duration: 300 }}
                on:click={toggleMenu}
                on:keydown={(e) => e.key === 'Escape' && toggleMenu()}
                role="button"
                tabindex="0"
                aria-label="Close menu"
        ></div>
        <aside class="fixed right-0 top-0 h-screen w-full sm:w-[40rem] px-10 flex content-center justify-center items-center bg-background-dark dark:bg-background text-title-dark dark:text-title z-50"
               transition:fly={{ x: 200, duration: 500, easing: quadInOut }}>
            <header class="absolute top-8 right-8">
                <button on:click={toggleMenu} aria-label="Close Menu" class="hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
            </header>
            <section
                    class="relative flex flex-wrap flex-col-reverse sm:flex-row gap-y-16 justify-around w-full -mt-16 ml-6">
                <div transition:fly={{ x: -200, duration: 500, delay: 300 }}>
                    <h3 class="text-xl font-light mb-5">Soziale Medien</h3>
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
                <div transition:fly={{ y: -200, duration: 500, delay: 400 }}>
                    <h3 class="text-xl font-light mb-5">Menü</h3>
                    <ul class="text-3xl font-medium space-y-5">
                        <li>
                            <a href="/#about" on:click={toggleMenu}>
                                Über mich
                            </a>
                        </li>
                        <li>
                            <a href="/#portfolio" on:click={toggleMenu}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="/#contact" on:click={toggleMenu}>
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <footer class="space-y-1 absolute bottom-8 sm:bottom-14 left-10"
                    transition:fly={{ y: 100, duration: 400, delay: 500 }}>
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
