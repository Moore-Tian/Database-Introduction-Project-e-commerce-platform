<template>
  <div class="product">
    <router-link :to="'/business/product/' + info.pk"
                 class="product-main">
      <!-- 依次显示商品图片、名称、销量、颜色、单价，加入购物车 -->


      <img :src="`http://127.0.0.1:8000/media/${info.fields.product_image}`" alt="" height="200px">
      <h4>{{info.fields.product_name}}</h4>
      <h4>销量{{info.fields.product_sales}}</h4>
      <div class="product-color"
           :style="{background: colors[info.fields.product_color]}"></div>
      <div class="product-cost">￥ {{info.fields.product_cost}}</div>
      <!-- 阻止冒泡，否则点击按钮的同时也会触发a标签进入详情页 -->
      <div class="product-add-cart"
           @click.prevent="handleAddCart">增加库存</div>
    </router-link>
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
        '黑色': '#100f0f',
        '灰色': '#a39f9f',
        '金色': '#dac272',
        '蓝色': '#233472',
        '红色': '#f2352e'
      },
    }
  },
  methods: {
    async handleAddCart(){
      this.$router.push({path: '/business/commodity/edit_commodity_stock/'+ this.info.pk})
    }
  }
}
</script>
<!-- scoped属性表示只对当前组件有效，不影响其他组件 -->
<style scoped>
.product {
  width: 330px;
  float: left;
  margin: 16px;
}

.product-main {
  display: block;
  padding: 20px;
  border: 1px solid #f8bbd0;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  text-align: center;
  position: relative;
  transition: box-shadow 0.3s ease-in-out;
}
.product-main:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-main img {
  width: 100%;
  border-radius: 10px;
}

h4 {
  color: #ad1457;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0;
}
.product-main:hover h4 {
  color: #e91e63;
}

.product-color {
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #f8bbd0;
  border-radius: 50%;
  margin: 6px auto;
}

.product-cost {
  color: #e91e63;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

.product-add-cart {
  display: none;
  padding: 6px 12px;
  background: #f06292;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: background 0.3s ease;
}
.product-main:hover .product-add-cart {
  display: inline-block;
}
.product-add-cart:hover {
  background: #e91e63;
}
</style>
