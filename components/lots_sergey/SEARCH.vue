<template>
<div class="parent">
  <div class="auctions">
  <h1>AUCTIONS</h1>
    </div>
      <div class="data">
      <v-select
        :items="items"
        :menu-props="{ up: true, offsetY: true }"
        label="Status"
      ></v-select>
      </div>
      <div class="data1">
        <v-select
        :items="items"
        :menu-props="{ up: true, offsetY: true }"
        label="Name"
      ></v-select>
      </div>
      <div class="button">
      <v-btn elevation="6" color="#B0E0E6">Search</v-btn>
      </div>
</div>
</template>


<script>
  export default {
    data: () => ({
      items: [ 'BRAKE DISC' , 'Foo4r4r4r4r', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<style>

.parent {
display: flex;
justify-content: space-between;
margin: 10px -2px 0px 0px;
}
.data {
padding: 0px 0px 0px 0px;
width: 30%;
}
.data1 {
  width: 30%;
}
.button {
padding: 10px 0px 0px 0px;
margin: 0px 0px 0px 0px;
}
.auctions {
/* text-align: center; */
padding: 30px 0px 0px 10px;
}

</style>
