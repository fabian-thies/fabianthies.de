<script>
    import image_edudigi from "$lib/images/portfolio/edudigibook.jpg";
    import image_portfolio_ghf from "$lib/images/portfolio/ghf.jpg";
    import image_portfolio_david_bitterlich from "$lib/images/portfolio/david-bitterlich.jpg";
    import image_portfolio_fsm from "$lib/images/portfolio/fsm.jpg";
    import image_foerderverein from "$lib/images/portfolio/fördervereinsgmu.jpg";
</script>

<section class="bg-base-300/100 pt-24 pb-24">
    <div class="container mx-auto flex flex-col gap-6 mt-28">
        <div class="flex justify-center">
            <p class="uppercase text-md font-bold border-2 inline-block px-4 py-1 rounded-full text-primary border-primary">
                Portfolio</p>
        </div>
        <div class="flex flex-wrap gap-7 justify-center">
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem] relative overflow-hidden group hover:cursor-pointer">
                <div class="carousel-item w-full">
                    <img src="{ image_edudigi }"
                         class="w-full object-cover transform transition-all duration-300 group-hover:scale-110"
                         alt="E-Commerce Store für digitale Lerninhalte"/>
                    <div class="overlay absolute inset-0 bg-black opacity-50 transition-all duration-300 group-hover:opacity-0"></div>
                    <div class="absolute bottom-4 left-4 text-white transition-all duration-300 group-hover:opacity-0">
                        <p class="text-lg font-bold">E-Commerce Shop</p>
                        <p class="text-sm">für interaktive Medien</p>
                    </div>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem] relative overflow-hidden group hover:cursor-pointer">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_ghf }"
                         class="w-full object-cover transform transition-all duration-300 group-hover:scale-110"
                         alt="Buchungsplatform für Gesundheitsreisen"/>
                    <div class="overlay absolute inset-0 bg-black opacity-50 transition-all duration-300 group-hover:opacity-0"></div>
                    <div class="absolute bottom-4 left-4 text-white transition-all duration-300 group-hover:opacity-0">
                        <p class="text-lg font-bold">Buchungsplattform</p>
                        <p class="text-sm">für Gesundheitsreisen</p>
                    </div>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem] relative overflow-hidden group hover:cursor-pointer">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_david_bitterlich }"
                         class="w-full object-cover transform transition-all duration-300 group-hover:scale-110"
                         alt="Portfolio für David Bitterlich"/>
                    <div class="overlay absolute inset-0 bg-black opacity-50 transition-all duration-300 group-hover:opacity-0"></div>
                    <div class="absolute bottom-4 left-4 text-white transition-all duration-300 group-hover:opacity-0">
                        <p class="text-lg font-bold">Portfolio</p>
                        <p class="text-sm">für David Bitterlich</p>
                    </div>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem] relative overflow-hidden group hover:cursor-pointer">
                <div class="carousel-item w-full">
                    <img src="{ image_portfolio_fsm }"
                         class="w-full object-cover transform transition-all duration-300 group-hover:scale-110"
                         alt="Fragen-Staunen-Mitmachen - Interaktive Lernwebseite für Schüler"/>
                    <div class="overlay absolute inset-0 bg-black opacity-50 transition-all duration-300 group-hover:opacity-0"></div>
                    <div class="absolute bottom-4 left-4 text-white transition-all duration-300 group-hover:opacity-0">
                        <p class="text-lg font-bold">Interaktive Lernwebseite</p>
                        <p class="text-sm">Fragen-Staunen-Mitmachen</p>
                    </div>
                </div>
            </div>
            <div class="carousel rounded-box object-contain w-[20rem] h-[11rem] sm:w-[30rem] sm:h-[17rem] relative overflow-hidden group hover:cursor-pointer">
                <div class="carousel-item w-full">
                    <img src="{ image_foerderverein }"
                         class="w-full object-cover transform transition-all duration-300 group-hover:scale-110"
                         alt="Homepage für den Förderverein des Murnauer Gymnasiums"/>
                    <div class="overlay absolute inset-0 bg-black opacity-50 transition-all duration-300 group-hover:opacity-0"></div>
                    <div class="absolute bottom-4 left-4 text-white transition-all duration-300 group-hover:opacity-0">
                        <p class="text-lg font-bold">Förderverein Webseite</p>
                        <p class="text-sm">des Murnauer Gymnasiums</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>