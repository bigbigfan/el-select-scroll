<template>
  <div class='app'>
    <span>{{name}}</span>
    <selectScroll
      :dataList='dataList'
      :dictLabel="'dictLabel'"
      :dictValue="'dictValue'"
      :hasMore='more'
      multiple
      :page='page'
      :request='getData'
      v-model='selected'
    ></selectScroll>
  </div>
</template>
<script>
import selectScroll from './el-select-scroller.vue'
import { request } from '../api/request'
export default ({
  name: 'HelloWorld',
  components: {
    selectScroll
  },
  data () {
    return {
      name: 'wzf',
      selected: [],
      page: 1,
      more: true,
      dataList: []
      // params: {
      //   cur: 1,
      //   size: 10
      // }
    }
  },
  methods: {

    // 传入子组件的函数
    // getData ({ page = 1, more = false } = {}) {
    //   // 输出页码
    //   console.log(page)
    //   // 访问后端接口API
    //   if (more) {
    //     this.requestAPI({ page }).then(res => {
    //       this.dataList = [...this.dataList, ...res.result]
    //       let {total, page, size} = res
    //       this.more = page * size < total
    //       this.page = res.page
    //     })
    //   }
    // },
    // // 模拟后端接口的API
    // requestAPI ({ page = 1, size = 50 } = {}) {
    //   return new Promise(resolve => {
    //     let responseData = []
    //     // 假设总共的数据有50条
    //     let total = 30000
    //     for (let i = 1; i <= size; i++) {
    //       // serial：处于第几个元素，就显示多少序号
    //       let serial = i + (page - 1) * size
    //       if (serial <= total) {
    //         responseData.push({
    //           dictLabel: serial,
    //           dictValue: `${serial}`
    //         })
    //       }
    //     }
    //     // 模拟异步请求，200ms之后返回接口的数据
    //     // 模拟异步请求，200-400ms之后返回接口的数据
    //     setTimeout(() => {
    //       resolve({
    //         total,
    //         page,
    //         size,
    //         result: responseData
    //       })
    //     }, parseInt(Math.random() * (400 - 200) + 200))
    //   })
    // }

    getData ({ page = 1, more = false, size = 10 } = {}) {
      // 输出页码
      console.log(page)

      // 访问后端接口API
      if (more) {
        request.post('/data/employeeList', { cur: page, size: size }).then(res => {
          console.log(res)
          let { page, size, total, data } = res
          this.dataList = [...this.dataList, ...data]
          this.page = res.page
          this.more = page * size < total
        })

        // this.requestAPI({ page }).then(res => {
        //   this.dataList = [...this.dataList, ...res.result]
        //   let {total, page, size} = res
        //   this.more = page * size < total
        //   this.page = res.page
        // })
      }
    }

  },
  mounted () {
  }
})
</script>
<style scoped>
</style>
