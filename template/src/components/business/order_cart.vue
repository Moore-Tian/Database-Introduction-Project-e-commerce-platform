<template>
    <div class="cart">
        <div class="cart-header">
            <div class="cart-header-main">
                <div class="cart-info">商品信息</div>
                <div class="cart-price">单价</div>
                <div class="cart-count">数量</div>
                <div class="cart-cost">小计</div>
            </div>
        </div>
        <div class="cart-content">
            <!-- 列表显示购物清单 -->
            <div class="cart-content-main" v-for="(item)  in cart_list" :key="item.index">
                <div class="cart-info">
                    <img :src="`http://127.0.0.1:8000/media/${productDictList[item.fields.product_id].fields.product_image}`" alt=""
                    height="150px" width="150px">
                    <span>{{productDictList[item.fields.product_id].fields.product_name}}</span>
                </div>
                <div class="cart-price">
                    ￥ {{item.fields.order_product_cost}}
                </div>
                <div class="cart-count">

                    {{item.fields.num}}

                </div>
                <div class="cart-cost">
                    ￥ {{item.fields.order_product_cost * (item.fields.num-0.0)}}
                </div>
            </div>
            <div class="cart-empty" v-if="!cart_list.length">无商品</div>
        </div>
        <div class="cart-footer" v-show="cart_list.length">
            <div class="cart-footer-desc">
                共计 <span>{{countAll}}</span>
            </div>
            <div class="cart-footer-desc">
                总额 <span>{{costAll}}</span>
                <br>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order_cart",
      props: {
          info: Object,
          orderProducts: Object,
          productDictList: Object,
        },
        data(){
            return {

                userCartList:[],  //从cart表取到的原数据
                cartProductList:[],  //cart表里包含的product表的原数据
                productList: [],
                //productDictList:[] , //product_id -> product

              cart_list:[],

            }
        },
      created(){
          this.orderProducts.forEach(item => {
            if(item.fields.order_id==this.info.pk){
              this.cart_list.push(item)
            }
            });
      },
        computed: {
            //订单商品总数
            countAll(){
                let count = 0;
                this.cart_list.forEach(item => {
                    count += item.fields.num;
                });
                return count;
            },//订单商品总价
            costAll(){
                let cost = 0;
                this.cart_list.forEach(item => {
                    cost += item.fields.order_product_cost * (item.fields.num-0.0);

                });
                return cost;
            }

        },


    }
</script>

<style scoped>
.cart {
    margin: 32px;
    background: #fff;
    border: 1px solid #f8bbd0; /* 更改边框颜色为浅粉色 */
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

.cart-header-title {
    padding: 16px 32px;
    border-bottom: 1px solid #f8bbd0; /* 更改边框颜色为浅粉色 */
    border-radius: 10px 10px 0 0;
    background: #fce4ec; /* 更改背景颜色为淡粉色 */
    font-size: 18px;
    font-weight: bold;
    color: #ad1457; /* 更改文本颜色为深粉色 */
}

.cart-header-main {
    padding: 16px 32px;
    overflow: hidden;
    border-bottom: 1px solid #f8bbd0; /* 更改边框颜色为浅粉色 */
    background: #fce4ec; /* 更改背景颜色为淡粉色 */
    font-size: 14px;
    color: #ad1457; /* 更改文本颜色为深粉色 */
}

.cart-empty {
    text-align: center;
    padding: 32px;
    color: #ad1457; /* 更改文本颜色为深粉色 */
}

.cart-header-main div {
    text-align: center;
    float: left;
    font-size: 14px;
    color: #ad1457; /* 更改文本颜色为深粉色 */
}

div.cart-info {
    width: 60%;
    text-align: left;
}

.cart-price,
.cart-count,
.cart-cost {
    width: 10%;
}

.cart-del {
    width: 10%;
    color: #f48fb1; /* 更改删除按钮颜色为浅粉色 */
    cursor: pointer;
    transition: color 0.3s;
}

.cart-del:hover {
    color: #d81b60; /* 鼠标悬停时更改颜色为深粉色 */
}
</style>
