module.exports = {
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './'
    baseUrl: process.env.NODE_ENV === 'production'
      ? './sample-project/'
      : '/'
}


// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production'
//       ? '/my-project/'
//       : '/'
//   }