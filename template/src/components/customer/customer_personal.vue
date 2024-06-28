<template>
  <v-container id="user-profile-view" fluid tag="section">
    <br><br><br><br>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <material-card color="pink" icon="mdi-account-outline">
          <template #title>
            修改个人信息
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field color="pink" label="公司" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="pink" label="用户名" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field color="pink" label="联系电话" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field color="pink" label="姓名" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field color="pink" label="邮箱" />
                </v-col>

                <v-col cols="12">
                  <v-text-field color="pink" label="默认地址" />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="pink" min-width="150">
                    更新个人信息
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import materialCard from "@/components/customer/MaterialCard";

export default {
  name: 'UserProfileView',
  components: {
    materialCard
  }
}
</script>

<style scoped>
#user-profile-view {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fff0f5; /* Light pink background */
}

material-card {
  background-color: #ffe4e1 !important; /* Light pink card background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border-radius: 10px; /* Rounded corners */
}

.v-text-field input {
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 4px;
}

.v-text-field .v-label {
  color: #ff69b4 !important; /* Pink label */
}

.v-btn {
  background-color: #ff69b4 !important; /* Pink button */
  color: #fff !important; /* White text */
  border-radius: 5px;
}

.v-btn:hover {
  background-color: #ff1493 !important; /* Darker pink on hover */
}
</style>
