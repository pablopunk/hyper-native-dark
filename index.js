const fs = require('fs')
const path = require('path')

const styles = fs.readFileSync(path.join(__dirname, 'index.css'), 'utf-8')

const backgroundColor = '#1E1F28'
const foregroundColor = '#ccc'

const red = '#ff5c57'
const green = '#5af78e'
const yellow = '#f3f99d'
const blue = '#57c7ff'
const magenta = '#ff6ac1'
const cyan = '#9aedfe'

const colors = {
  black: backgroundColor,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: 'fafafa',
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
  padding: '7px 7px',
  backgroundColor,
  foregroundColor,
  css: (config.css || '') + styles,
  colors
})

exports.decorateBrowserOptions = defaults => ({
  ...defaults,
  titleBarStyle: 'native',
  transparent: false
})

exports.getTabsProps = (parentProps, props) => {
  if (props.tabs.length <= 1) {
    document.body.classList.add('closed-tabs')
  } else {
    document.body.classList.remove('closed-tabs')
  }

  return {
    ...parentProps,
    ...props
  }
}
