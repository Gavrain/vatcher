/**
 * @description 失败信息集合，包括 errno 和 message
 */

module.exports = {
    // 注册失败
    registerFailInfo: {
        errno: 10001,
        message: '注册失败，请重试'
    },
    // 登录失败
    loginFailInfo: {
        errno: 10002,
        message: '登录失败'
    },
    // 未登录
    loginCheckFailInfo: {
        errno: 10003,
        message: '您尚未登录'
    },
    // 修改信息失败
    updateFailInfo: {
        errno: 10004,
        message: '修改信息失败'
    },
    // 删除用户失败
    deleteUserFailInfo: {
        errno: 10005,
        message: '删除用户失败'
    },
    // 查询失败
    queryFailInfo: {
        errno: 10006,
        message: '查询失败'
    },
    // 操作失败
    operationFailInfo: {
        errno: 10007,
        message: '操作失败'
    }
}
