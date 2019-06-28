const process=require('process');

// console.log(process.env.OS)
let mode=(process.env.OS=='Windows_NT'?'dev':'prod');

module.exports={
  mode,
  ...(mode=='dev'?require('./config.dev'):require('./config.prod'))
};
