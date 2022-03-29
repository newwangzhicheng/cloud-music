module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: false
      }
    ],
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
};
