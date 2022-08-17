/**
 * @description User Controller
 */

 const {
    createPlist,
    getPlistInfo,
    updatePlist,
    deleteTest,
    plistSelectWithTimer,
    selectTimer,
    updateTimer
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
 * @param {string} pid ID
 * @param {int} time 时间戳
 * @param {string} merchine 机器
 * @param {string} avatar 头像
 */
async function addPlist({ pid,time }) {
    const userObj = {
        pid,
        time
    }
    try {
        await createPlist(userObj)
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
async function queryAllTime({ time }) {
    try {
        const result = await plistSelectWithTimer({ time })
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
async function updatePlistInfo(pid, time) {
    try {
        const result = await updatePlist(pid,time)
        return new SuccessModel({ result })
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(updateFailInfo)
    }
}



/**
 * 增加pv的值
 * @param {int} pv
 */
async function updatePv(time,pv){
    try {
        const result = await updateTimer(time, pv)
        return new SuccessModel({ result })
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(updateFailInfo)
    }
}

module.exports = {
    addPlist,
    queryAllTime,
    updatePlistInfo,
    updatePv
}
