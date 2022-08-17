/**
 * @description 用户数据模型
 */

 const seq = require('../seq')
 const { STRING, INTEGER } = require('../types')
 
 //存储pid，time数据
 const Plist = seq.define('plist', {
   pid: {
     type: STRING,
     allowNull: false,
     unique: true,
     primaryKey: true,
     comment: 'ID, 唯一'
   },
   time: {
     type: INTEGER,
     allowNull: false,
     comment: '时间'
   }
 }, {
   freezeTableName: true, // 使用自定义表名
   tableName: 'plist', // 实例对应的表名
   timestamps: false,  //去除createAt updateAt，如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
   // createdAt: 'created_at', // 将createdAt对应到数据库的created_at字段
   // updatedAt: 'updated_at', // 将updatedAt对应到数据库的updated_at字段
   // deletedAt: false, // 'deleted_at', 删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true
   // paranoid: false
 })
 
 
 //存储时间戳的数据库表，存储time，pv等数据，会形成一个自增的id
 const Timer = seq.define('timer', {
   time: {
     type: INTEGER,
     allowNull: false,
     comment: '时间'
   },
   pv: {
     type: INTEGER,
     allowNull: false,
     comment: '每天pv次数'
   }
 }, {
   freezeTableName: true, // 使用自定义表名
   tableName: 'timer', // 实例对应的表名
   timestamps: false,  //去除createAt updateAt，如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
   // createdAt: 'created_at', // 将createdAt对应到数据库的created_at字段
   // updatedAt: 'updated_at', // 将updatedAt对应到数据库的updated_at字段
   // deletedAt: false, // 'deleted_at', 删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true
   // paranoid: false
 })
 
 

 
 module.exports = {
   Plist,
   Timer
 }
 