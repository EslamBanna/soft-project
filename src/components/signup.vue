<template>
  <div id="signup">
    <div class="container" >
<div class="row">
    <div class="col-xl-4 col-lg-4 col-sm-6 col-xs-6">
        <router-link  v-on:click.native="grade(0)" :to="paths" class="btn btn-dark">تسجيل دبلومة</router-link>
    </div>
    <div class="col-xl-4 col-lg-4 col-sm-6 col-xs-6">
        <router-link  v-on:click.native="grade(1)" :to="paths" class="btn btn-dark">تسجيل ماجستير</router-link>
    </div>
    <div class="col-xl-4 col-lg-4 col-sm-6 col-xs-6">
        <router-link  v-on:click.native="grade(2)" :to="paths" class="btn btn-dark"> تسجيل دكتوراة</router-link>
    </div>
</div>

</div>
  </div>
</template>
<script>
//import "./css/task5.css";
export default {
  name: "signup",
  data(){
      return{
      paths:""
      };
  },
  methods:{
      grade(x){
          this.$parent.grades = x;
          this.paths = "/registration"; 
          console.log(this.$parent.grades);
      }
  },
  mounted(){
      //todo
  }
};
</script>
<style scoped>
#signup{
     background-color: #003566;
}
.container{
    width: 100%;
    height: 500px;
    padding-top: 200px;
    padding-left: 100px;
}
.navbar-brand{
    height: 60px;
}
.navbar-brand>img{
    height: 100%;
}
.bg-dark{
    background-color: #1d3557 !important;
    font-weight: bold;
}
.nav-item .nav-link{
    color: #fff !important;
}
button{
    margin-bottom: 50px;
}
</style>
