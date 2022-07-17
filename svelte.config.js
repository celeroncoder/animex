import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import image from 'svelte-image';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({ postcss: true }), image()],

	kit: {
		adapter: adapter()
	}
};

export default config;
