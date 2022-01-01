<template>
<div class="bod">
  <div class="container">
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6">
        <router-link
          :to="path"
          v-on:click.native="mainn('user')"
          class="btn btn-dark"
          >عضو</router-link
        >
      </div>
      <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6">
        <router-link
          v-on:click.native="mainn('admin')"
          :to="path"
          class="btn btn-dark"
          >أدمن</router-link
        >
      </div>

  <div class="col-xl-3 col-lg-3 col-sm-6 col-xs-6">
        <router-link
          v-on:click.native="mainn('employee')"
          :to="path"
          class="btn btn-dark"
          >موظف</router-link
        >
      </div>

    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "loginOption",
  data(){
    return{
      path: ""
    }
  },
  methods: {
    mainn(x) {
if(x == 'user'){
              this.path = "/signup";
      }else if(x == 'employee'){
              this.path = "/signupEmployee";
      }else if(x == 'admin'){
              this.path = "/signupAdmin";

      }
      // this.path = "/login"
      this.$parent.authr = x;
      console.log("parent is "+this.$parent.authr);
    },
  }
};
</script>
<style scoped>
.bod{
  background-color: #003566;
}
.container {
  height: 500px;
  padding-top: 200px;
  padding-left: 200px;
}
.navbar-brand {
  height: 60px;
}
.navbar-brand > img {
  height: 100%;
}
.bg-dark {
  background-color: #1d3557 !important;
}
.nav-item .nav-link {
  color: #fff !important;
}
.btn-dark {
  margin-bottom: 50px;
  padding: 10px 50px;
  font-weight: bold;
}
</style>
