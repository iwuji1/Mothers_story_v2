import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f062ad17.js","app":"_app/immutable/entry/app.97c419cd.js","imports":["_app/immutable/entry/start.f062ad17.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/singletons.9953c3df.js","_app/immutable/entry/app.97c419cd.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.a70b2643.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
