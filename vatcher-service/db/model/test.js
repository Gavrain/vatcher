/**
 * @description 用户数据模型
 */

 const seq = require('../seq')
 const { STRING, INTEGER } = require('../types')
 
 const Test = seq.define('test', {
   id: {
     type: STRING,
     allowNull: false,
     unique: true,
     primaryKey: true,
     comment: '测试ID, 唯一'
   },
   name: {
     type: STRING,
     allowNull: false,
     comment: '用户昵称'
   },
   merchine: {
     type: STRING,
     allowNull: true,
     comment: '机器'
   },
   avatar: {
     type: STRING,
     allowNull: true,
     comment: '头像img地址'
   },
   createtime: {
     type: STRING,
     allowNull: false,
     comment: '注册时间'
   }
 }, {
   freezeTableName: true, // 使用自定义表名
   tableName: 'test', // 实例对应的表名
   timestamps: false,  //去除createAt updateAt，如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
   // createdAt: 'created_at', // 将createdAt对应到数据库的created_at字段
   // updatedAt: 'updated_at', // 将updatedAt对应到数据库的updated_at字段
   // deletedAt: false, // 'deleted_at', 删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true
   // paranoid: false
 })
 
 module.exports = Test
 