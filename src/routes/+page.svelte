<script>
    import image_portfolio_david_bitterlich from '$lib/images/portfolio/david-bitterlich.jpg';
    import image_portfolio_fsm from '$lib/images/portfolio/fsm.jpg';
    import image_portfolio_ghf from '$lib/images/portfolio/ghf.jpg';
    import image_foerderverein from '$lib/images/portfolio/fördervereinsgmu.jpg';
    import image_edudigi from '$lib/images/portfolio/edudigibook.jpg';

    import icon_django from '$lib/images/icons/django.svg?raw';
    import icon_docker from '$lib/images/icons/docker.svg?raw';
    import icon_git from '$lib/images/icons/git.svg?raw';
    import icon_java from '$lib/images/icons/java.svg?raw';
    import icon_php from '$lib/images/icons/php.svg?raw';
    import icon_python from '$lib/images/icons/python.svg?raw';
    import icon_svelte from '$lib/images/icons/svelte.svg?raw';
    import icon_tailwind from '$lib/images/icons/tailwind.svg?raw';
    import icon_wordpress from '$lib/images/icons/wordpress.svg?raw';
</script>

<div>
    <section class="h-screen flex items-center justify-center">
        <div class="flex justify-center">
            <div class="flex flex-col">
                <h1 class="sm:text-6xl text-5xl font-bold">
                    Hey, <br>
                    ich bin Fabian
                </h1>
                <p class="text-lg">Student der Angewandten Informatik</p>
                <div class="flex gap-4 mt-6">
                    <button class="btn btn-primary">Finde mehr heraus</button>
                    <button class="btn btn-neutral">Projekte</button>
                </div>
            </div>
        </div>
    </section>
    <section class="min-h-72 bg-base-300/100 pt-24 pb-24">
        <div class="container mx-auto flex flex-col gap-6">
            <div class="flex justify-center">
                <p class="uppercase text-md font-bold border-2 inline-block px-4 py-1 rounded-full text-primary border-primary">
                    Portfolio</p>
            </div>
            <div class="flex flex-wrap gap-7 justify-center">
                <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                    <div class="carousel-item w-full">
                        <img src="{ image_edudigi }" class="w-full object-cover"
                             alt="E-Commerce Store für digitale Lerninhalte"/>
                    </div>
                </div>
                <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                    <div class="carousel-item w-full">
                        <img src="{ image_portfolio_ghf }" class="w-full object-cover"
                             alt="Buchungsplatform für Gesundheitsreisen"/>
                    </div>
                </div>
                <div class="carousel rounded-box object-cover w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                    <div class="carousel-item w-full">
                        <img src="{ image_portfolio_david_bitterlich }" class="w-full object-cover"
                             alt="Portfolio für David Bitterlich"/>
                    </div>
                </div>
                <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                    <div class="carousel-item w-full">
                        <img src="{ image_portfolio_fsm }" class="w-full object-cover"
                             alt="Fragen-Staunen-Mitmachen - Interaktive Lernwebseite für Schüler"/>
                    </div>
                </div>
                <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                    <div class="carousel-item w-full">
                        <img src="{ image_foerderverein }" class="w-full object-cover"
                             alt="Homepage für den Förderverein des Murnauer Gymnasiums"/>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-5">
                <a href="/portfolio">
                    <button class="btn btn-primary btn-md btn-outline">Entdecke alle Projekte</button>
                </a>
            </div>
        </div>
    </section>
    <section class="bg-base-300/20 pt-36 pb-36">
        <div class="container mx-auto flex flex-col gap-6">
            <div class="flex justify-center">
                <p class="uppercase text-md font-bold border-2 inline-block px-4 py-1 rounded-full text-primary border-primary">
                    Über mich</p>
            </div>
            <div class="flex flex-col gap-4 max-w-[50rem] mx-auto text-center" id="about">
                <p class="text-2xl">
                    Hey, ich bin Fabian. Ich bin 21 Jahre alt und mein Ziel ist es, meine Fähigkeiten weiter zu
                    verbessern und an zukünftigen innovativen Projekten mitzuwirken.
                </p>
            </div>
        </div>
    </section>
    <section class="bg-base-300/100 pt-36 pb-36">
        <div class="container mx-auto flex flex-col gap-6">
            <div class="flex justify-center">
                <p class="uppercase text-md font-bold border-2 inline-block px-4 py-1 rounded-full text-primary border-primary">
                    Technologien</p>
            </div>
            <div class="flex flex-col gap-4 max-w-[50rem] mx-auto text-center" id="about">
                <p class="text-2xl">
                    Ich nutze eine Vielzahl von Technologien, um meine Projekte zu realisieren. Durch mein Studium habe
                    jedoch auch Einblicke in viele weitere Technologien und Sprachen erhalten.
                </p>
            </div>
            <!-- Icons -->
            <div class="flex gap-5 mx-auto">
                <div class="icon-size">
                    {@html icon_django}
                </div>
                <div class="icon-size">
                    {@html icon_docker}
                </div>
                <div class="icon-size">
                    {@html icon_git}
                </div>
                <div class="icon-size">
                    {@html icon_java}
                </div>
                <div class="icon-size">
                    {@html icon_php}
                </div>
                <div class="icon-size">
                    {@html icon_python}
                </div>
                <div class="icon-size">
                    {@html icon_svelte}
                </div>
                <div class="icon-size">
                    {@html icon_tailwind}
                </div>
                <div class="icon-size">
                    {@html icon_wordpress}
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .icon-size {
        width: 2.5rem;
        object-fit: contain;
    }
</style>