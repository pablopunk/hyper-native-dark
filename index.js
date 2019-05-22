const fs = require('fs')
const path = require('path')
let colors = require('sick-colors')

const css = fs.readFileSync(path.join(__dirname, 'index.css'), 'utf-8')

colors = {
  ...colors,
  lightBlack: colors.black,
  lightRed: colors.red,
  lightGreen: colors.green,
  lightYellow: colors.yellow,
  lightBlue: colors.blue,
  lightMagenta: colors.magenta,
  lightCyan: colors.cyan,
  lightWhite: colors.foreground,
}

exports.decorateConfig = config => ({
  ...config,
  padding: '5px',
  backgroundColor: colors.background,
  foregroundColor: colors.foreground,
  css: (config.css || '') + css,
  colors
})

exports.decorateBrowserOptions = defaults => ({
  ...defaults,
  titleBarStyle: 'native',
  transparent: false
})

exports.getTabsProps = (parentProps, props) => {
  props.tabs.length < 2
    ? document.body.classList.add('closed-tabs')
    : document.body.classList.remove('closed-tabs')

  return {
    ...parentProps,
    ...props
  }
}
