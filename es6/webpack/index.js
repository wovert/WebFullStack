import * as mod1 from './src/mod1'
import * as utils from './src/utils'
utils.print(mod1.a)

// 异步加载模块
import('./src/mod2').then(mod2 => {
  utils.print(mod2.value)
}, err => {
  utils.print('error')
})
