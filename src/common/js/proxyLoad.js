// export default (path = '', chunkName = '') => {
//     console.log(`${path}`, chunkName);
//     return r => require.ensure([], () => r(require(`${path}`)), `${chunkName}`)
// }

export function proxyLoad( path='' ,chunk) {
    return r => require.ensure([], () => r(require(`@/${path}.vue`)), 'test');
}