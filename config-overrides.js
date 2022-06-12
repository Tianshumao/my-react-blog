const {
  override,
  fixBabelImports,
  addLessLoader,
  adjustStyleLoaders,
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, // 自动打包相关的样式
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options
    postcss.options = { postcssOptions }
  })
)
