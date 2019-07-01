const fs = require('fs')
const commander = require('commander')

commander.version('1.0.0', '-v, --version')

commander.command('create <app-name>')
.description('创建项目')
.alias('c')
.usage('使用说明')
.action(appName =>{
  fs.mkdirSync(appName)
})

commander.parse(process.argv)

// node vue create
// node vue create wovert
// node vue c wovert
// node vue c -h

