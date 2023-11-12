

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4df258a9.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.a70b2643.js","_app/immutable/chunks/singletons.d563dae2.js"];
export const stylesheets = [];
export const fonts = [];
