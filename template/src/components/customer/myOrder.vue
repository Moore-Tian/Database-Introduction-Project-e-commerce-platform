<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <!-- 每一笔订单 -->
        <div class="order-item" v-for="order in myOrder" :key="order.id">
          <div class="order-item-header">
            <span class="ordertitle">{{ order.createTime }}订单编号:{{ order.outTradeNo }}</span>
            <span class="delete"><img src="../images/delete.png" alt="delete" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import order_data from "../../myOrders";
export default {
  name: "orderS",
  data() {
    return {
      // 初始化参数
      // 当前第几页
      page: 1,
      // 每一页展示数据个数
      limit: 3,
      // 存储我的订单的数据
      myOrder: {}
    };
  },
  mounted() {
    // 获取我的订单的数据方法
    this.getData();
  },
  methods: {
    // 获取我的订单的方法
    async getData() {
      // 解构出参数
      this.myOrder = order_data;
    }
    // 获取当前点击的那一页
  }
};
</script>

<style scoped>
.order-right {
  margin-top: 50px;
}

.order-content {
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title h3 {
  margin: 0;
  padding-bottom: 16px;
  font-size: 24px;
  color: #ff69b4; /* 粉色标题 */
}

.chosetype table {
  width: 100%;
}

.chosetype th {
  font-weight: bold;
  color: #ff69b4; /* 粉色标题 */
}

.orders {
  margin-top: 16px;
}

.order-item {
  margin-top: 16px;
  border-top: 1px solid #eee;
}

.order-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-item-header .ordertitle {
  font-size: 18px;
}

.order-item-header .delete img {
  cursor: pointer;
}

.order-item-header .delete img:hover {
  opacity: 0.7;
}
</style>
