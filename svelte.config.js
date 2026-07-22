import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';

// Vercel sets process.env.VERCEL=1 during its builds. Use adapter-vercel there;
// fall back to adapter-node for local/CI/native (OpenBSD rc.d) builds, which emits
// a runnable build/index.js.
const isVercel = !!process.env.VERCEL;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: isVercel ? vercel() : node()
	}
};

export default config;
