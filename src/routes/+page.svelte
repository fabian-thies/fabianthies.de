<script lang="ts">
    import singleSquare from '$lib/assets/images/square.svg';
    import downArrow from '$lib/assets/images/down.svg';
</script>

<article
        style="background-image: url({singleSquare});">
    <section class="min-h-screen flex items-center text-title dark:text-title-dark relative">
        <div class="-mt-72 space-y-8 absolute top-1/2 left-30">
            <h1 class="text-9xl font-bold max-w-6xl">
                Turning ideas into <span
                    class="bg-gradient-to-r from-pink-500  via-red-500 to-yellow-500 bg-clip-text text-transparent font-[garamond] italic"> creative</span>
                solutions.
            </h1>
            <p class="text-3xl font-semibold text-gray-300 mt-10">
                Where Imagination Meets Innovation.
            </p>
        </div>
        <div class="absolute bottom-10 left-0 right-0 flex justify-center">
            <img src={downArrow} alt="down arrow" class="w-10 h-10 animate-bounce"/>
        </div>
    </section>
</article>