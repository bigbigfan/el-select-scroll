import Mock from 'mockjs' // 引入mockjs
import {
  productData
} from './data/mockData'

Mock.mock('/data/employeeList', 'post', (params) => {
  const info = JSON.parse(params.body)
  const [cur, size, total] = [info.cur, info.size, productData.length]
  /**
     * cur：当前页
     * size：一页显示几条
     * total:总共多少条
    */
  const len = total / size
  const totalPages = len - parseInt(len) > 0 ? parseInt(len) : len
  const data = productData.slice(cur * size, (cur + 1) * size)
  return {
    code: '0',
    message: 'success',
    data: {
      page: cur,
      size: size,
      data: data,
      total: total,
      totalPages: totalPages
    }
  }
})
