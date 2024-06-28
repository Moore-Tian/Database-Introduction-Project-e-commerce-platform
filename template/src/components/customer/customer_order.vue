<template>

  <div class="order-right">
    <br><br><br><br>
    <div class="order-content">

      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
          <tr>
            <th style="width:29%">商品</th>
            <th style="width:31%">订单详情</th>
            <th style="width:13%">收货人</th>
            <th>金额</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <!-- 每一笔订单 -->
        <table class="order-item" v-for="order in myOrder" :key="order.id">
          <thead>
          <tr>
            <th colspan="5">
                <span class="ordertitle">{{ order.createTime }}订单编号:{{ order.outTradeNo }}
                  <span class="pull-right delete"><img src="./images/delete.png" />
                  </span></span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(cart,index) in order.orderDetailList" :key="cart.id">
            <td style="width: 60%"  >
                <div class="typographic">
                  <img :src="cart.imgUrl" style="width:100px;height:100px;"/>
                  <a style="width: 30%" href="#" class="block-text">{{cart.skuName}}</a>
                  <a style="width: 40%">x{{cart.skuNum}}</a>
                  <a style="width: 30%" href="#" class="service">售后申请</a>
                </div>
            </td>

            <td :rowspan="order.orderDetailList.length" v-if="index==0" style="width:8%" class="center">{{order.consignee}}</td>
            <td :rowspan="order.orderDetailList.length" v-if="index==0" style="width:13%" class="center">
              <ul class="unstyled">
                <li>总金额¥{{order.totalAmount}}.00</li>
                <li>在线支付</li>
              </ul>
            </td>
            <td :rowspan="order.orderDetailList.length" v-if="index==0" style="width:8%" class="center">
              <a href="#" class="btn">{{order.orderStatusName}} </a>
            </td>
            <td :rowspan="order.orderDetailList.length" v-if="index==0" style="width:13%" class="center">
              <ul class="unstyled">
                <li>
                  <a href="" target="_blank">评价|晒单</a>
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import order_data from "./myOrders";
export default {
  name:"orderS",
  data() {
    return {
      //初始化参数
      //当前第几页
      page: 1,
      //每一页展示数据个数
      limit: 3,
      //存储我的订单的数据
      myOrder:{}
    }
  },
  mounted () {
    //获取我的订单的数据方法
    this.getData()
  },
  methods: {
    //获取我的订单的方法
    async getData() {
      //解构出参数
      this.myOrder = order_data;
    },
    //获取当前点击的那一页
  },
};
</script>

<style lang="scss" scoped>
table {
  border: 1px solid #ffc0cb; /* Light pink border */
  border-collapse: collapse;
  font-size: 14px; /* Slightly larger font size for better readability */
  color: #666; /* Text color */
  width: 100%;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle box shadow for a lifted look */
}

th, td {
  border: 1px solid #ffc0cb; /* Light pink border */
  padding: 12px 15px; /* Padding for better spacing */
  text-align: left;
}

th {
  background-color: #ff69b4; /* Pink background for table headers */
  color: #fff; /* White text color for headers */
  text-transform: uppercase; /* Uppercase text for headers */
}

tr:nth-child(even) {
  background-color: #ffe4e1; /* Light pink background for even rows */
}

tr:hover {
  background-color: #ffd1dc; /* Darker pink background on row hover */
}

.order-content {
  margin-top: 50px; /* Adjust top margin for better spacing */
  padding: 20px; /* Padding around the content */
  background-color: #fff0f5; /* Light pink background */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle box shadow for a lifted look */
}

@media (max-width: 768px) {
  table {
    font-size: 12px; /* Adjust font size for smaller screens */
  }

  th, td {
    padding: 10px 8px; /* Adjust padding for smaller screens */
  }
}
</style>
