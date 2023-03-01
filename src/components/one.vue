<script setup>
import { ref,onMounted } from "vue";
import axios from "axios";
import VueCookies from 'vue-cookies';
import { useRouter ,RouterLink} from 'vue-router';
import img1 from '../assets/計畫通.jpg';
import img2 from '../assets/images (1).jpg';
import add from './add.vue';
import transfer from './transferData.vue';
const num = ref(0);
const userid = ref(0);
const username = ref("");
const userac = ref("");
const userwd = ref("");
const userlist = ref([]);
const userlistall = ref([]);
const userlistjumpdiv = ref([]);
const bb = ref("");
const jumpdivtf = ref(false);
const cc = "hello";
// 頁面跳轉
const router = useRouter()
const toTest2= (() => {
    router.push("./two")
  })
const togetimg= (() => {
    router.push("./getimg")
  })
const tonaiveUI= (() => {
    router.push("./tonaiveUI")
  })
  // onMounted網頁開啟時會先執行
onMounted(()=>{
  console.log('OK')
})
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
const getAllEmployee = () => {
  axios
    .post("http://localhost:3001/getAllEmployee")
    .then((response) => {
      console.log(response.data);
      userlistall.value = response.data;
    });
};
const getclickid = (e) => {
  // console.log(e);
  jumpdivtf.value=!jumpdivtf.value;
  console.log(jumpdivtf.value);
  axios
    .post("http://localhost:3001/employee", {
      userid: e,
    })
    .then((response) => {
      console.log(response.data);
      userlistjumpdiv.value = response.data;
    });
};
const deleteuserlist = () => {
  userlist.value =[];
};
const bbc = () => {
  jumpdivtf.value=!jumpdivtf.value;
};
const createuser = () => {
  if(username.value==""||userac.value==""||userwd.value==""){
    alert('輸入錯誤');
  }else{
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

  }
};
const cookievalue = ref('');
const createcookie =()=>{
  VueCookies.config('1m');
  VueCookies.set('aa',123);
}
const getcookie =()=>{
  cookievalue.value =VueCookies.get('aa');
  console.log(cookievalue.value );
}
const addnum = ref(0);
const addcallback =(res)=>{
  addnum.value=res;
  console.log(res);
}
// 單向資料流
const data = ref('單向資料流');
const changedata =(data2)=>{
  data.value = data2;
}
</script>
<template>
  <div>
    <h1 :style="{'color':(num===10?'red':'blue')}">hello world</h1>
    {{ num }}{{ cc }}
    <button @click="aa">++</button>
    <input type="text" v-model.trim="bb" />
    <button @click="ccc">送出</button>{{bb}}
    <div class="row d-flex">
      <div class="col d-flex flex-column c">
        輸入會員姓名<input type="text" v-model="username" class="input"/>
        輸入會員帳號<input type="text" v-model="userac" class="input"/>
        輸入會員密碼<input type="text" v-model="userwd" class="input"/>
        <button :style="{'margin-top':'10px','color':'blue'}" @click="createuser">註冊</button>
      </div>
      <div class="col d">456</div>
    </div>
    輸入會員編號<input type="text" v-model="userid" />
    <button @click="getEmployee">取得會員資料</button>
    <button @click="getAllEmployee">取得全部會員資料</button>
    <button @click="deleteuserlist">清除</button>
    <button @click="createcookie">建立cookie</button>
    <button @click="getcookie">取得cookie</button>
    <div>{{cookievalue}}</div>
    <!-- 顯示單個會員資料 -->
    <div v-for="val in userlist" :key="val">
        會員ID:{{val.id}} <br/>
        會員名稱:{{val.username}}<br/>
        會員帳號:{{val.userac}}<br/>
        會員密碼:{{val.userwd}}
    </div>
    <!-- 顯示所有會員列表 -->
    <div v-for="val in userlistall" :key="val" >
      <button class="backcolor" @click="getclickid(val.id)">會員ID:{{val.id}}</button>
    </div>
    <!-- 點擊單個會員彈窗 -->
    <div class="jumpdiv" :style="{'display':(jumpdivtf?'block':'none')}" v-for="val in userlistjumpdiv" :key="val">
        <div class="jumpdiv2">
          <button @click="bbc">X</button><br/>
          會員ID:{{val.id}} <br/>
          會員姓名:{{val.username}}<br/>
          會員帳號:{{val.userac}}<br/>
          會員密碼:{{val.userwd}}
        </div>
    </div>
    <button @click="toTest2">跳轉two</button>
    <button @click="togetimg">獲取圖片練習</button>
    <routerLink to="/aa">使用routerLink標籤跳轉A</routerLink>
    <routerLink to="/bb">使用routerLink標籤跳轉B</routerLink>
    <button @click="tonaiveUI">跳轉naiveUI</button>
    <routerLink to="/bb">routerlink to bb</routerLink>
    <add
    @num="addcallback"
    />
    {{addnum}}
    <div class="d-flex">
      <card
        :src="img1"
      />
      <card
        :src="img2"
      />
    </div>
    <h1>單向資料流</h1>
    <transfer
      :username="data"
      :changename="changedata"
    />
    {{data}}
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
.backcolor{
  box-sizing: border-box;
  border: 1px solid black;
  width: 200px;
  background-color: #aaaaaa;
}
.jumpdiv{
  position: absolute;
    z-index: 999;
    background-color: rgba(0, 0, 0,0.5);
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    align-items: center;
}
.jumpdiv2{
  width: 300px;
  height: 300px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top:200px

}
</style>
