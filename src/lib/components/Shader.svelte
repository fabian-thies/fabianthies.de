<script lang="ts">
    import {onDestroy, onMount} from 'svelte';
    import vertexSrc from '$lib/assets/glsl/shader.vert';
    import fragmentSrc from '$lib/assets/glsl/shader.frag';

    let canvas: HTMLCanvasElement;

    function createShader(gl: WebGLRenderingContext, type: number, src: string) {
        const sh = gl.createShader(type)!;
        gl.shaderSource(sh, src);
        gl.compileShader(sh);
        if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS))
            throw new Error(String(gl.getShaderInfoLog(sh)));
        return sh;
    }

    function createProgram(gl: WebGLRenderingContext, vsSrc: string, fsSrc: string) {
        const vs = createShader(gl, gl.VERTEX_SHADER, vsSrc);
        const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSrc);
        const pr = gl.createProgram()!;
        gl.attachShader(pr, vs);
        gl.attachShader(pr, fs);
        gl.linkProgram(pr);
        if (!gl.getProgramParameter(pr, gl.LINK_STATUS))
            throw new Error(String(gl.getProgramInfoLog(pr)));
        return pr;
    }

    function createFullscreenQuad(gl: WebGLRenderingContext, loc: number) {
        const buf = gl.createBuffer()!;
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1
        ]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    }

    onMount(() => {
        const gl = canvas.getContext('webgl');
        if (!gl) return;

        const program = createProgram(gl, vertexSrc, fragmentSrc);
        gl.useProgram(program);
        const locPos = gl.getAttribLocation(program, 'a_position');
        const locRes = gl.getUniformLocation(program, 'iResolution');
        const locTime = gl.getUniformLocation(program, 'iTime');
        createFullscreenQuad(gl, locPos);

        function resize() {
            const dpr = window.devicePixelRatio || 1;
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
            const scale = mobile ? 0.5 : 1;
            const w = Math.floor(window.innerWidth * dpr * scale);
            const h = Math.floor(window.innerHeight * dpr * scale);
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;
                gl.viewport(0, 0, w, h);
            }
        }

        resize();
        window.addEventListener('resize', resize);

        const start = performance.now();
        let running = true;

        function frame(now: number) {
            if (!running) return;
            const t = (now - start) / 1000;
            gl.uniform2f(locRes, canvas.width, canvas.height);
            gl.uniform1f(locTime, t);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);

        onDestroy(() => {
            running = false;
            window.removeEventListener('resize', resize);
        });
    });
</script>

<canvas bind:this={canvas} class="fixed inset-0 w-screen h-screen opacity-30 -z-10"></canvas>
