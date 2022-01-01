<template>
  <div id="employee">
    <div class="page">
     <div class="container">
<form>
    <label >
        ادخل الرقم القومي
    </label>
<input type="text" id="nationalNumber" name="nationalNumber" placeholder="National Number" />

       <div class="button">
                <router-link
                  class="btn btn-danger"
                  v-on:click.native="submit()"
                  to="/showStudentResult"
                  >ابحث</router-link
                >
              </div>

</form>
     </div>
    </div>
  </div>
</template>
<script>
//import "./css/styleprofile.css";
export default {
  name: "employee",
    methods: {
    submit() {
    //todo
    },
  },
};
</script>
<style scoped>
.page {
  margin-top: -10px;
  background-color: #003566;
  font-family: roboto;
  height: 800px;
  color:  white;
}

.container {
  width: 95%;
  margin: 20px auto 120px;
  margin-top: 10px;
  background-color: rgba(185, 212, 253, 0.904);
  padding: 5px 20px 20px;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.075);
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.075);
  text-align: center;
}
.container:hover .avatar-flip {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
}
.container:hover .avatar-flip img:first-child {
  opacity: 0;
}
.container:hover .avatar-flip img:last-child {
  opacity: 1;
}
.avatar-flip {
  border-radius: 100px;
  overflow: hidden;
  height: 150px;
  width: 150px;
  margin: auto;
  top: -60px;
  right: 10px;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  box-shadow: 0 0 0 13px #f0f0f0;
  -webkit-box-shadow: 0 0 0 13px #f0f0f0;
  -moz-box-shadow: 0 0 0 13px #f0f0f0;
  float: right;
}
.avatar-flip img {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100px;
  transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
}
.avatar-flip img:first-child {
  z-index: 1;
}
.avatar-flip img:last-child {
  z-index: 0;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  opacity: 0;
}
h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 15px;
  color: rgb(248, 104, 123);
}
label {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
  color: white;
}
p {
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 20px;
  color: rgb(255, 254, 254);
}
.b1:hover {
  background-color: #e7e7e7;
}
.b2:hover {
  background-color: #e7e7e7;
}
.b3:hover {
  background-color: #e7e7e7;
}
.b4:hover {
  background-color: #e7e7e7;
}
.b5:hover {
  background-color: #e7e7e7;
}
.b6:hover {
  background-color: #e7e7e7;
}
.b7:hover {
  background-color: #e7e7e7;
}
button {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5%;
  cursor: pointer;
  font-family: "Amiri";
  transition-duration: 0.4s;
}

.btns {
  display: block;
  width: 60%;
  align-items: center;
  background-color: rgba(236, 155, 155, 0.164);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  width: 60%;

  padding: 10px;
}

.container.info {
  text-align: right;
}

</style>
