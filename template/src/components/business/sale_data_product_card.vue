<template>
  <div class="product">
      <img :src="`http://127.0.0.1:8000/media/${info.fields.product_image}`" alt="" height="200px">
      <h4>{{info.fields.product_name}}</h4>
      <h4>销量{{info.fields.product_sales}}</h4>
      <div class="product-color"
           :style="{background: colors[info.fields.product_color]}"></div>
      <div class="product-cost">￥ {{info.fields.product_cost}}</div>
      <!-- 阻止冒泡，否则点击按钮的同时也会触发a标签进入详情页 -->
      <div class="product-add-cart"
           @click.prevent="handleAddCart">筛选显示</div>

  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data () {
    return {
      colors: {
        '白色': '#ffffff',
        '金色': '#dac272',
        '蓝色': '#233472',
        '红色': '#f2352e'
      }
    }
  },
  methods: {
    async handleAddCart(){
      this.$store.state.chooseProductId=this.info.pk
    }
  }
}
</script>
<!-- scoped属性表示只对当前组件有效，不影响其他组件 -->
<style scoped>
.product {
  width: 330px;
  float: left;
}

.product-main {
  display: block;
  margin: 16px;
  padding: 16px;
  border: 1px solid #f8bbd0; /* 更改边框颜色为浅粉色 */
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  text-align: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  transition: transform 0.3s, box-shadow 0.3s; /* 添加过渡效果 */
}

.product-main:hover {
  transform: translateY(-5px); /* 鼠标悬停时上移 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 鼠标悬停时加深阴影 */
}

.product-main img {
  width: 100%;
  border-radius: 10px; /* 为图片添加圆角 */
}

h4 {
  color: #ad1457; /* 更改标题颜色为深粉色 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.3s; /* 添加颜色过渡效果 */
}

.product-main:hover h4 {
  color: #c2185b; /* 鼠标悬停时更改标题颜色 */
}

.product-color {
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #f8bbd0; /* 更改边框颜色为浅粉色 */
  border-radius: 50%;
  margin: 6px auto;
}

.product-cost {
  color: #e91e63; /* 更改价格颜色为粉色 */
  margin-top: 6px;
  font-weight: bold;
}

.product-add-cart {
  display: none;
  padding: 4px 8px;
  background: #e91e63; /* 更改按钮颜色为粉色 */
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  transition: background 0.3s; /* 添加背景颜色过渡效果 */
}

.product-main:hover .product-add-cart {
  display: inline-block;
}

.product-add-cart:hover {
  background: #d81b60; /* 鼠标悬停时更改按钮颜色 */
}
</style>
