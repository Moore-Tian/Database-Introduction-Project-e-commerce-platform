<template>
  <div v-if="product">
    <div class="product">
      <!-- 商品图片、名称、价格 -->
      <div class="product-image">
        <img :src="`http://127.0.0.1:8000/media/${product.fields.product_image}`" alt="">
      </div>
      <div class="product-info">
        <h1 class="product-name">商品id：{{product.pk}}</h1>
        <h1 class="product-name">{{product.fields.product_name}}</h1>
        <div class="product-cost">商品库存：{{product.fields.product_stock}}</div>
        <div class="product-cost">商品销量：{{product.fields.product_sales}}</div>
        <div class="product-cost">商品单价：{{product.fields.product_cost}}</div>
        <div class="product-cost">商品品牌：{{product.fields.product_brand}}</div>
        <div class="product-cost">商品颜色：{{product.fields.product_color}}</div>
        <div class="product-cost">商品状态：{{product.fields.product_status}}</div>

        <div class="product-add-cart" v-if="isOn" @click="handleAddCart">编辑商品</div>
        <div class="product-add-cart" v-if="isOn" @click="removePro">下架商品</div>
        <div class="product-add-cart" v-if="!isOn" @click="handleAddCart">编辑并上架商品</div>
      </div>



      </div>



    <div class="product-desc">
      <h2>产品介绍</h2>
      <img :src="`http://127.0.0.1:8000/media/${product.fields.product_imageDetail}`" alt="">
    </div>
  </div>
</template>

<script>
//导入本地数据
//import product_data from './product.js';

export default {
  data(){
    return {
      //获取路由中的参数
      id: parseInt(this.$route.params.id),
      product: null,
      product_goods:0,
      begood:true,
      bestar:true,
      shop_stars:0,
      isOn:true,
    }
  },
  methods: {
    async removePro(){
      await this.axios.get('delete_product/',
            {params:{ product_id: this.id}})
        .then((response) => {
            console.log(response);

        })
        .catch(function (error) {
            console.log(error);
        });
    },

    async getProductLikes(){
      await this.axios.get('get_product_likes/',
            {params:{ product_id: this.id}})
        .then((response) => {
            console.log(response);
           this.product_goods=response.data.goods

        })
        .catch(function (error) {
            console.log(error);
        });

      await this.axios.get('get_shop_stars/',
            {params:{ business_id: this.product.fields.product_business}})
        .then((response) => {
            console.log(response);
           this.shop_stars=response.data.stars

        })
        .catch(function (error) {
            console.log(error);
        });
    },
    async changeGood(){
      if(this.begood){
        this.product_goods-=1
      }else{
        this.product_goods+=1
      }
      this.begood=!this.begood

      await this.axios.get('toggle_user_like_to_product/',
            {params:{user_id: this.$store.state.userId, product_id: this.id}})
        .then((response) => {
            console.log(response);

        })
        .catch(function (error) {
            console.log(error);
        });
    },
    async changeStar(){
      if(this.bestar){
        this.shop_stars-=1
      }else{
        this.shop_stars+=1
      }
      this.bestar=!this.bestar

      await this.axios.get('toggle_user_star_to_shop/',
            {params:{user_id: this.$store.state.userId, business_id: this.product.fields.product_business}})
        .then((response) => {
            console.log(response);

        })
        .catch(function (error) {
            console.log(error);
        });
    },
    async initUserToProduct(){
      await this.axios.get('get_user_like_to_product/',
            {params:{user_id: this.$store.state.userId, product_id: this.id}})
        .then((response) => {
            console.log(response);
            //this.list = response.data.list
          if(response.data.good==='good'){
            this.begood=true
          }else{
            this.begood=false
          }

        })
        .catch(function (error) {
            console.log(error);
        });

      await this.axios.get('get_user_star_to_shop/',
            {params:{user_id: this.$store.state.userId, business_id: this.product.fields.product_business}})
        .then((response) => {
            console.log(response);
            //this.list = response.data.list
          if(response.data.star==='star'){
            this.bestar=true
          }else{
            this.bestar=false
          }

        })
        .catch(function (error) {
            console.log(error);
        });
    },


    async getProduct(x1){
      await this.axios.get('fetch_product/',{params:{product_id: x1}})
        .then((response) => {
            console.log(response);
            this.product = response.data.product
        })
        .catch(function (error) {
            console.log(error);

        });
    },
    async handleAddCart(){
      this.$router.push({path: '/business/business_edit_commodity/'+ this.id})

    }
  },
  async created(){
    //初始化数据

    await this.getProduct(this.id)

    if(this.product.fields.product_status=='上架'){
      this.isOn=true
    }else {
      this.isOn=false
    }

  },

  async mounted(){
    //初始化数据

    await this.getProduct(this.id)


  }
}
</script>
<!-- scoped属性表示只对当前组件有效，不影响其他组件 -->
<style scoped>
.word {
  font-size: 24px;
  color: #ad1457;
}

.fillheart {
  color: #e91e63;
  font-size: 32px;
}

.heart {
  color: #ccc;
  font-size: 32px;
}

.fillstar {
  color: #ffeb3b;
  font-size: 32px;
}

.star {
  color: #ccc;
  font-size: 32px;
}

.product {
  margin: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #f8bbd0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}
.product:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 50%;
  height: auto;
  float: left;
  text-align: center;
}
.product-image img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
}

.product-info {
  width: 50%;
  padding: 50px 20px;
  float: left;
  text-align: center;
}

.product-cost {
  color: #e91e63;
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
}

.product-add-cart {
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 0;
  background: #f06292;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.product-add-cart:hover {
  background: #e91e63;
}

.product-desc {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border: 1px solid #f8bbd0;
  border-radius: 10px;
  text-align: center;
}

.product-desc img {
  display: block;
  width: 70%;
  margin: 20px auto;
  padding: 20px;
  border-bottom: 1px solid #f8bbd0;
}
</style>
