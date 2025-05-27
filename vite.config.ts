import {sveltekit} from '@sveltejs/kit/vite';
import glsl from 'vite-plugin-glsl';
import {enhancedImages} from '@sveltejs/enhanced-img';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        enhancedImages(),
        sveltekit(),
        glsl()
    ]
});
