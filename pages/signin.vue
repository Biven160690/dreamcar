<!-- Страница авторизации-->

<template>
  <div class="content">
    <div class="form">
      <h1>SIGN IN</h1>
      <p>
        DONT HAVE AN ACCOUNT?
        <NuxtLink class="link" to="/signup">SIGN UP</NuxtLink>
      </p>
      <p v-if="exists" class="wrong__data">
        User with this data not found
      </p>
      <form>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
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
    email: { required, email },
    passw: { required, minLength: minLength(5), maxLength: maxLength(10) }
  },

  data: () => ({
    email: "",
    passw: "",
    exists: false
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
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
    ...mapMutations(["pushLoggedUser"]),
    ...mapGetters(["getAllUsers"]),
    submit() {
      var users = this.getAllUsers();
      var isExists = {};
      isExists = users.find(
        user => user.email === this.email && user.passw === this.passw
      );
      if (isExists == undefined) {
        this.exists = true;
      } else {
        this.pushLoggedUser(isExists);
        this.$router.push("LOTS");
      }
    },
    clear() {
      this.$v.$reset();
      this.email = "";
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
.wrong__data {
  color: #f96c6c;
  margin-top: 10px;
}
</style>