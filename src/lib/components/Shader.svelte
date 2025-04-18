<script lang="ts">
    import {onMount} from 'svelte';

    let canvas: HTMLCanvasElement;

    // Helper function to detect mobile devices
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth < 768;
    }

    onMount(() => {
        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL is not supported.');
            return;
        }

        // Detect if we're on a mobile device
        const isMobile = isMobileDevice();

        const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

        // Choose between high quality (desktop) and optimized (mobile) shader
        const fragmentShaderSource = isMobile ? 
        // Mobile-optimized shader
        `
      precision lowp float;
      uniform vec2 iResolution;
      uniform float iTime;

      // Simplified version for mobile devices
      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;

        // Simplified calculation with fewer expensive operations
        float t = iTime * 0.5;

        // Pre-calculate values to avoid redundant calculations
        float sinTime = sin(t);
        float cosTime = cos(t);

        // Simplified color calculation with unrolled loop and fewer expensive operations
        float r = 0.8 + 0.2 * sin(uv.x + cosTime);
        float g = 0.8 + 0.2 * sin(uv.y + sinTime);
        float b = 0.8 + 0.2 * sin((uv.x + uv.y) * 0.5 + t);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    ` :
        // Desktop high-quality shader
        `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;

      // ShaderToy mainImage function adapted to standard GLSL.
      void mainImage(out vec4 o, vec2 fragCoord) {
        vec2 v = fragCoord;
        vec2 u = (v + v - (o.xy = iResolution.xy)) / o.y;
        u /= 0.5 + 0.2 * dot(u, u);
        u += 0.2 * cos(iTime) - 7.56;

        // Loop over color channels.
        for (int i = 0; i < 3; i++) {
          o[i] = 1.0 - exp(-6.0 / exp(6.0 * length(v + sin(5.0 * v.y - 3.0 * iTime) / 4.0)));
          v = sin(1.5 * u.yx + 2.0 * cos(u -= 0.01));
        }
      }

      void main() {
        vec4 color;
        mainImage(color, gl_FragCoord.xy);
        gl_FragColor = color;
      }
    `;

        function compileShader(source: string, type: number) {
            const shader = gl.createShader(type);
            if (!shader) return null;

            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        }

        const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            return;
        }
        gl.useProgram(program);

        const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            -1, 1,
            1, -1,
            1, 1,
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

        const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
        const iTimeLocation = gl.getUniformLocation(program, 'iTime');

        function resize() {
            const displayWidth = window.innerWidth;
            const displayHeight = window.innerHeight;

            // Scale down resolution for mobile devices
            const scaleFactor = isMobile ? 0.5 : 1.0; // 50% resolution for mobile

            const targetWidth = Math.floor(displayWidth * scaleFactor);
            const targetHeight = Math.floor(displayHeight * scaleFactor);

            // Set canvas size to display size for proper rendering
            canvas.width = targetWidth;
            canvas.height = targetHeight;

            // Set CSS size to full display size for proper layout
            canvas.style.width = displayWidth + 'px';
            canvas.style.height = displayHeight + 'px';

            gl.viewport(0, 0, targetWidth, targetHeight);
        }

        // Initialer Resize
        resize();

        window.addEventListener('resize', resize);

        const startTime = Date.now();
        let lastFrameTime = 0;
        let animationFrameId: number;

        // Frame rate control
        const targetFPS = isMobile ? 30 : 60; // Lower FPS for mobile
        const frameInterval = 1000 / targetFPS;

        function render(currentTimestamp: number) {
            // Skip frames to achieve target FPS
            const elapsed = currentTimestamp - lastFrameTime;

            if (elapsed > frameInterval || !isMobile) { // Always render on desktop, limit on mobile
                lastFrameTime = currentTimestamp;

                const currentTime = Date.now();
                const time = (currentTime - startTime) / 1000;

                gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(iTimeLocation, time);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
            }

            animationFrameId = requestAnimationFrame(render);
        }

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resize);
            // Cancel animation frame on cleanup to prevent memory leaks
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    });
</script>

<canvas bind:this={canvas} class="w-full h-screen opacity-30 fixed z-[-1]"></canvas>
