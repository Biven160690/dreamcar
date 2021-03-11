<template>
<div class="parent" id="app" data-app >
  <div class="auctions">
  <h1>AUCTIONS</h1>
    </div>
      <div class="data">
      <v-select
        :items="getStatuses"
        :menu-props="{ up: true, offsetY: true }"
        label="Status"
      ></v-select>
      </div>
      <div class="data">
        <v-select
        :items="getAllParts"
        :item-text="'name'"
        :item-value="'id'"
        name="getAllParts"
        :menu-props="{ up: true, offsetY: true }"
        label="Part name"
        return-object
      ></v-select>
      </div>
      <div class="button">
      <v-btn elevation="6" color="#B0E0E6">Search</v-btn>
      </div>
</div>
</template>


<script>
//v-model="selectedStatus"
//v-model="partNameList"
import { mapGetters } from "vuex";
  export default {
    // !! to write special function to getPartNames from parts which id presents in lots
    //....
    computed: mapGetters(["getStatuses", "getAllParts"]),

  }
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
