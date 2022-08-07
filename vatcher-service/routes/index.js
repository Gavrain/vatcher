const koaBody = require('koa-body')

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/hashchange', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = 'hashchange success'
})

router.post('/history', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = 'history success'
})

router.post('/uv', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = 'uv success'
})

//数据上传
router.post('/getBodyData', (ctx, next) => {
  const { bookname, author, publisher } = ctx.request.body
  console.log(bookname, author, publisher)
  ctx.body = { bookname, author, publisher }
})
//文件上传
router.post('/upload', async (ctx) => {
  const file = ctx.request.files.file // 获取上传文件
  const content = ctx.request.body
  console.log(content, file)
  // // 创建可读流
  // const reader = fs.createReadStream(file.path);
  // let filePath = path.join(__dirname, '/public/upload/') + `/${file.name}`;
  // // 创建可写流
  // const upStream = fs.createWriteStream(filePath);
  // // 可读流通过管道写入可写流
  // reader.pipe(upStream);
  return (ctx.body = '上传成功！')
})

module.exports = router
