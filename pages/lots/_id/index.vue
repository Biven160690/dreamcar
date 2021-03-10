<template>
  <div class="container">
    <div>
      <h1>LOT ID: {{ lot.id }}</h1>
      <div class="lot_component">
        <div class="header">
          <h2>{{ lot.part_name }}</h2>
          <h2>STATUS: {{ lot.status }}</h2>
        </div>
        <div class="content">
          <img
            src="@/assets/img/discs.png"
            alt="DISCS"
            width="180px"
            height="180px"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="chars">
          <h3>QUANTITY: {{ lot.quantity }}</h3>
          <h3>BIRTH DATE: 22.02.2021 18:00</h3>
          <h3>EXPIRATION DATE: {{ lot.expirateDate }}</h3>
          <h3>DESIRED PRICE: {{ lot.desiredPrice }}$</h3>
        </div>
        <div class="footer">
          <div class="footer__chars">
            <h2>CURRENT BID: {{ lot.bid }}$</h2>
            <h2>TIME LEFT: 16:02:55</h2>
          </div>
          <NuxtLink to="/"><button>PARTICIPATE</button></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {},
  data: () => ({
    lot: {}
  }),
  computed: {},
  created() {
    var lots = this.$store.getters.getAllLots;
    var lot = lots.find(lot => lot.id == this.$route.params.id);
    this.lot = lot;
  }
};
</script>

<style scoped>
.page__content {
  display: flex;
  flex-direction: row;
}
.lot_component {
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 20px;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-top: 20px;
}
.chars {
  margin-top: 20px;
}
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
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
img {
  margin-right: 30px;
}
</style>