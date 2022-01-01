<template>
  <div id="registration">
    <div class="content">
      <div class="container">
        <div class="main-content">
          <form>
            <div>
              <div>
                <select name="depart" id="depart" v-model="input.religion">
                  <option value="muslim">مسلم</option>
                  <option value="christian">مسيحي</option>
                </select>
                <label>الديانه</label>
              </div>
              <div>
                <input type="text" v-model="input.username" />
                <label>الاسم</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.cardNumber" />
                <label>رقم البطاقة</label>
              </div>
              <div>
                <input type="text" v-model="input.parentName" />
                <label>اسم الوالد</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.cardOutFrom" />
                <label>جهة وتاريخ الاصدار</label>
              </div>
              <div>
                <input type="datetime-local" v-model="input.birthday" />
                <label>تاريخ الميلاد</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.cardData" />
                <label>تاريخ اصدار البطاقة</label>
              </div>
              <div>
                <input type="text" v-model="input.village" />
                <label>محل الميلاد القرية</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.positionRecruitment" />
                <label>موقف التجنيد</label>
              </div>
              <div>
                <input type="text" v-model="input.country" />
                <label>مركز</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.address" />
                <label>العنوان</label>
              </div>
              <div>
                <input type="text" v-model="input.governorate" />
                <label>محافظة</label>
              </div>
            </div>
            <div>
              <div>
                <input type="text" v-model="input.phone" />
                <label>رقم التليفون</label>
              </div>
              <div>
                <input type="text" v-model="input.nationality" />
                <label>الجنسية</label>
              </div>
            </div>
            <div class="button">
              <router-link class="butto" v-on:click.native="submit()" to="/adminDashboard"
                >حفظ التعديلات</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import "./css/task2.css";
export default {
  name: "registration",
  data() {
    return {
      pass: "",
      input: {
        religion: "",
        username: "",
        parentName: "",
        cardOutFrom: "",
        birthday: "",
        cardData: "",
        village: "",
        positionRecruitment: "",
        country: "",
        address: "",
        governorate: "",
        phone: "",
        nationality: "",
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
        this.pass = "/Baclore";
    },
  },
};
</script>
<style scoped>
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
.content {
  background-color: #003566;
  padding-top: 70px;
}
.main-content form > div {
  direction: rtl;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  margin-bottom: 30px;
}
.main-content form > div > div {
  direction: rtl;
  display: flex;
  flex-wrap: wrap-reverse;
}
.main-content form > div > div input,
.main-content form > div > div select {
  width: 220px;
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  margin-left: 20px;
}
.main-content form > div > div label {
  color: #fff;
  width: 140px;
  text-align: right;
}
.main-content form > .button {
  display: flex;
  justify-content: center;
  margin: 0px;
}
.main-content form > .button .butto {
  width: 120px;
  outline: none;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  padding-left: 40px;
  padding-top: 10px;
  font-weight: bold;
}
.footer p {
  background-color: #1d3557;
  color: #fff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
