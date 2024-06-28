<template>
  <div v-show="list.length">

    <div class="list-control">
      <div class="list-control-filter">
        <span>品牌:</span>
        <span class="list-control-filter-item"
              :class="{on: item === filterBrand}"
              v-for="item in brands" :key="item.index"
              @click="handleFilterBrand(item)" >{{item}}</span>
      </div>
      <div class="list-control-filter">
        <span>颜色:</span>
        <span class="list-control-filter-item"
              :class="{on: item === filterColor}"
              v-for="item in colors" :key="item.index"
              @click="handleFilterColor(item)">{{item}}</span>
      </div>

      <div class="list-control-order">
        <span>排序:</span>
        <span class="list-control-order-item"
              :class="{on: order === ''}"
              @click="handleOrderDefault">默认</span>
        <span class="list-control-order-item"
              :class="{on: order === 'sales'}"
              @click="handleOrderSales">
                    销量
                    <template v-if="order === 'sales'">↓</template>
                </span>
        <span class="list-control-order-item"
              :class="{on: order.indexOf('cost') > -1}"
              @click="handleOrderCost">
                    价格
                    <template v-if="order === 'cost-desc'">↓</template>
                    <template v-if="order === 'cost-asc'">↑</template>
                </span>
      </div>
    </div>
    <div class="productsList">
      <Customer_Product v-for="item in filteredAndOrderedList" :info="item" :key="item.fields.id"></Customer_Product>
    </div>
    <div class="product-not-found"
         v-show="!filteredAndOrderedList.length">暂无相关商品</div>
  </div>


</template>

<script>
//导入商品简介组件
import Customer_Product from './customer_product.vue';
import util from "@/components/customer/util";
export default {
  components: {Customer_Product},

  data(){
    return {
      list:[],
      //品牌过滤
      filterBrand: '',
      //颜色过滤
      filterColor: '',
      //排序依据，可选值：
      //cost-desc价格降序
      //cost-asc价格升序
      //sales销量
      order: ''
    }
  },
  computed:{
    brands(){
      //return this.$store.getters.brands;
      console.log("bb22");
      const brands = this.list.map(item => item.fields.product_brand);
      console.log("bbbbb22");
      console.log(brands);
      return util.getFilterArray(brands);

    },
    colors(){
      const colors = this.list.map(item => item.fields.product_color);
      return util.getFilterArray(colors);
    },
    filteredAndOrderedList(){
      //拷贝原数组
      let list = [...this.list];
      //品牌过滤
      if(this.filterBrand !== ''){
        list = list.filter(item => item.fields.product_brand === this.filterBrand);
      }
      //颜色过滤
      if(this.filterColor !== ''){
        list = list.filter(item => item.fields.product_color === this.filterColor);
      }
      //排序
      if(this.order !== ''){
        if(this.order === 'sales'){
          list = list.sort((a, b) => b.fields.product_sales - a.fields.product_sales);
        }else if(this.order === 'cost-desc'){
          list = list.sort((a, b) => b.fields.product_cost - a.fields.product_cost);
        }else if(this.order === 'cost-asc'){
          list = list.sort((a, b) => a.fields.product_cost - b.fields.product_cost);
        }
      }
      return list;
    }
  },
  methods: {
    async getProductsList(){
      //从Vuex获取商品列表信息
      //return this.$store.state.productList;
      await this.axios.get('show_customer_products/')
        .then((response) => {
            console.log(response.data.list);
            this.list = response.data.list
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    //品牌筛选
    handleFilterBrand(brand){
      //点击品牌过滤，再次点击取消
      if (this.filterBrand === brand) {
        this.filterBrand = '';
      }else{
        this.filterBrand = brand;
      }
    },
    //颜色筛选
    handleFilterColor(color){
      //点击颜色过滤，再次点击取消
      if (this.filterColor === color) {
        this.filterColor = '';
      }else{
        this.filterColor = color;
      }
    },
    handleOrderDefault(){
      this.order = '';
    },
    handleOrderSales(){
      this.order = 'sales';
    },
    handleOrderCost(){
      //当点击升序时将箭头更新↓,降序设置为↑
      if(this.order === 'cost-desc'){
        this.order = 'cost-asc';
      }else{
        this.order = 'cost-desc';
      }
    },

  },

  async created(){
    //初始化时通过Vuex actions获取商品列表信息
    console.log("22");
    await this.getProductsList()
    console.log(this.list);
    console.log(this.list.map(item => item.fields.product_brand))
    console.log(this.list[0].pk)
  }
}
</script>

<style scoped>
/* General Styling */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fff0f5; /* Light pink background */
}

.container {
  width: 500px;
  margin: 50px auto;
  overflow: hidden;
  border: 1px solid #ffb6c1; /* Light pink border */
  border-radius: 10px;
  background-color: #fff; /* White background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

/* Search Bar Styling */
.bar1 {
  background: #ff69b4; /* Pink background */
  padding: 10px;
  border-radius: 5px;
}

.bar1 input {
  border: 2px solid #ffb6c1; /* Light pink border */
  border-radius: 5px 0 0 5px;
  background: #fff; /* White background */
  color: #ff69b4; /* Pink text color */
  padding: 8px;
  width: 80%;
  box-sizing: border-box;
}

.bar1 button {
  background: #ffb6c1; /* Light pink background */
  border: none;
  border-radius: 0 5px 5px 0;
  color: #fff; /* White text color */
  padding: 8px;
  cursor: pointer;
}

.bar1 button:before {
  font-family: FontAwesome, serif;
  font-size: 16px;
  color: #fff; /* White text color */
}

/* List Control Styling */
.list-control {
  background: #fff; /* White background */
  border-radius: 6px;
  margin: 16px 0;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.list-control-filter {
  margin-bottom: 16px;
}

.list-control-filter-item,
.list-control-order-item {
  cursor: pointer;
  display: inline-block;
  border: 1px solid #ffb6c1; /* Light pink border */
  border-radius: 4px;
  margin-right: 6px;
  padding: 2px 6px;
  color: #ff69b4; /* Pink text color */
  background-color: #fff; /* White background */
}

.list-control-filter-item.on,
.list-control-order-item.on {
  background: #ff69b4; /* Pink background */
  border: 1px solid #ff69b4; /* Pink border */
  color: #fff; /* White text color */
}

/* Product Not Found Styling */
.product-not-found {
  text-align: center;
  padding: 32px;
  color: #ff69b4; /* Pink text color */
}

/* Like Section Styling */
.like {
  width: 1000px;
  margin: 50px auto;
  overflow: hidden;
  border: 1px solid #ffb6c1; /* Light pink border */
  border-radius: 10px;
  background-color: #fff; /* White background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.likeItem {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 10px;
  background-color: #fff0f5; /* Light pink background */
  border: 1px solid #ffb6c1; /* Light pink border */
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
