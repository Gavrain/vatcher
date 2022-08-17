const router = require('koa-router')()

const {
  addPlist,
  queryAllTime,
  updatePlistInfo,
  updatePv
} = require('../controller/test');

const { updatePlist, createPlist, updateTimer, createTimer, selectTimer, selectPlist } = require('../server/test');

router.prefix('/test')


//添加测试

// router.post('/add', async (ctx, next) => {
//   const { name, merchine, avatar } = ctx.request.body
//   ctx.body = await addTest({
//     name,
//     merchine,
//     avatar
//   })
// })

//查询所有测试
router.get('/query', async (ctx, next) => {
  const name = ctx.request.body;
  ctx.body = await updatePv(11, 1)

})


//多表查询在mysql2中不会，所以用最简单的方法进行查询更新
//先在Plist表通过pid查询time,再用time查询出pv，最后对pv进行+1

router.post('/addpv', async (ctx, next) => {
  const { pid } = ctx.request.body
  console.log({ pid })
  const time = await selectPlist(pid)
  const pv = await selectTimer(time)
  ctx.body = await updateTimer({ time: time, pv: pv + 1 })
})

module.exports = router
