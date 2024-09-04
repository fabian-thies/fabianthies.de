<script>
    import "../app.css";
    import {fade} from 'svelte/transition';

    const date = new Date(); // For the Copyright

    export let data;
</script>
<header class="navbar fixed top-0 bg-[#00000019] backdrop-blur-md z-10">
    <nav class="navbar-start">
        <a class="btn btn-ghost text-xl font-bold m-[-12px] hover:bg-transparent" href="/">
            <svg fill="none" height="23" viewBox="0 0 90 71" width="40" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#000000" height="52" width="35" x="6" y="10"></rect>
                <path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z"
                      fill="aliceblue"></path>
                <rect class="blinkit" fill="#000000" height="8" width="29" x="45" y="44"></rect>
            </svg>
            fabiidev
        </a>
    </nav>
    <!-- Desktop -->
    <div class="navbar-end hidden md:flex">
        <ul class="menu menu-horizontal px-1 font-bold text-md">
            <li>
                <a href="/">
                    Home
                </a>
            </li>
            <li>
                <a href="/portfolio">
                    Portfolio
                </a>
            </li>
            <li>
                <a href="/#about">
                    About
                </a>
            </li>
            <label class="swap swap-rotate">
                <input type="checkbox" class="theme-controller" value="light"/>

                <!-- sun icon -->
                <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>

                <!-- moon icon -->
                <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                </svg>

            </label>
        </ul>
    </div>
    <!-- Mobile -->
    <div class="navbar-end md:hidden flex">
        <div class="dropdown dropdown-end z-20">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
            </div>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box">
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="/#about">
                        About
                    </a>
                </li>
                <label class="swap swap-rotate">
                    <input type="checkbox" class="theme-controller" value="light"/>

                    <!-- sun icon -->
                    <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                    </svg>

                    <!-- moon icon -->
                    <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                    </svg>

                </label>
            </ul>
        </div>
    </div>
</header>

{#key data.pathname}
    <div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
        <slot/>
    </div>
{/key}

<footer class="footer footer-center p-10 bg-base-300 text-base-content rounded">
    <nav class="grid grid-flow-col gap-4">
        <a class="link link-hover" href="impressum">Impressum</a>
        <a class="link link-hover" href="datenschutz">Datenschutz</a>
    </nav>
    <aside>
        <p>Copyright © { date.getFullYear() } - Made with ❤️</p>
    </aside>
</footer>