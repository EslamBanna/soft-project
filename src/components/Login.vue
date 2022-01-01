<template>
  <div>
    <div class="center">
      <table>
        <tr>
          <td style="width: 33.33%;">
            <div class="dash"></div>
          </td>
          <td style="padding: 0 6px;">
            <h1>Login</h1>
          </td>
          <td style="width: 33.33%;">
            <div class="dash"></div>
          </td>
        </tr>

        <tr>
          <td colspan="3">
            <div>
              <input
                type="text"
                placeholder="الرقم القومي "
                v-model="input2.idNumber"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div>
              <input
                placeholder="رقم التليفون"
                type="text"
                v-model="input2.phone"
              />
            </div>
          </td>
        </tr>

        <tr>
          <td colspan="3">
            <div class="col-xl-4 col-lg-4 col-sm-6 col-xs-6">
              <router-link :to="input2.pass" class="btn btn-dark submt"
                >الدخول</router-link
              >
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
export default {
  name: "log",
  data() {
    return {
      input2: {
        idNumber: "",
        phone: "",
        pass: "",
      },
    };
  },
  methods: {},
  mounted() {
    // admin
    this.input2.pass = this.$parent.authr;
  },
};
</script>

<style scoped>
.center {
  background-color: #003566;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  padding-top: 100px;
  width: 100%;
}
table {
  width: 50%;
  margin: 0 auto;
  padding: 2%;

  border-radius: 4px;
  background-color: #f2f3f738;
  min-width: 360px;
  max-width: 420px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #58677b;
  border-radius: 10px;
}
input[type="text"],
.submt {
  width: 100%;
  height: 40px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  color: #4fa64e;
}
input:hover {
  border-color: #4fa64e;
}
.submt {
  background-color: #53ac53;
  background: linear-gradient(to bottom, #58b358 0%, #449944 100%);
  color: #ffffff;
  font-weight: 600;
  border: none;
  margin-left: 120%;
}
.submt:hover {
  cursor: pointer;
}
::placeholder {
  color: #969fa4;
}
p {
  text-align: center;
  font-size: 14px;
  color: #969fa4;
  margin: 12px 0;
}

div {
  margin: 10px 0;
}
a {
  color: #4fa64e;
  text-decoration: none;
}

.dash {
  min-height: 2px;
  height: 2px;
  max-height: 2px;
  width: 100%;
  background-color: #cacaca;
}
h1 {
  text-align: center;
  font-weight: 500;
  color: rgb(255, 255, 255);
  text-align: 31px;
}
</style>
