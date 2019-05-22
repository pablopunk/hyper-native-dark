const hyperMac = require('hyper-mac')
const hyperSick = require('sick-colors')

module.exports = {
  ...hyperMac,
  ...hyperSick,
  decorateConfig(config) {
    return hyperMac.decorateConfig(hyperSick.decorateConfig(config))
  }
}
