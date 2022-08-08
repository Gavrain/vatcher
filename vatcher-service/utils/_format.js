//工具文件
/**
 * @description 数据格式化
 */

 const moment = require('moment')

 // 格式化新用户注册时间
 module.exports.formatRegDate = function() {
   return moment().format('YYYY-MM-DD hh:mm:ss')
 }
 
 module.exports.randomString = function(size) {
   const sourceData = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
   const len = sourceData.length
   let result = ''
   for (let i = 0; i < size; i++) {
     result += sourceData.charAt(Math.floor(Math.random() * len))
   }
   return result
 }
 