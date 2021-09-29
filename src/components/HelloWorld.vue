<template>
  <div class='app'>
    <span>{{name}}</span>
    <selectScroll :dataList='dataList' :page='page' :request='getData' v-model='selected'></selectScroll>
  </div>
</template>
<script>
import selectScroll from './el-select-scroller.vue'
export default ({
  name: 'HelloWorld',
  components: {
    selectScroll
  },
  data () {
    return {
      name: 'wzf',
      selected: '',
      page: 1,
      more: true,
      dataList: []
    }
  },
  methods: {
    // 传入子组件的函数
    getData ({ page = 1 } = {}) {
      // 输出页码
      console.log(page)
      // 访问后端接口API
      this.requestAPI({ page }).then(res => {
        this.dataList = [...this.dataList, ...res.result]
        this.page = res.page
      })
    },
    // 模拟后端接口的API
    requestAPI ({ page = 1, size = 10 } = {}) {
      return new Promise(resolve => {
        let responseData = []
        // 假设总共的数据有50条
        let total = 500
        for (let i = 1; i <= size; i++) {
          // serial：处于第几个元素，就显示多少序号
          let serial = i + (page - 1) * size
          if (serial <= total) {
            responseData.push({
              dictLabel: serial,
              dictValue: `${serial}`
            })
          }
        }
        // 模拟异步请求，200ms之后返回接口的数据
        setTimeout(() => {
          resolve({
            total,
            page,
            size,
            result: responseData
          })
        }, 150)
      })
    }

  },
  mounted () {

  }
})
</script>
<style scoped>
</style>
