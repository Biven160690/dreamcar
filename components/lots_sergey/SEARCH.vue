<template>
  <div class="parent" id="app" data-app>
    <div class="auctions">
      <h1>AUCTIONS</h1>
    </div>
    <div class="data">
      <v-select
        :items="getAddStatus"
        :menu-props="{ up: true, offsetY: true }"
        label="Status"
      ></v-select>
    </div>
    <div class="data">
      <v-select
        :items="getAddName"
        :menu-props="{ up: true, offsetY: true }"
        label="Name"
      ></v-select>
    </div>
    <div class="button">
      <v-btn elevation="6" color="#B0E0E6" @click="changeStatus">Search</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from "vuex";
export default {
  computed: mapGetters(["getAddStatus", "getAddName", "getAllLots"]),
  methods: {
    ...mapGetters(["getAllLots"]),
    ...mapMutations(["changeStatus"]),

    push() {
      this.changeStatus();
    }
  }
};
</script>

<style>
.parent {
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 10px 0px;
}
.data {
  width: 30%;
  padding: 35px 0px 0px 40px;
  margin: 0px 0px 0px 70px;
}
.auctions {
  padding: 35px 20px 0px 40px;
}
</style>
