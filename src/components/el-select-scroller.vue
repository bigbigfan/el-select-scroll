<template>
  <div class='box'>
    <el-select
      :value='value'
      @focus='focus'
      v-bind='$attrs'
      v-loadmore='loadMore'
      v-on='$listeners'
      filterable
      clearable
      remote
      :remote-method="remoteMethod"
    >
      <el-option
        :key='option.id'
        :label='option.dictLabel'
        :value='option.dictValue'
        v-for='option in dataList'
      ></el-option>
       <!-- 此处加载中的value可以随便设置，只要不与其他数据重复即可 -->
        <el-option v-if="hasMore" disabled label="加载中..." value="-1"></el-option>
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
    },
    // 是否还有更多数据
    hasMore: {
      type: Boolean,
      default: true
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

        const handler = function () {
          // console.log(this.scrollHeight - this.scrollTop, this.clientHeight)
          // eslint-disable-next-line eqeqeq
          // if (this.scrollHeight - this.scrollTop <= this.clientHeight + 100) {
          //   const stdate = Date.now()
          //   console.log('距离底部还有34px', stdate)
          // }
          const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight
          if (CONDITION) {
            // const enddate = Date.now()
            // console.log('触底', enddate)
            binding.value()
          }
        }
        SELECTWRAP.addEventListener('scroll', handler)

        // 定义触底执行事件
        // const handler = function () {
        //   // console.log(this.scrollHeight - this.scrollTop, this.clientHeight)
        //   // const xx = this.clientHeight + 100
        //   console.log(this.scrollHeight, this.scrollTop, this.scrollHeight - this.scrollTop, (this.scrollHeight - this.scrollTop) / this.clientHeight)
        //   // const CONDITION = this.scrollHeight - this.scrollTop <= xx
        //   const CONDITION = (this.scrollHeight - this.scrollTop) / this.clientHeight <= 3

        //   if (CONDITION) {
        //     console.log('触底')
        //     binding.value()
        //   }
        // }
        // // 定义节流函数
        // function throttle (func, wait) {
        //   let previous = 0

        //   return function () {
        //     let now = +new Date()
        //     let remain = wait - (now - previous)

        //     if (remain < 0) {
        //       previous = now
        //       func.call(this, arguments)
        //     }
        //   }
        // }

        // SELECTWRAP.addEventListener('scroll', throttle(handler, 300))
      }
    }
  },
  methods: {
    // 自定义指令传入的参数是触底分页请求
    loadMore () {
      // console.log('wzf')
      // 如果没有更多数据，则不请求
      if (!this.hasMore) {
        return
      }

      this.request({ page: this.page + 1, more: true })
    },
    focus () {
      if (!this.dataList.length) {
        this.request({ page: 1, more: true })
      }
    },
    remoteMethod () {
      this.dataList = [{dictLabel: 'aaa', dictValue: '1', id: 1}]
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
