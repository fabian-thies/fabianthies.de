/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({event, resolve}) => {
    return await resolve(event, {
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
};
