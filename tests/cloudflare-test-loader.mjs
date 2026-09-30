// Static HTML tests do not exercise storage. Real D1/R2 behavior is covered
// by admin-content.test.mjs against the local Worker preview.
export async function resolve(specifier, context, nextResolve) {
  if (specifier === "cloudflare:workers") return { url: "data:text/javascript,export const env = {};", shortCircuit: true };
  return nextResolve(specifier, context);
}
