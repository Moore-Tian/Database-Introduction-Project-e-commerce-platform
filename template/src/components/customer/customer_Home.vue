<template>

  <div class="home">
    <div class="header">头部</div>

    <template v-if="show">
      <div class="header">
        <router-link to="/customerHome"
                     class="header-title">电商网站首页</router-link>
    <br><br>


        <!--
        {% csrf_token %}
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="商品图片">
            <input type="file" @change="getImageFile" id="img">
            <img :src="image"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认添加</el-button>
          </el-form-item>
        </el-form>

        <div class="header-menu">
          <router-link to="/cart"
                       class="header-menu-cart">
            购物车
            <span v-if="cartList.length">{{cartList.length}}</span>
          </router-link>
        </div>
        -->

        <!--搜索框-->
        <div class="searchBox">
    <input type="text" v-model="inputText" placeholder="请输入关键词进行搜索" class="searchInput" style="padding-left: 10px;">
    <input type="button"  @click="Click" value="搜索" class="searchButton">
  </div>
<div class="header-menu" style="float: right">
  <v-avatar color="teal" size="48">
    <span class="white--text headline">{{this.user}}</span>
  </v-avatar>
</div>
        <br><br>
         <!--
    <div class="container" id="div1" align="center">
      <v-row align="center">
      <div class="search_bar1">
        <form>
          <input type="text" v-model="inputText" placeholder="请输入您要搜索的内容...">

        </form>
        </div>
        <div class="search bar1">
      <button @click="Click"> <img src="../../assets/search.png" width="25px" height="25px"> </button>
        </div>
    </v-row>
    </div>

        <div class="header-menu">
          <router-link to="/login/logout"
                       class="header-menu-cart">
            退出登录
          </router-link>
        </div>
        -->
        <customerList></customerList>
      </div>
      <router-view></router-view>
    </template>
    <!-- 挂载所有路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import customerList from "./customer_list.vue"
export default {
  components: {
    customerList
  },
  data(){
    return {
      user: '',
      inputText:'',
      statuss:0,
      image:'http://127.0.0.1:8000/media/'+'avatar/airPods.jpg',
        form: {
          goods_image: '',
        }
    }
  },
  watch:{
    statuss:function() {
      if(this.statuss>0){
        //window.location.href = '/#/business/searchOut';
        console.log(this.$store.state.searchText)
      }
    }
  },
  methods: {

    async Click(){
      if(this.inputText===''){
        window.alert('请输入搜索内容')
        return
      }
      this.$store.state.searchText=this.inputText
      //window.location.href = '/#/business/searchOut';
      //window.event.returnValue=false
      this.$router.push({path: '/searchOut'})
      //this.statuss+=1;


    }
    /*async onSubmit(){
      console.log("good");
      let formData = new FormData();
      formData.append('goods_image', this.form.goods_image);

      var configs = {
        headers:{'Content-Type':'multipart/form-data'}
      }
      await this.axios.post('add_product/',formData, configs).then(response => {
        if(response.data.msg==="success"){
          this.image = 'http://127.0.0.1:8000/media/'+response.data.image
          console.log(response)
        }
      })
    }*/
  },
  computed: {
    cartList(){
      return this.$store.state.cartList;
    },
    show(){
      return true;
    }
  },
  async created(){
    await this.axios.get('userId2userName/',{params:{user_id: this.$store.state.userId}})
        .then((response) => {

            this.user = response.data.user_name
        })
        .catch(function (error) {
            console.log(error);
        });
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  line-height: 40px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffe4e1; /* Light pink background */
  padding: 10px;
  text-align: center;
  font-size: 24px;
  color: #ff69b4; /* Pink text color */
  font-weight: bold;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fff0f5; /* Light pink background */
}

.searchBox {
  margin: 20px auto;
  width: 40%;
  position: relative;
}

.searchInput {
  display: inline-block;
  width: 85%;
  height: 38px;
  border: 1px solid #ffb6c1; /* Light pink border */
  float: left;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
  color: #ff69b4; /* Pink text color */
}

.searchButton {
  display: inline-block;
  width: 15%;
  height: 38px;
  line-height: 38px;
  float: left;
  background-color: #ff69b4; /* Pink background */
  font-size: 16px;
  cursor: pointer;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: none;
  color: #fff; /* White text color */
  text-align: center;
}

.container {
  width: 80%;
  max-width: 1200px;
  margin: 50px auto;
  overflow: hidden;
  border: 1px solid #ffb6c1; /* Light pink border */
  border-radius: 10px;
  background-color: #fff; /* White background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.search_bar1 {
  background-color: #ff69b4; /* Pink background */
  height: 50px;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  margin: 20px auto;
  box-sizing: border-box;
  padding: 5px;
}

input {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #ffb6c1; /* Light pink border */
  border-radius: 3px;
  margin: 0;
  padding: 0 40px 0 10px;
  outline: none;
  font-size: 14px;
  color: #ff69b4; /* Pink text color */
  background-color: #fff; /* White background */
}

input::-webkit-input-placeholder {
  color: #ff69b4; /* Pink placeholder text color */
}
</style>
