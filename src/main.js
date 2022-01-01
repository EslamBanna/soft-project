import Vue from 'vue'
import App from './App.vue'
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Router from 'vue-router'
Vue.config.productionTip = false
Vue.use(Router);

var router = new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('./components/SliderPage.vue'),
    }
    ,
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/About.vue'),
    }
    ,
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('./components/ContactUs.vue'),
    }
    ,
    {
      path: '/login',
      name: 'log',
      component: () => import('./components/Login.vue'),
    }
    ,
    {
      path: '/add-employee',
      name: 'add',
      component: () => import('./components/registration.vue'),
    }
    ,
    {
      path: '/userData',
      name: 'user',
      component: () => import('./components/userDashboard.vue'),
    }
    ,
    {
      path: '/students-info',
      name: 'info',
      component: () => import('./components/diplomaData.vue'),
    },
    {
      //registration
      path: '/registration',
      name: 'registration',
      component: () => import('./components/registration.vue'),
    },
    {
      //loginOption
      path: '/loginOption',
      name: 'loginOption',
      component: () => import('./components/loginOption.vue'),
    },
    {
      //adminDashboard
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: () => import('./components/adminDashboard.vue'),
    },
    {
      //userDashboard
      path: '/userDashboard',
      name: 'userDashboard',
      component: () => import('./components/userDashboard.vue'),
    },
    {
      //userDashboard
      path: '/employeeDashboard',
      name: 'employeeDashboard',
      component: () => import('./components/employeeDashboard.vue'),
    },
    {
      //signup
      path: '/signup',
      name: 'signup',
      component: () => import('./components/signup.vue'),
    },
    {
      //Baclore
      path: '/Baclore',
      name: 'Baclore',
      component: () => import('./components/Baclore.vue'),
    }, 
    {
      //deplomainfo magsterInfo
      path: '/deplomainfo',
      name: 'deplomainfo',
      component: () => import('./components/deplomainfo.vue'),
    },
    {
      // magsterInfo
      path: '/magsterInfo',
      name: 'magsterInfo',
      component: () => import('./components/magsterInfo.vue'),
    },
    {
      // magsterInfo
      path: '/showOneStudent',
      name: 'showOneStudent',
      component: () => import('./components/showOneStudent.vue'),
    },
    {
      // magsterInfo
      path: '/showStudentResult',
      name: 'showStudentResult',
      component: () => import('./components/showStudentResult.vue'),
    },
    {
      // magsterInfo
      path: '/arshef',
      name: 'arshef',
      component: () => import('./components/arshef.vue'),
    },
    {
      // magsterInfo
      path: '/deleteStudent',
      name: 'deleteStudent',
      component: () => import('./components/deleteStudent.vue'),
    },
    {
      // magsterInfo
      path: '/updateStudentGetData',
      name: 'updateStudentGetData',
      component: () => import('./components/updateStudentGetData.vue'),
    },
    {
      // magsterInfo
      path: '/updateStudentSetData',
      name: 'updateStudentSetData',
      component: () => import('./components/updateStudentSetData.vue'),
    },
    {
      // magsterInfo
      path: '/signUpOption',
      name: 'signUpOption',
      component: () => import('./components/signUpOption.vue'),
    },
    {
      // magsterInfo
      path: '/signupEmployee',
      name: 'signupEmployee',
      component: () => import('./components/signupEmployee.vue'),
    },
    {
      // magsterInfo
      path: '/signupAdmin',
      name: 'signupAdmin',
      component: () => import('./components/signupAdmin.vue'),
    },
    //signupEmployee
    //updateStudentGetData

  ], mode: 'history'
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
