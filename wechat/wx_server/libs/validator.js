const crypto = require('crypto')

// 服务器token
const token = '7CwvplxmBgce3pEtbSQ5j0meC77V4IYl'

module.exports = function (query){
  let { signature, echostr, timestamp, nonce} = query

  let arr = [token, timestamp, nonce]
  arr.sort()

  let hash = crypto.createHash('sha1')
  hash.update(arr.join(''))

  let signature2 = hash.digest('hex')

  return signature2 == signature
};
