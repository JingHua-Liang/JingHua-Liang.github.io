export const StaticFilePrefixMixins = {
  data() {
    let isLocalhost = true
    try {
      // works only on client side
      isLocalhost = window.location.hostname === 'localhost'
    } catch (_) {}
    const staticFilePrefix = isLocalhost
      ? ''
      : 'https://gcore.jsdelivr.net/gh/ljhliang/ljhliang.github.io@latest/static'
    return {
      staticFilePrefix,
    }
  },
}
