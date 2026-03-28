declare module 'sanity:client' {
  const client: any;
  export { client as sanityClient };
  export default client;
}

declare module '@sanity/image-url' {
  export function createImageUrlBuilder(client: any): { image(source: any): any };
  const _default: typeof createImageUrlBuilder;
  export default _default;
}

declare module 'sanity' {
  const sanity: any;
  export default sanity;
}
