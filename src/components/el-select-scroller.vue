<template>
  <div class='box'>
    <el-select
      :value='value'
      @focus='focus'
      v-bind='$attrs'
      v-loadmore='loadMore'
      v-on='$listeners'
    >
      <el-option
        :key='option.value'
        :label='option.dictLabel'
        :value='option.dictValue'
        v-for='option in dataList'
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'selectScroll',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 列表数据
    dataList: {
      type: Array,
      default: () => []
    },
    dictLabel: {
      type: [String, Number],
      default: 1
    },
    dictValue: {
      type: [String, Number],
      default: 1
    },
    // 调用分页的接口
    request: {
      type: Function,
      default: () => { }
    },
    page: {
      type: [Number, String],
      default: 1
    }
  },
  data () {
    return {
    }
  },
  directives: {
    loadmore: {
      bind: function (el, binding, vnode) {
        const SELECTWRAP = el.querySelector(
          '.el-select-dropdown .el-select-dropdown__wrap'
        )
        SELECTWRAP.addEventListener('scroll', function () {
          const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight
          if (CONDITION) {
            binding.value()
          }
        })
      }
    }
  },
  methods: {
    // 自定义指令传入的参数是触底分页请求
    loadMore () {
      console.log('wzf')
      this.request({ page: this.page + 1 })
    },
    focus () {
      if (!this.dataList.length) {
        this.request({ page: 1 })
      }
    }
  },
  mounted () {
    // for (let i = 0; i < 10; i++) {
    //   const obj = {
    //     value: i,
    //     dictValue: i,
    //     dictLabel: `员工${i + 1}`
    //   }
    //   this.dataList.push(obj)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
