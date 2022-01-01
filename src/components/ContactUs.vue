<template>
    <div>
        <div>
            <h1 style="  margin: 0px; color: white; font-family:fantasy; font-size: 70px;">Contact Us</h1>
        </div>
        <div>
            <form action="action_page.php" method="post">
            <div class="container">
                <label for="uname"><b>Email</b></label>
                <input type="text" placeholder="Enter Your Email" name="uname" v-model="input3.e_mail" required>

                <label for="psw"><b>Message</b></label>
                <input style="width:100%; height: 150px; " type="text" placeholder="Enter your Message" name="psw" v-model="input3.message" required>

                <button type="submit">Send</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container">
                <button type="button" class="cancelbtn">Cancel</button>
                <span style="padding: 0px;"  class="psw">Forgot <a style="color: white;" href="#">password?</a></span>
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
export default ({
    name: 'contact',
    data(){
        return{
            input3:{
                e_mail : "",
                message : ""
            },
        };
    },
    methods:{

    },
    mounted(){

    },
})



// Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
</script>


<style scoped>
body{
   padding: 0px 0px;
    margin: 0px 0px;
    width: 100%;
}
* {
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
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
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
  background-color: #04AA6D;
}

/* .footer {
    padding: 0px;
    margin: 0px;
    border: 2px solid white;
} */
 p {
    text-align:right;  
    font-family: 'Allura','sans-serif';
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
.container input {
    color: white;
}
/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
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
}</style>