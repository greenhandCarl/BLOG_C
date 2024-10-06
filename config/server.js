process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const shelljs = require('shelljs');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');


// webpack dev server begin
const config = require('./webpack.config.dev.js')
const options = {
    // contentBase: '../dist', 新版的webpack-dev-server删除了这个参数
    hot: true,
    open: true,
    host: 'localhost', // 192.168.1.103
    historyApiFallback: true, // 解决html5 history api browserRouter 刷新页面404问题，帮助重定向到'/'路径，再由前端路由去寻找
}

// eslint begin 不需要手动eslint 在eslint-webpack-plugin中配置options即可
// const { ESLint } = require("eslint");
// const eslintOptions = {
//   cwd: process.cwd(),
//   extensions: ['js', 'ts', 'tsx'],
//   cache: true,
//   cacheLocation: '.eslintcache',
//   cacheStrategy : 'metadata'
// };

// // 1. Create an instance.
// const eslint = new ESLint(eslintOptions);

// // 2. Lint files.
// const results = await eslint.lintFiles(["src/**/*.tsx"]);

// // 3. Format the results.
// const formatter = await eslint.loadFormatter("stylish");
// const resultText = formatter.format(results);

// // 4. Output it.
// console.log('lint result Text', resultText);

// if (resultText) {
//   throw new Error('eslint no pass')
// }
// eslint end

const compiler = webpack(config)
const server = new WebpackDevServer(options, compiler)

const result = shelljs.exec('kill-port 3000', {
    silent: false,
    env: {
        ...process.env,
        FORCE_COLOR: true
    }
})

server.start(3000, 'localhost', () => {
    console.log('dev server listening on port 3000 ...')
})
// webpack dev server end