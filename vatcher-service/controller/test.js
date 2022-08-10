//控制层
/**
 * @description User Controller
 */

 const {
    createTest,
    getUserInfo,
    updateTest,
    deleteTest,
    queryAll
} = require('../server/test')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
    registerFailInfo,
    updateFailInfo,
    queryFailInfo,
    operationFailInfo
} = require('../model/ErroInfo')
const {
    formatRegDate,
    randomString
} = require('../utils/_format')

/**
 * 用户注册或登录
 * @param {string} id 测试ID
 * @param {string} name 昵称
 * @param {string} merchine 机器
 * @param {string} avatar 头像
 */
async function addTest({ id, name, merchine, avatar }) {
    const userObj = {
        id: randomString(16),
        name,
        merchine,
        avatar,
        createtime: formatRegDate()
    }
    try {
        await createTest(userObj)
        return new SuccessModel(userObj)
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(registerFailInfo)
    }
}

/**
 * 查询所有测试（支持条件查询和模糊查询）
 * @param {string} nikename 用户昵称 
 * @param {string} userid 用户id 
 * @param {number} page 当前页码
 * @param {number} pageSize 每页条数 
 * @returns 
 */
async function queryAllTest({ name, page, pageSize }) {
    try {
        const result = await queryAll({ name, page, pageSize })
        return new SuccessModel(result)
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(queryFailInfo)
    }
}

/**
 * 修改用户信息
 * @param {object} updateInfo 要修改的信息
 * @param {objcet} whereInfo 查询条件
 */
async function updateTestInfo(updateInfo, whereInfo) {
    try {
        const result = await updateTest(updateInfo, whereInfo)
        return new SuccessModel({ result })
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(updateFailInfo)
    }
}


module.exports = {
    addTest,
    queryAllTest,
    updateTestInfo
}
