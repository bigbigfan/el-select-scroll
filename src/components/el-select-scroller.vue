<template>
  <div class='box'>
    <el-select
      :remote-method='remoteMethod'
      :value='value'
      @focus='focus'
      clearable
      filterable
      remote
      v-bind='$attrs'
      v-loadmore='loadMore'
      v-on='$listeners'
    >
      <el-option
        :key='option.id'
        :label='option[dictLabel]'
        :value='option[dictValue]'
        v-for='option in dataList'
      ></el-option>
      <!-- 此处加载中的value可以随便设置，只要不与其他数据重复即可 -->
      <el-option disabled label='加载中...' v-if='hasMore' value='-1'></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'selectScroll',
  props: {
    value: {
      type: [String, Array], // 支持开启多选
      default: ''
    },
    // 列表数据
    dataList: {
      type: Array,
      default: () => []
    },
    // 自定义键名
    dictLabel: {
      type: String,
      default: 'label'
    },
    dictValue: {
      type: String,
      default: 'value'
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
    // 是否有默认数据需要回显
    // defaultData: {
    //   type: [String, Array],
    //   default: () => []
    // }
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
    // 远程搜索，这里应该还需要设计防抖
    remoteMethod () {
      this.dataList = [{ dictLabel: 'aaa', dictValue: '1', id: 1 }]
      // 这里应该还要考虑更新页码？或者直接把loadMore改成false
    }
  },
  created () {
    // // 直接在created自动获取第一页数据
    // if (!this.dataList.length) {
    //   this.request({ page: 1, more: true })
    // }
  },
  mounted () {
    // 在mounted钩子里判断一次是否有默认数据从而考虑是否要回显
    if (this.value.length || this.value) {
      console.log('value', this.value)
      // 发送请求给后台查询对应的value的值
      // 然后把返回的数据塞到dataList
      // this.dataList = [
      //   { dictLabel: 'aaa', dictValue: '1', id: 1 },
      //   { dictLabel: 'csa', dictValue: '12', id: 2 },
      //   { dictLabel: 'aadsaa', dictValue: '24', id: 3 },
      //   { dictLabel: 'aacsacaa', dictValue: '25', id: 4 }
      // ]
    }

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
