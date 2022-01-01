<template>
<div id="nav">
              <nav class="navbar navbar-expand-lg bg-dark navbar-dark static-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" alt="hhh">
            </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/about" class="nav-link" >About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact-us" class="nav-link" >Contact Us</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/loginOption" class="nav-link" >Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/signUpOption" class="nav-link" >Sign up</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>
</template>
<script>
import '../components/css/task2.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default{
   name: 'navbar'
}
</script>
<style scoped>

</style>
