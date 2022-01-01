<template>
  <div class="reservations">
    <!-- <Nav /> -->
    <div class="container">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">م</th>
            <th scope="col">الاسم</th>
            <th scope="col">المؤهل الدراسي</th>
            <th scope="col">جهة التخرج</th>
            <th scope="col">سنة التخرج</th>
            <th scope="col">التقدير العام</th>
            <th scope="col">الوظيفة الحالية</th>
            <th scope="col">الموقف من التجنيد</th>
            <th scope="col">تاريخ الميلاد</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in customerReservations" v-bind:key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.qualification }}</td>
            <td>{{ item.directionOfGraduation }}</td>
            <td>{{ item.graduationYear }}</td>
            <td>{{ item.generalEvaluation }}</td>
            <td>{{ item.currentJob }}</td>
            <td>{{ item.stateOfRecruiting }}</td>
            <td>{{ item.dob }}</td>
            <td></td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reservations",
  components: {},
  data() {
    return {
      customerReservations: [
        {
          id: 1,
          name: "عمر",
          qualification: "ماجستير",
          directionOfGraduation: "جامعة المنوفية",
          graduationYear: "25-1-2019",
          generalEvaluation: "امتياز",
          currentJob: "Full Stack Developer",
          stateOfRecruiting: "غير مطلوب للتجنيد",
          dob: "14-6-1997",
          //  dob = date of birth
        },
        {
          id: 2,
          name: "محمد",
          qualification: "دبلومة",
          directionOfGraduation: "جامعة المنوفية",
          graduationYear: "25-1-2020",
          generalEvaluation: "جيد جدا",
          currentJob: "Freelancer",
          stateOfRecruiting: "غير مطلوب للتجنيد",
          dob: "25-1-2000",
        },
        {
          id: 3,
          name: "نورهان",
          qualification: "دكتوراه",
          directionOfGraduation: "جامعة المنوفية",
          graduationYear: "25-1-2015",
          generalEvaluation: "امتياز",
          currentJob: "Freelancer",
          stateOfRecruiting: "-",
          dob: "2-5-1995",
        },
        {
          id: 4,
          name: "نسرين",
          qualification: "بكالوريوس",
          directionOfGraduation: "جامعة المنوفية",
          graduationYear: "25-1-2021",
          generalEvaluation: "امتياز",
          currentJob: "Don't work",
          stateOfRecruiting: "-",
          dob: "23-8-1999",
        },
      ],
    };
  },
  methods: {
    submit(x) {
      alert(x);
    },
  },
};
</script>
<style scoped>
.reservations {
  width: 100%;
  height: 80vh;
  background-color: #003566;
  background-size: 100% 100%;
}
table {
  position: absolute;
  top: 10%;
  width: 70%;
}
</style>
