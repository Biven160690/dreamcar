<!-- Изменить пароль пользователя-->

<template>
  <div class="content">
    <div class="form">
      <h1>CHANGE PASSWORD</h1>
        <form>
        <v-text-field
          v-model="passw"
          :type="'passw'"
          label="Old password"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :type="'password'"
          label="New password"
          required
        ></v-text-field>
        <v-text-field
          v-model="repeatPassword"
          :type="'repeatPassword'"
          label="Repeat new password"
          required
        ></v-text-field>
        <div class="button">
        <v-btn @click="clear">
          clear
        </v-btn>
        <v-btn class="mr-4"  @click="submit">
          submit
        </v-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { required, sameAs, minLength } from 'vuelidate/lib/validators';
export default {
   data: () => ({
    return: {
      password: '',
      repeatPassword: ''
    }
  }),
  validations: {
    password: {
      required,
      minLength: minLength(5),
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
  },
  computed: {
//      passwErrors() {
//      const errors = [];
//      if (!this.$v.password.$dirty) return errors;
//      !this.$v.password.maxLength &&
//        errors.push("Password must be at most 10 characters long");
//      !this.$v.password.minLength &&
//        errors.push("Password must be at least 5 characters long");
//      !this.$v.password.required && errors.push("Password is required.");
//      return errors;
//    }
 },
  methods: {
    ...mapMutations(["pushLoggedUser"]),
    ...mapGetters(["getLoggedUser"]),
    submit() {
     // var users = this.getLoggedUser();
    //  var isExists = {};
    //  isExists = users.find {
    //    user => user.password === this.password;
    //    this.updateLoggedUser(isExists);
    },
    clear() {
      this.$v.$reset();
      this.passw = "";
      this.password = "";
      this.repeatPassword = "";
    }
  }
};
</script>

<style scoped>
.content {
  width: 37%;
  justify-content: center;
  margin-top: 50px;
  float:right;
  margin: 0% 5% 0% 0%;
}
.content h1 {
  margin-top: 50px;
}
.form {
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  padding: 0 5% 0 5%;
}
form {
  margin-bottom: 50px;
  margin-top: 50px;
}
.link {
  text-decoration: none;
  color: #85c9ef;
  border-bottom: 2px solid #85c9ef;
}
.button {
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>