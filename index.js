const hyperMac = require('hyper-mac')
const hyperSick = require('hyper-sick')

module.exports = {
  ...hyperMac,
  ...hyperSick,
  decorateConfig(config) {
    return hyperMac.decorateConfig(hyperSick.decorateConfig(config))
  }
}
