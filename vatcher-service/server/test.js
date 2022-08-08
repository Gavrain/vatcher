//数据服务层

/**
 * @description Test Service
 */

 const { Test } = require('../db/model/index')
 const Op = require('sequelize').Op
 
 /**
  * 添加测试
  * @param {string} id 用户id
  * @param {string} name 昵称
  * @param {string} merchine 机器
  * @param {string} createtime 注册时间
  */
 async function createTest({id, name, merchine, avatar, createtime}) {
   const result = await Test.create({
     id,
     name,
     merchine,
     avatar,
     createtime
   })
 
   const data = result.dataValues
   return data
 }
 
 /**
  * 
  * @param {string} id ID 
  */
 async function getUserInfo(id) {
   // 查询条件
   const whereOption = {
     id
   }
   const result = await Test.findOne({
     attributes: ['id', 'name', 'merchine', 'avatar', 'createtime'],
     where: whereOption
   })
 
   if (result === null) {
     return result
   }
   return result.dataValues
 }
 
 /**
  * 修改测试信息
  * @param {*} param0 要修改的用户信息
  * @param {*} param1 查询条件
  */
 async function updateTest(
   {name, merchine},
   {id}
 ) {
   // 拼接修改内容
   const updateObj = {}
   if (name) {
     updateObj.name = name
   }
   if (merchine) {
     updateObj.merchine = merchine
   }
   
 
   // 拼接查询条件
   const whereOption = {}
   if (id) {
     whereOption.id = id
   }
 
   // 执行修改
   const result = await Test.update(updateObj, {
     where: whereOption
   })
   return result[0] > 0
 }
 
 /**
  * 删除用户
  * @param {string} id 测试id 
  */
 async function deleteTest(id) {
   const result = await Test.destroy({
     where: {
       id
     }
   })
   return result > 0
 }
 
 /**
  * 分页查询所有用户
  * @param {number} page 当前页码
  * @param {number} pageSize 每页条数
  */
 async function queryAll({ name, page = 1, pageSize = 10 }) {
   const whereOption = {}
   if (name) {
     whereOption.name = {
       [Op.like]: `%${name}%`
     }
   }
 
   if (page < 1) {
     page = 1
   } 
   const result = await Test.findAll({
     limit: pageSize,
     offset: (page - 1) * pageSize,
     order: [
       ['createtime', 'desc']
     ],
     where: whereOption
   })
 
   return {
     page,
     pageSize,
     count: result.count,
     data: result.map(test => test.dataValues)
   }
 }
 
 module.exports = {
   createTest,
   getUserInfo,
   updateTest,
   deleteTest,
   queryAll
 }
 