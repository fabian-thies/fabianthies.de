/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#fffbfa',
                    dark: '#0a0d12',
                },
                title: {
                    DEFAULT: '#0a0d12',
                    dark: '#fffbfa',
                },
                subtitle: {
                    DEFAULT: '#6b7280',
                    dark: '#9ca3af',
                },
            }
        }
    }
}

