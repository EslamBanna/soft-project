<template>
  <div id="deploma">
    <div class="content">
      <div class="header">
        <h6>الدرجات العلمية الحاصل عليها في الدبلومة</h6>
      </div>
      <div class="container">
        <div class="main-content">
          <form>
            <div>
              <div>
                <input type="text" v-model="input.about" />
                <label>في</label>
              </div>
              <div>
                <select name="door" id="door" v-model="input.door">
                  <option value="first">اول</option>
                  <option value="second">تاني</option>
                </select>
                <label>دور</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.college" />
                <label>من كلية</label>
              </div>
              <div>
                <select name="depart" id="depart" v-model="input.depart">
                  <option value="cs">CS</option>
                  <option value="is">IS</option>
                  <option value="it">IT</option>
                  <option value="or">OR</option>
                </select>
                <label>التخصص</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.university" />
                <label>جامعة</label>
              </div>
              <div>
                <input type="text" v-model="input.appreciated" />
                <label>بتقدير</label>
              </div>
            </div>
            <router-link class="butto" v-on:click.native="submit()" to="/userDashboard"
            >Send</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./css/task4.css";
export default {
  name: "deploma",
  data() {
    return {
      input: {
        about: "",
        door: "",
        college: "",
        university: "",
        depart: "",
        appreciated: "",
      },
    };
  },
  mounted() {
    //mounted
    //
    //
  },
  methods: {
    submit() {
      //example
      alert("ok");
    },
  },
};
</script>
<style scoped>
.navbar-brand{
    height: 60px;
}
.navbar-brand>img{
    height: 100%;
}
.bg-dark{
    background-color: #1d3557 !important;
}
.nav-item .nav-link{
    color: #fff !important;
}
.content{
    background-color: #003566;
    padding-top: 70px;
}
.content .header{
    direction: rtl;
    text-align: center;
    color: #fff;
    margin-bottom: 100px;
}
.main-content form>div{
    direction: rtl;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    margin-bottom: 40px;
}
.main-content form>div>div{
    direction: rtl;
    display: flex;
    flex-wrap: wrap-reverse;  
}
.main-content form>div>div input{
    width: 220px;
    background-color: #fff;
    border-radius: 5px;
    outline: none;
}
.main-content form>div>div label{
    color: #fff;
    width: 140px;
    text-align: right;
}
.main-content form> .button{
    display: flex;
    justify-content: center;
    margin:0px;
}
.main-content form> .butto{
    width: 120px;
    height: 50px;
    background-color: rgb(14, 128, 57);
    color: white;
    padding: 10px 50px;
    margin-left: 500px;
}  
.footer p{
    background-color: #1d3557;
    color: #fff;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
</style>
