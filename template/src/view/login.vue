<template>
  <div class="main-container">
    <router-link to="/business" class="link">商家</router-link>
    <router-link to="/customer/login/login" class="link">顾客</router-link>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link {
  color: #ff69b4;
  font-size: 18px;
  margin: 10px;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #ff69b4;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.link:hover {
  background-color: #ff69b4;
  color: white;
}
</style>
