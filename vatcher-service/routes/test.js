const router = require('koa-router')()

const {
  addTest,
  updateTestInfo,
  queryAllTest
} = require('../controller/test')

router.prefix('/test')


//添加测试

router.post('/add', async (ctx, next) => {
  const { name, merchine, avatar } = ctx.request.body
  ctx.body = await addTest({
    name,
    merchine,
    avatar
  })
})

//查询所有测试
router.get('/query',async (ctx, next) => {
    const name = ctx.request.body;
    ctx.body = await queryAllTest(name, 1, 10)
})

module.exports = router
