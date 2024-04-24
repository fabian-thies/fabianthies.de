<script>
    import image_portfolio_david_bitterlich from '$lib/images/portfolio/david-bitterlich.jpg';
    import image_portfolio_fsm from '$lib/images/portfolio/fsm.jpg';
    import image_portfolio_ghf from '$lib/images/portfolio/ghf.jpg';

    const date = new Date();
</script>

<section class="h-screen flex items-center justify-center">
    <div class="flex justify-center">
        <div class="flex flex-col">
            <h1 class="sm:text-6xl text-5xl font-bold mb-6">
                Hey, <br>
                ich bin Fabian
            </h1>
            <div class="flex gap-4">
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
            <div class="carousel rounded-box object-cover w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_david_bitterlich }" class="w-full object-cover"
                         alt="Tailwind CSS Carousel component"/>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_fsm }" class="w-full object-cover"
                         alt="Tailwind CSS Carousel component"/>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_ghf }" class="w-full object-cover"
                         alt="Tailwind CSS Carousel component"/>
                </div>
            </div>
            <div class="carousel rounded-box object-cover w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_david_bitterlich }" class="w-full object-cover"
                         alt="Tailwind CSS Carousel component"/>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_fsm }" class="w-full object-cover"
                         alt="Tailwind CSS Carousel component"/>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem]">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_ghf }" class="w-full object-cover"
                         alt="Tailwind CSS Carousel component"/>
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
                Hey, ich bin Fabian. Ich bin 21 Jahre alt und mein Ziel ist es, meine Fähigkeiten weiter zu verbessern und an zukünftigen innovativen Projekten mitzuwirken.
            </p>
        </div>
    </div>
</section>