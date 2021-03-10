<!-- Компонент навигационного меню - навбара-->

<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar__content">
        <h3><NuxtLink class="link__logo" to="/">DreamCar</NuxtLink></h3>
        <div class="navlinks">
          <h4><NuxtLink to="/lots" class="link">Lots</NuxtLink></h4>
          <h4>
            <NuxtLink v-if="!isLogged" to="/signin" class="link"
              >Sign in</NuxtLink
            >
          </h4>
          <h4>
            <NuxtLink v-if="!isLogged" to="/signup" class="link"
              >Sign up</NuxtLink
            >
          </h4>
          <div class="user__settings__nav" v-if="isLogged">
            <img
              src="@/assets/img/user-settings-logo.png"
              alt="settings"
              width="22px"
              height="20px"
            />
            <h4>
              <NuxtLink to="/editUserInformation" class="link">{{
                loggedUser.name
              }}</NuxtLink>
            </h4>
          </div>
          <h4>
            <NuxtLink v-if="isDreamCar&isLogged" to="/newLot" class="link"
              >Add new lot</NuxtLink
            >
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
  }),

  methods: {
    ...mapGetters(["isUserLogged", "getLoggedUser", "isUserDreamCar"])
  },

  computed: {
    isLogged() {
      return this.isUserLogged();
    },
    isDreamCar() {
      return this.isUserDreamCar();
    },
    loggedUser() {
      var loggedUser = this.getLoggedUser();
      console.log(loggedUser);
      return loggedUser;
    }
  }
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid #ded9d9;
}
.navbar__content {
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.navlinks {
  display: flex;
  flex-direction: row;
  align-items: center;
}

h4 {
  margin-left: 30px;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
}
h3 {
  font-size: 24px;
}

.link {
  text-decoration: none;
  color: black;
}

.nuxt-link-active {
  color: #85c9ef;
  border-bottom: 2px solid #85c9ef;
}

/*.link__logo пересоздает стиль для ссылки, которая находится в логотипе,
она не должна изменяться при нажатии. .nuxt-link-active - встроенный
класс компонента NuxtLink для активированных ссылок.*/

.link__logo {
  text-decoration: none;
  color: black;
}
.link__logo.nuxt-link-active {
  color: black;
  border-bottom: 0px;
}

.user__settings__nav {
  display: flex;
  flex-direction: row;
  align-content: center;
}
.user__settings__nav img {
  margin-right: -30px;
}
</style>