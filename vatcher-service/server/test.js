/**
 * @description User Service
 */

const { Plist, Timer } = require('../db/model/index')
const Op = require('sequelize').Op

/**
 * 添加Plist
 * @param {string} pid id
 * @param {int} time s时间戳
 */
/**
 * 添加TIMER
 * @param {int} time 时间戳
 * @param {int} pv pv次数
 */

async function createPlist({ pid, time }) {
  const result = await Plist.create({
    pid,
    time
  })

  const data = result.dataValues
  return data
}

/**
 * 
 * @param {string} pid ID 
 */
async function getPlistInfo(pid) {
  // 查询条件
  const whereOption = {
    pid
  }
  const result = await Plist.findOne({
    attributes: ['pid', 'time'],
    where: whereOption
  })

  if (result === null) {
    return result
  }
  return result.dataValues.time
}


//查询Timer
async function selectPlist(pid) {
  const whereOption = {
    pid
  }
  const result = await Plist.findOne({
    attributes: ['time'],
    where: whereOption
  })

  if (result === null) {
    return result
  }
  return result.dataValues.time
}



/**
 * 修改测试信息
 * @param {*} param0 要修改的用户信息
 * @param {*} param1 查询条件
 */
async function updatePlist(
  { pid, time }
) {
  // 拼接修改内容
  const updateObj = {}
  if (time) {
    updateObj.time = time
  }


  // 拼接查询条件
  const whereOption = {}
  if (pid) {
    whereOption.pid = pid
  }

  // 执行修改
  const result = await Plist.update(updateObj, {
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

// 连表查询1：通过Plist查询Timer
async function plistSelectWithTimer(time) {
  const plistListWithTimer = await Plist.findAndCountAll({
    order: [
      ['pid', 'desc']
    ],
    include: [
      {
        model: Timer,
        attributes: ['time', 'pv'],
        where: {
          time
        }
      }
    ]
  })
  if (result === null) {
    return result
  }
  return result.dataValues
}


//查询Timer
async function selectTimer(time) {
  const whereOption = {
    time
  }
  const result = await Timer.findOne({
    attributes: ['pv'],
    where: whereOption
  })

  if (result === null) {
    return result
  }
  return result.dataValues.pv
}


//创建Timer
async function createTimer({ time, pv }) {
  const result = await Timer.create({
    time,
    pv
  })

  const data = result.dataValues
  return data
}

//更新Timer
async function updateTimer({ time, pv }) {
  // 拼接修改内容
  const updateObj = {}
  if (pv) {
    updateObj.pv = pv
  }


  // 拼接查询条件
  const whereOption = {}
  if (time) {
    whereOption.time = time
  }

  // 执行修改
  const result = await Timer.update(updateObj, {
    where: whereOption
  })
  return result[0] > 0
}



module.exports = {
  createPlist,
  getPlistInfo,
  updatePlist,
  deleteTest,
  plistSelectWithTimer,
  createTimer,
  updateTimer,
  selectTimer,
  selectPlist
}
