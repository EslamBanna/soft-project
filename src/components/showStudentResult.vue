<template>
  <div id="dashboard">
    <div class="content">
      <div class="container">
        <div class="information row">
          <div class="info col-sm-12 col-md-10 col-lg-10">
            <span>الاسم: {{input.username}}</span> 

            <span>الديانة: {{input.Religion}}</span>
            <span>رقم البطاقة: {{input.cardNumber}}</span>
            <span>اسم الوالد: {{input.parentName}}</span>
            <span>جهة اصداراها: {{input.cardOutFrom}}</span>
            <span>تاريخ الميلاد: {{input.birthday}}</span>
            <span>عن: {{input.about}}</span>
            <span>القرية: {{input.village}}</span>
            <span>موقف التجنيد: {{input.positionRecruitment}}</span>
            <span>المركز: {{input.country}}</span>
            <span>العنوان: {{input.address}}</span>
            <span>محافظة: {{input.governorate}}</span>
            <span>رقم التليفون: {{input.phone}}</span>
            <span>الجنسية: {{input.nationality}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import "./css/task5.css";
export default {
  name: "dashboard",
  data(){
    return{
      input:{
      username:"اسلام احمد احمد البنا",
      parentName: "احمد احمد البنا",
      about: "CS",
      country: "طنطا",
      phone: "01210732005",
      Religion: "مسلم",
      cardNumber :"30001156554535315",
      cardOutFrom: "الغربية",
      village: "ميت حبيش البحرية",
      address: "طنطا الغربية",
      nationality: "مصري",
      birthday: "25-01-2000",
      positionRecruitment: "منتهي",
      governorate: "الغربية"
    }
    
    }
  },
  mounted(){

  }
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
    padding-top: 50px;
    padding-bottom: 100px;
    height: 100vh;
    background-size: 100% 100%;
}
.content .information{
    display: flex;
    direction: rtl;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
}
.content .information .img{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
}
.content .information .img>div{
    position: relative;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 2px solid #fff;
}
.content .information .img>div img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.content .information .info{
    border: 1px solid #fff;
    direction: rtl;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    text-align: right;
    
}
@media (max-width:400px){
    .content .information .info{
        grid-template-columns: repeat(1,auto);
    }
}
@media (min-width:400px)and (max-width:992px){
    .content .information .info{
        grid-template-columns: repeat(2,auto);
    }
}
.content .information .info span{
    color: #fff;
}
.content .controls{
    padding: 30px 30px 60px 30px;
    border: 1px solid #ddd;
}
.content .controls>div{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    direction: rtl;
    
}
.content .controls>div button{
    padding: 0px 30px;
    width: 220px;
    margin-left: 30px;
    margin-bottom: 30px;
    background-color: seagreen;
    border: 0;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
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