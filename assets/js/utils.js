export const StaticFilePrefixMixins = {
  data() {
    const isDev = process.env.NODE_ENV === 'development'
    const staticFilePrefix = isDev
      ? ''
      : 'https://gcore.jsdelivr.net/gh/ljhliang/ljhliang.github.io@latest/static'
    return {
      staticFilePrefix,
    }
  },
}
