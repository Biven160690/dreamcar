<!-- Данные пользователя-->


<template>
  <div class="content">
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
          v-model="name"
          :error-messages="nameErrors"
          :counter="30"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        >
        </v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="company"
          :error-messages="companyErrors"
          :counter="30"
          label="Company"
          required
          @input="$v.company.$touch()"
          @blur="$v.company.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :error-messages="telErrors"
          :counter="30"
          label="Corp.number"
          required
          @input="$v.tel.$touch()"
          @blur="$v.tel.$touch()"
        ></v-text-field>
        <div class="button">
          <v-btn @click="clear"> cancel </v-btn>
          <v-btn class="mr-4" :disabled="this.$v.$invalid" @click="submit">
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
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    email: { required, email },
    company: { required, maxLength: maxLength(30) },
    phone: { required, maxLength: maxLength(30) },
  },

  data: () => ({
    id: "",
    name: "",
    email: "",
    company: "",
    phone: "",
    exists: false,
  }),

  computed: {
    isLogged() {
      return this.isUserLogged();
    },
    loggedUser() {
      var loggedUser = this.getLoggedUser();
      console.log(loggedUser);
      this.id = loggedUser.id;
      this.name = loggedUser.name;
      this.email = loggedUser.email;
      this.company = loggedUser.company.name;
      this.phone = loggedUser.phone;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.minLength &&
        errors.push("Name must be at least 3 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    companyErrors() {
      const errors = [];
      if (!this.$v.company.$dirty) return errors;
      !this.$v.company.maxLength &&
        errors.push("Company name must be at most 10 characters long");
      !this.$v.company.required && errors.push("Company is required.");
      return errors;
    },
    telErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push("Number must be at most 13 characters long");
      !this.$v.phone.required && errors.push("Number is required.");
      return errors;
    },
  },

  methods: {
    ...mapMutations(["pushUser", "pushLoggedUser", "updateLoggedUser"]),
    ...mapGetters(["isUserLogged", "getLoggedUser"]),
    submit() {
      var user = {
        id: this.id,
        name: this.name,
        email: this.email,
        company: this.company,
        phone: this.phone,
      };
      this.updateLoggedUser(user);
    },
    clear() {
      this.$v.$reset();
      this.loggedUser.name = "";
      this.loggedUser.email = "";
      this.loggedUser.company.name = "";
      this.loggedUser.phone = "";
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
