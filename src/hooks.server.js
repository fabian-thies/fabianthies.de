/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({event, resolve}) => {
    const response = await resolve(event, {
        preload: ({type, path}) => {
            // Preload font files
            if (type === 'font' && path.includes('/fonts/')) {
                // Prioritize woff2 format as it's the most efficient
                if (path.endsWith('.woff2')) {
                    return true;
                }
            }
            return false;
        }
    });

    if (event.url.pathname === '/impressum' || event.url.pathname === '/datenschutz') {
        response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    }

    return response;
};
