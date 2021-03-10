<!-- Страница регистрации-->

<template>
  <div class="content">
    <div class="form">
      <h1>SIGN UP</h1>
      <p>
        ALREADY A MEMBER? <NuxtLink class="link" to="/signin">SIGN IN</NuxtLink>
      </p>
      <p v-if="exists" class="user__exists">
        User with this email already exists
      </p>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
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
          :counter="10"
          label="Company"
          required
          @input="$v.company.$touch()"
          @blur="$v.company.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="tel"
          :error-messages="telErrors"
          :counter="14"
          label="Corp.number"
          required
          @input="$v.tel.$touch()"
          @blur="$v.tel.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="passw"
          :error-messages="passwErrors"
          :counter="10"
          :type="'password'"
          label="Password"
          required
          @input="$v.passw.$touch()"
          @blur="$v.passw.$touch()"
        ></v-text-field>

        <v-btn class="mr-4" :disabled="this.$v.$invalid" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
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
  email
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(10) },
    email: { required, email },
    company: { required, maxLength: maxLength(10) },
    tel: { required, maxLength: maxLength(14) },
    passw: { required, minLength: minLength(5), maxLength: maxLength(10) }
  },

  data: () => ({
    name: "",
    email: "",
    company: "",
    tel: "",
    passw: "",
    exists: false
  }),

  computed: {
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
      if (!this.$v.tel.$dirty) return errors;
      !this.$v.tel.maxLength &&
        errors.push("Number must be at most 13 characters long");
      !this.$v.tel.required && errors.push("Number is required.");
      return errors;
    },
    passwErrors() {
      const errors = [];
      if (!this.$v.passw.$dirty) return errors;
      !this.$v.passw.maxLength &&
        errors.push("Password must be at most 10 characters long");
      !this.$v.passw.minLength &&
        errors.push("Password must be at least 5 characters long");
      !this.$v.passw.required && errors.push("Password is required.");
      return errors;
    }
  },

  methods: {
    ...mapMutations(["pushUser", "pushLoggedUser"]),
    ...mapGetters(["getAllUsers"]),
    submit() {
      var users = this.getAllUsers();
      var isExists = users.some(user => user.email === this.email);
      if (!isExists) {
        this.exists = false;
        var user = {
          name: this.name,
          email: this.email,
          company: this.company,
          phone: this.tel,
          passw: this.passw
        };
        this.pushUser(user);
        this.pushLoggedUser(user);
        this.$router.push("lots");
      } else {
        this.exists = true;
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.company = "";
      this.tel = "";
      this.passw = "";
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.content h1 {
  margin-top: 50px;
}
.form {
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0 10% 0 10%;
  text-align: center;
}
form {
  margin-bottom: 50px;
  margin-top: 30px;
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