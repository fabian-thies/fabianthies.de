<script lang="ts">
    import singleSquare from '$lib/assets/images/square.svg';
</script>

<article
        style="background-image: url({singleSquare});">
    <section class="min-h-[calc(100vh-80px)] flex items-center text-title dark:text-title-dark">
        <div class="mx-auto w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] text-center -mt-72 space-y-8">
            <h1 class="text-8xl font-bold">
                Hey, ich bin <span class="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">Fabian</span>.
            </h1>
            <p class="text-lg text-subtitle dark:text-subtitle-dark font-normal max-w-xl mx-auto ">
                Passionierter Entwickler mit einem Blick für <span>Details</span> und einer Begeisterung für
                intelligente
                Softwarelösungen.
            </p>
            <div class="space-x-10">
                <button class="border-[1px] py-2 px-10 pointer font-semibold text-sm rounded-md dark:border-[#ffffff90]">
                    <a href="/contact">
                        Kontaktiere mich
                    </a>
                </button>
                <button class="border-[1px] py-2 px-10 pointer font-semibold text-sm rounded-md dark:border-[#ffffff90]">
                    <a href="/contact">
                        Kontaktiere mich
                    </a>
                </button>
            </div>
        </div>
    </section>
</article>