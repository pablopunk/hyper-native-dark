const hyperMac = require('hyper-mac')
const hyperSick = require('sick-colors')

exports.decorateConfig = config =>
  hyperMac.decorateConfig(hyperSick.decorateConfig(config))

exports.decorateBrowserOptions = defaults =>
  hyperMac.decorateBrowserOptions(defaults)

exports.getTabsProps = (parentProps, props) =>
  hyperMac.getTabsProps(parentProps, props)
