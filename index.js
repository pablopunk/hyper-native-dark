const fs = require('fs')
const path = require('path')

const css = fs.readFileSync(path.join(__dirname, 'index.css'), 'utf-8')

const backgroundColor = '#1E1F28'
const foregroundColor = '#ccc'

const red = '#FF6B6B'
const green = '#2CF6B3'
const yellow = '#FFE66D'
const blue = '#809BCE'
const magenta = '#CE92CB'
const cyan = '#4ECDC4'

const colors = {
  black: backgroundColor,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: '#F7FFF7',
  lightBlack: '#666',
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: foregroundColor,
}

exports.decorateConfig = config => ({
  ...config,
  padding: '5px',
  backgroundColor,
  foregroundColor,
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
