<script setup>
import { ref } from "vue";
import axios from "axios";

const num = ref(0);
const userid = ref(0);
const username = ref("");
const userac = ref("");
const userwd = ref("");
const userlist = ref([]);
const bb = ref("");
const cc = "hello";
function aa() {
  num.value++;
}
function bbb(e) {
  bb.value = e.target.value;
}
function ccc() {
  console.log(bb.value);
}
const getEmployee = () => {
  axios
    .post("http://localhost:3001/employee", {
      userid: userid.value,
    })
    .then((response) => {
      console.log(response.data);
      userlist.value = response.data;
    });
};
const deleteuserlist = () => {
  userlist.value =[];
};
const createuser = () => {
  axios
    .post("http://localhost:3001/create", {
      username: username.value,
      userac: userac.value,
      userwd: userwd.value,
    })
    .then((response) => {
      console.log(response.data);
      alert("成功");
    });
};
</script>
<template>
  <div>
    <h1>hello world</h1>
    {{ num }}{{ cc }}
    <button @click="aa">++</button>
    <input type="text" v-model="bb" />
    <button @click="ccc">送出</button>
    <div class="row d-flex">
      <div class="col d-flex flex-column c">
        輸入會員姓名<input type="text" v-model="username" class="input"/>
        輸入會員帳號<input type="text" v-model="userac" class="input"/>
        輸入會員密碼<input type="text" v-model="userwd" class="input"/>
      </div>
      <div class="col d">456</div>
    </div>
    輸入會員編號<input type="text" v-model="userid" />
    <button @click="getEmployee">取得會員資料</button>
    <button @click="createuser">註冊</button>
    <button @click="deleteuserlist">清除</button>
    <div v-for="val in userlist" :key="val">
        會員ID:{{val.id}} <br/>
        會員名稱:{{val.username}}<br/>
        會員帳號:{{val.userac}}<br/>
        會員密碼:{{val.userwd}}
    </div>
  </div>
</template>
<style scoped>
.c {
  border: 1px solid red;
  background-color: #aaaaaa;
  width: 200px;
  padding: 10px;
}
.d {
  border: 1px solid blue;
  width: 200px;
}
.input{
    width: 200px;
}
</style>
