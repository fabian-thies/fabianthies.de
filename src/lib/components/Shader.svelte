<script lang="ts">
    import {onMount} from 'svelte';

    let canvas: HTMLCanvasElement;

    onMount(() => {
        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL is not supported.');
            return;
        }

        const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

        const fragmentShaderSource = `
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
            const displayWidth = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;
            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
        }

        const startTime = Date.now();

        function render() {
            resize();
            const currentTime = Date.now();
            const time = (currentTime - startTime) / 1000;
            gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(iTimeLocation, time);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
    });
</script>

<canvas bind:this={canvas} class="w-full h-screen opacity-30"></canvas>
