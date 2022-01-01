<template>
  <div>
    <div>
      <h1
        style="  margin: 0px; color: white; font-family:fantasy; font-size: 70px;"
      >
        {{ this.kind }}
      </h1>
    </div>
    <div>
      <form action="action_page.php" method="post">
        <div class="container">
          <h3>برجاء ملئ البيانات بناءً علي درجة البكالوريوس</h3>
          <label for="uname"><b>في</b></label>
          <input type="text" placeholder="مطلوب" name="type" required />

          <label for="uname"><b>الدور</b></label>
          <input type="text" placeholder="مطلوب" name="uname" required />

          <label for="psw"><b>التقدير العام</b></label>
          <input type="text" placeholder="مطلوب" name="psw" required />

          <label for="psw"><b>شعبة</b></label>
          <input type="text" placeholder="مطلوب" name="psw" required />

          <label for="psw"><b>تقدير التخصص</b></label>
          <input type="text" placeholder="مطلوب" name="psw" required />

          <label for="psw"><b>من كلية</b></label>
          <input type="text" placeholder="مطلوب" name="psw" required />

          <label for="psw"><b>جامعة</b></label>
          <input type="text" placeholder="مطلوب" name="psw" required />
          <br />
          <br />
          <router-link class="butto" v-on:click.native="submit()" :to="pass"
            >Send</router-link>
            <router-link class="butto" id="show" to="/deplomainfo"
            >حاصل عل دبلومة</router-link>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
        <div class="container">
          <button type="button" class="cancelbtn">Cancel</button>
          <span style="padding: 0px;" class="psw"
            >Forgot
            <a style="color: white;" href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
    <!-- <div class="footer" >
                <p style="text-align: center">copyRight &copy; All Rights Reseved To FCI Software Project Team 2021</p>
            </div> -->
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "baclore",
  data() {
    return {
      kind: "",
      pass: "",
    };
  },
  mounted() {
    if (this.$parent.grades == 0) {
      this.kind = "تقديم الدبلومة";
    } else if (this.$parent.grades == 1) {
      this.kind = "تقديم الماجستير";
      document.getElementById('show').style.display = "inline";
    } else if (this.$parent.grades == 2) {
      this.kind = "تقديم الدكتوراه";
    }
  },
  methods: {
    submit() {
      if (this.$parent.grades == 0 || this.$parent.grades == 1) {
          this.pass = "/userDashboard";
      } else if (this.$parent.grades == 2) {
          this.pass = "/magsterInfo";
      }
    },
  },
};
</script>

<style scoped>
body {
  padding: 0px 0px;
  margin: 0px 0px;
  width: 100%;
}
* {
  background-color: #003566;
}

/* Change the color of links on hover */

.image img {
  width: 200px;
  height: 200px;
  background-color: #003566;
}
h1 {
  text-align: center;
  border: 2px solid white;
}
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
.butto,
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 100px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
}
.butto {
  margin-left: 20px;
}
.butto:nth-of-type(1){
    margin-left: 300px;
}
.butto:nth-of-type(2){
    display: none;
}
label {
  color: white;
}
span.psw {
  color: white;
}
/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (green) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #04aa6d;
}

.footer {
  padding: 0px;
  margin: 0px;
  border: 2px solid white;
}
p {
  text-align: right;
  font-family: "Allura", "sans-serif";
  font-style: italic;
  font-size: 30px;
  margin-top: 0px;
  font-weight: bold;
  color: white;
}
/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}
.container h3 {
  text-align: center;
  color: white;
}
.container input {
  color: white;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
