# Test

## 测试方法

[chaijs.com](http://chaijs.com)

- BDD
- TDD

```sh
npm i chai --save-dev
# 执行test目录下所有测试用例
npm test
```

## 测试覆盖率

[istanbul](https://github.com/gotwarlost/istanbul)

```sh
npm i -g istanbul
vim package.json
  "cover": "istanbul cover_mocha --reporter test/mocha.js"
  # for windows
  "cover": "istanbul cover node_modules/mocha/bin/_mocha test/mocha.js"
```

Statements   : 100% ( 5/5 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 0/0 )
Lines        : 100% ( 5/5 )
