"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[297],{2297:function(t,s,r){r.r(s),r.d(s,{default:function(){return f}});var o=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length,expression:"list.length"}]},[s("div",{staticClass:"list-control"},[s("div",{staticClass:"list-control-filter"},[s("span",[t._v("品牌:")]),t._l(t.brands,(function(r){return s("span",{key:r.index,staticClass:"list-control-filter-item",class:{on:r===t.filterBrand},on:{click:function(s){return t.handleFilterBrand(r)}}},[t._v(t._s(r))])}))],2),s("div",{staticClass:"list-control-filter"},[s("span",[t._v("颜色:")]),t._l(t.colors,(function(r){return s("span",{key:r.index,staticClass:"list-control-filter-item",class:{on:r===t.filterColor},on:{click:function(s){return t.handleFilterColor(r)}}},[t._v(t._s(r))])}))],2),s("div",{staticClass:"list-control-order"},[s("span",[t._v("排序:")]),s("span",{staticClass:"list-control-order-item",class:{on:""===t.order},on:{click:t.handleOrderDefault}},[t._v("默认")]),s("span",{staticClass:"list-control-order-item",class:{on:"sales"===t.order},on:{click:t.handleOrderSales}},[t._v(" 销量 "),"sales"===t.order?[t._v("↓")]:t._e()],2),s("span",{staticClass:"list-control-order-item",class:{on:t.order.indexOf("cost")>-1},on:{click:t.handleOrderCost}},[t._v(" 价格 "),"cost-desc"===t.order?[t._v("↓")]:t._e(),"cost-asc"===t.order?[t._v("↑")]:t._e()],2)])]),s("div",{staticClass:"productsList"},t._l(t.filteredAndOrderedList,(function(t){return s("Customer_Product",{key:t.fields.id,attrs:{info:t}})})),1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.filteredAndOrderedList.length,expression:"!filteredAndOrderedList.length"}],staticClass:"product-not-found"},[t._v("暂无相关商品")])])},e=[],l=r(1828),i=r(8491),d={components:{Customer_Product:l.Z},data(){return{list:[],filterBrand:"",filterColor:"",order:""}},computed:{brands(){console.log("bb22");const t=this.list.map((t=>t.fields.product_brand));return console.log("bbbbb22"),console.log(t),i.Z.getFilterArray(t)},colors(){const t=this.list.map((t=>t.fields.product_color));return i.Z.getFilterArray(t)},filteredAndOrderedList(){let t=[...this.list];return""!==this.filterBrand&&(t=t.filter((t=>t.fields.product_brand===this.filterBrand))),""!==this.filterColor&&(t=t.filter((t=>t.fields.product_color===this.filterColor))),""!==this.order&&("sales"===this.order?t=t.sort(((t,s)=>s.fields.product_sales-t.fields.product_sales)):"cost-desc"===this.order?t=t.sort(((t,s)=>s.fields.product_cost-t.fields.product_cost)):"cost-asc"===this.order&&(t=t.sort(((t,s)=>t.fields.product_cost-s.fields.product_cost)))),t}},methods:{async getProductsList(){await this.axios.get("show_customer_products/").then((t=>{console.log(t.data.list),this.list=t.data.list})).catch((function(t){console.log(t)}))},handleFilterBrand(t){this.filterBrand===t?this.filterBrand="":this.filterBrand=t},handleFilterColor(t){this.filterColor===t?this.filterColor="":this.filterColor=t},handleOrderDefault(){this.order=""},handleOrderSales(){this.order="sales"},handleOrderCost(){"cost-desc"===this.order?this.order="cost-asc":this.order="cost-desc"}},async created(){console.log("22"),await this.getProductsList(),console.log(this.list),console.log(this.list.map((t=>t.fields.product_brand))),console.log(this.list[0].pk)}},c=d,n=r(1001),a=(0,n.Z)(c,o,e,!1,null,"29f3373c",null),f=a.exports},1828:function(t,s,r){r.d(s,{Z:function(){return n}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"product"},[s("router-link",{staticClass:"product-main",attrs:{to:"/product/"+t.info.pk}},[s("img",{attrs:{src:`http://127.0.0.1:8000/media/${t.info.fields.product_image}`,alt:"",height:"200px"}}),s("h4",[t._v(t._s(t.info.fields.product_name))]),s("h4",[t._v("销量"+t._s(t.info.fields.product_sales))]),s("div",{staticClass:"product-color",style:{background:t.colors[t.info.fields.product_color]}}),s("div",{staticClass:"product-cost"},[t._v("￥ "+t._s(t.info.fields.product_cost))]),s("div",{staticClass:"product-add-cart",on:{click:function(s){return s.preventDefault(),t.handleAddCart.apply(null,arguments)}}},[t._v("加入购物车")])])],1)},e=[],l={props:{info:Object},data(){return{colors:{"白色":"#ffffff","黑色":"#100f0f","灰色":"#a39f9f","金色":"#dac272","蓝色":"#233472","红色":"#f2352e"},product_goods:0,begood:!0}},methods:{async handleAddCart(){await this.axios.get("add_to_cart/",{params:{user_id:this.$store.state.userId,product_id:this.info.pk}}).then((t=>{console.log(t),window.alert("添加成功")})).catch((function(t){console.log(t)}))}}},i=l,d=r(1001),c=(0,d.Z)(i,o,e,!1,null,"54f023da",null),n=c.exports}}]);
//# sourceMappingURL=297.61133d3b.js.map