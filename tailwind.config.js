module.exports = {
  presets: [
    require('./themes/applanding/tailwind.preset.js')
  ],
  content: [
    './layouts/**/*.html.twig',
    './themes/**/layouts/**/*.html.twig',
  ]
}
