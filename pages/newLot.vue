<!-- cтраница для создания нового лота-->

<!-- для работы v-select с массивом объектов
      нужно в родительском теге div указать 
      id="app" data-app
      а в самом v-select задать опцию return-object-->

<template>
  <form class="form">
    <div class="div1" id="app" data-app>
      <label class="label">ADD NEW LOT</label>
      <div class="div2">
        <v-select
          v-model="selectedPart"
          placeholder="select name of part"
          :items="getAllParts"
          :item-text="'name'"
          :item-value="'id'"
          name="getAllParts"
          label="Part name"
          required
          return-object
          @change="changePart"
        ></v-select>
        <v-text-field v-model="description" label="Description"></v-text-field>
        <v-text-field
          type="number"
          v-model="price"
          label="Desired price"
          suffix="$"
          required
        ></v-text-field>
        <v-text-field
          type="number"
          v-model="quantity"
          label="Quantity"
          required
        ></v-text-field>
        <v-text-field
          v-model="expirationDate"
          type="date"
          label="Expiration Date"
        ></v-text-field>
      </div>
      <div class="div3">
        <v-btn class="clear" @click="clear"> clear </v-btn>
        <v-btn class="submit" @click="submit"> add </v-btn>
      </div>
    </div>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { mapGetters, mapMutations } from "vuex";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],

  validations: {
    // selectedPart: { required, minLength: minLength(3), maxLength: maxLength(10) },
    //price: { required, minLength: minLength(1), maxLength: maxLength(5) },
    //price: { required, maxLength: maxLength(14) },
    // expirationDate: { required, minLength: minLength(5), maxLength: maxLength(10) }
  },

  data: () => ({
    selectedPart: "",
    description: "",
    quantity: "",
    price: "",
    expirationDate: "",
  }),

  computed: {
    ...mapGetters(["getAllParts"]),
    /*
    ...mapGetters(["getUserById"]),
    description () {
      return this.getUserById.email;
    }*/

  },
  methods: {
    ...mapMutations(["pushLot"]),
    ...mapGetters(["getAllLots"]),

    changePart() {
      this.description = this.selectedPart.description;
    },

    submit() {
      var lots = this.getAllLots();
      //генераци€ id дл€ нового лота, чтобы он не повтор€лс€ с уже существующими лотами
      var newId = lots.length;
      for (var i = 0; i < lots.length; i++) {
        if (newId === lots[i].id) {
          newId++;
        }
      }
      var newLot = {
        id: newId,
        part_id: this.selectedPart.id,
        part_name: this.selectedPart.name,
        part_decstiption: this.selectedPart.part_decstiption,
        quantity: this.quantity,
        status: "open",
        expirationDate: this.expirationDate,
        desiredPrice: this.price,
      };
      this.pushLot(newLot);
      this.$router.push("lots");
      alert("New lot for Part.name = '" + this.selectedPart.name + "' added!");
    },
    clear() {
      //this.$v.$reset()
      //this.select = null
      this.selectedPart = "";
      this.description = "";
      this.price = "";
      this.quantity = "";
      this.expirationDate = "";
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-self: center;
  height: 100%;
}
.div1 {
  background-color: rgb(196, 196, 196);
  width: 60%;
  margin-top: 4%;
  align-self: center;
  display: flex;
  flex-direction: column;
}
.label {
  margin-top: 5%;
  align-self: center;
  font-size: 30px;
}
.div2 {
  margin-left: 15%;
  margin-top: 3%;
  width: 70%;
  font-size: 15px;
}
.div3 {
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.clear {
  background: rgb(239, 133, 140);
  width: 20%;
  margin-bottom: 3%;
  font-size: 15px;
}
.submit {
  background: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(rgb(133, 201, 239)) to(rgb(133, 201, 239))
      color-stop(rgb(133, 201, 239))
  );
  /*background-color: rgb(133, 201, 239);*/
  width: 20%;
  margin-bottom: 3%;
  font-size: 15px;
}
</style>
