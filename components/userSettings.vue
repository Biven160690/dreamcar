<!-- Редактировать данные пользователя-->

<template>
  <div class="content" id="app" data-app>
    <div class="form">
      <h1>EDIT USER INFORMATION</h1>
      <p>
        Please note that if you made a bet with old data and then changed it, we
        will receive update data. However, according to your company's policy,
        if we are unable to contact you when you win the auction, you will
        receive a point. Upon reaching 3 points, you will be blocked on this.
      </p>
      <p v-if="exists" class="user__exists">
        User with this email already exists
      </p>
      <form>
        <v-text-field
          v-model="getLoggedUser.name"
          label="Name"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="getLoggedUser.email"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="getLoggedUser.company"
          label="Company"
          required
        ></v-text-field>
        <v-text-field
          v-model="getLoggedUser.phone"
          label="Corp.number"
          required
        ></v-text-field>
        <div class="button">
          <v-btn @click="clear"> cancel </v-btn>
          <v-btn class="mr-4" @click="submit">
            save
          </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { mapGetters, mapMutations } from "vuex";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
export default {
    /*
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    email: { required, email },
    company: { required, maxLength: maxLength(30) },
    phone: { required, maxLength: maxLength(30) },
  },*/
  data: () => ({
    //id: "",
    //name: "",
    //email: "",
    //company: "",
    //phone: "",
    exists: false,
  }),
  computed: {
    //...mapMutations(["pushUser", "pushLoggedUser", "updateLoggedUser"]),
    ...mapGetters(["isUserLogged", "getLoggedUser"]),   
  },
  
  methods: {
    ...mapMutations(["updateLoggedUser"]),
     submit() {
      var user = {
        id: this.getLoggedUser.id,
        name: this.getLoggedUser.name,
        email: this.getLoggedUser.email,
        company: this.getLoggedUser.company,
        phone: this.getLoggedUser.phone,
      };
      this.updateLoggedUser(user);
      this.$router.push("lots");
    },
    clear() {
      //this.$v.$reset();
      this.getLoggedUser.name = "";
      this.getLoggedUser.email = "";
      this.getLoggedUser.company = "";
      this.getLoggedUser.phone = "";
    },
  },
};
</script>

<style scoped>
.content {
  width: 45%;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
  float: left;
  margin: 0% 0% 0% 5%;
}
.content h1 {
  margin-top: 50px;
  text-align: center;
  padding: 0% 0% 5% 0%;
}
.form {
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5% 0 5%;
  text-align: justify;
  margin-top: 50px;
}
form {
  margin-bottom: 50px;
  margin-top: 50px;
}
.button {
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.link {
  text-decoration: none;
  color: #85c9ef;
  border-bottom: 2px solid #85c9ef;
}
.user__exists {
  color: #f96c6c;
  margin-top: 10px;
}
</style>