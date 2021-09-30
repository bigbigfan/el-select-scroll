import Mock from 'mockjs' // 引入mockjs
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
/**
  Random.name() 生成姓名
  Random.boolean() 可以生成基本数据类型
  Random.date() 生成一个随机日期,可加参数定义日期格式
  Random.natural(1, 10) 生成1到100之间自然数
  Random.integer(1, 100) 生成1到100之间的整数
  Random.float(0, 100, 0, 5) 生成0到100之间的浮点数,小数点后尾数为0到5位
  Random.character() 生成随机字符串,可加参数定义规则
  Random.string(2, 10) 生成2到10个字符之间的字符串
  Random.range(0, 10, 2) 生成一个随机数组
  Random.image(Random.size, '#02adea', 'Hello') Random.size表示将从size数据中任选一个数据
  Random.color() 生成一个颜色随机值
  Random.paragraph(2, 5) 生成2至5个句子的文本
  Random.url() 生成web地址
  Random.province() 生成地址
*/
// const imgArr = [
//   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1516415438,2737888388&fm=26&gp=0.jpg',
//   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3202786501,2474464622&fm=26&gp=0.jpg',
//   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3091546230,3737210845&fm=26&gp=0.jpg',
//   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2831171483,182597813&fm=26&gp=0.jpg',
//   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2315035427,1315607723&fm=26&gp=0.jpg',
//   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=381642089,1358857003&fm=26&gp=0.jpg',
//   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3503678701,2626048498&fm=26&gp=0.jpg',
//   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2076007497,2378841790&fm=26&gp=0.jpg'
// ]
const productData = []
for (let i = 0; i < 1500; i++) {
  const template = {
    // img: imgArr[Random.integer(0, 7)],
    // name: Random.title(1, 2),
    // brand: '杉杉' + Random.integer(0, 7),
    // 规格: 'M' + Random.integer(0, 7),
    // proSale1: '¥1.00/¥1.00',
    // proSale2: '¥1.00/¥1.00',
    // isHot: Random.boolean(),
    // isRecommend: Random.boolean(),
    // isNew: Random.boolean(),
    // isSell: Random.boolean()
    id: i,
    dictLabel: `${Random.title(1, 2)}------ ${i}`,
    dictValue: `${i}`
  }
  productData.push(template)
}

export {
  productData
}
