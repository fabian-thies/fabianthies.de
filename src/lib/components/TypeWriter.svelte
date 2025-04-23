<script>
    import {onMount} from 'svelte';

    export let text = '';
    export let speed = 100; // ms per character
    export let startDelay = 500; // ms before starting
    export let cursor = true;
    export let loop = false;
    export let loopDelay = 2000; // ms before restarting

    let displayText = '';
    let cursorVisible = true;
    let typewriterComplete = false;

    onMount(() => {
        setTimeout(startTyping, startDelay);

        // Cursor blink effect
        const cursorInterval = setInterval(() => {
            cursorVisible = !cursorVisible;
        }, 500);

        return () => {
            clearInterval(cursorInterval);
        };
    });

    function startTyping() {
        let i = 0;

        function type() {
            if (i < text.length) {
                displayText += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                typewriterComplete = true;

                if (loop) {
                    setTimeout(() => {
                        displayText = '';
                        typewriterComplete = false;
                        i = 0;
                        type();
                    }, loopDelay);
                }
            }
        }

        type();
    }
</script>

<span>
    {displayText}
    {#if cursor}
        <span class={`inline-block font-bold text-current ${!cursorVisible ? 'opacity-0' : ''} ${!typewriterComplete ? 'opacity-100' : ''}`}>|</span>
    {/if}
</span>