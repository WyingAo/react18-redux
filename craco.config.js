const path = require('path')
module.exports = {
// webpack 配置
webpack: {
// 配置别名
alias: {
  // 约定：使用 @ 表示 src 文件所在路径
  '@': path.resolve(__dirname, 'src'),
  // 约定：使用 @scss 表示 样式 文件所在路径
  '@scss': path.resolve(__dirname, 'src', 'assets', 'styles')
},
},
}
