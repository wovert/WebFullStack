const xml2js = require('xml2js')
const xml = require('xml')

module.exports = {
  parse(str) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(str, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.xml)
        }
      })
    })
  },
  stringify(json) {
    return xml(json)
  },
  normalize(data) {
    for (let name in data) {
      if (data[name].length == 1) {
        data[name] = data[name][0]
      }
    }
    return data
  }
}
