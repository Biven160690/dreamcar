<!-- Главная страница приложения-->

<template>
  <div>
    <div class="container">
      <div class="section">
        <h3>PARTS SUPPLY AUCTION</h3>
        <div class="section1__content">
          <img src="@/assets/img/index-1.png" alt="logo" />
          <div class="section__rightside">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam vulputate dignissim suspendisse. Eget nunc
              lobortis mattis aliquam faucibus. Vitae justo eget magna fermentum
              iaculis eu non diam. Sed egestas egestas fringilla phasellus.
              Convallis a cras semper auctor neque vitae tempus. Nulla
              pellentesque dignissim
            </p>
            <NuxtLink to="/lots"><button>PARTICIPATE</button></NuxtLink>
          </div>
        </div>
      </div>
      <div class="section">
        <h3>WHAT IS DREAMCAR?</h3>
        <div class="section__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
            risus pretium quam vulputate dignissim suspendisse. Eget nunc
            lobortis mattis aliquam faucibus. Vitae justo eget magna fermentum
            iaculis eu non diam. Sed egestas egestas fringilla phasellus.
            Convallis a cras semper auctor neque vitae tempus. Nulla
            pellentesque dignissim
          </p>
          <img src="@/assets/img/index-2.png" alt="logo" />
        </div>
      </div>
      <div class="section">
        <h3>HOW AUCTION WORKS</h3>
        <div class="section__content">
          <img src="@/assets/img/index-3.png" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
            risus pretium quam vulputate dignissim suspendisse. Eget nunc
            lobortis mattis aliquam faucibus. Vitae justo eget magna fermentum
            iaculis eu non diam. Sed egestas egestas fringilla phasellus.
            Convallis a cras semper auctor neque vitae tempus. Nulla
            pellentesque dignissim
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="footer__data">
          <p>DREAMCAR, 2021</p>
          <div class="footer__contacts">
            <p>+ 375 44 000-00-00</p>
            <p>DREAMCARLTD@GMAIL.COM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: mapActions(["fetchUsers"]),

  // Вызов экшна fetchUsers после загрузки DOM для получения users
  async mounted() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.section {
  background-color: #e3e3e3;
  margin-top: 35px;
  text-align: center;
  height: 500px;
}
.section h3 {
  padding-top: 20px;
  font-size: 25px;
}

.section__content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
  text-align: left;
}

.section1__content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
  text-align: left;
}

.section__rightside {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.section1__content .section__rightside p {
  width: 80%;
  margin-left: 30px;
}

.section__content p {
  width: 30%;
  font-size: 1 4px;
}

.footer {
  padding: 10px 0 10px 0;
  margin-top: 20px;
  border-top: 1px solid #ded9d9;
}

.footer__data {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

button {
  width: 125px;
  height: 30px;
  border-radius: 5px;
  background-color: #85c9ef;
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
  margin-left: 30px;
}
</style>