<<template>
  <div>
    <div class="class1" v-for="lots in getAllLots" :key="lots.id">
      <div class="thumb img">
        <h2 class="h2">{{ lots.name }}</h2>
        <a><img src="~/assets/img/dick1.jpg" alt="react" class="leftimg" /> </a>
        <!-- <p class="p" v-if="lots.desired == lots.bit"> -->
        <p class="p">
          <strong>ID:</strong> {{ lots.id }}<br />
          <strong>QUANTITI:</strong> {{ lots.quantity }}<br />
          <strong>DESIRED PRICE:</strong>{{ lots.desired }} <br />
          <strong>EXPIRATION DATE:</strong> {{ lots.expiratedate }}<br />
          <!-- <strong>STATUS:</strong> Closed <br /> -->
          <strong>STATUS:</strong> {{ lots.status }} <br />
        </p>
        <!-- <p class="p" v-else>
          <strong>ID:</strong> {{ lots.id }}<br />
          <strong>QUANTITI:</strong> {{ lots.quantity }}<br />
          <strong>DESIRED PRICE:</strong> {{ lots.desired }} <br />
          <strong>EXPIRATION DATE:</strong> {{ lots.expiratedate }}<br />
          <strong>STATUS:</strong> {{ lots.status }} <br />
        </p> -->
      </div>
      <div class="price">
        <!-- <div class="timer" v-if="lots.desired !== lots.bit"> -->
        <div class="timer">
          <h3 id="h3">TIME LIFE:</h3>
          <timer v-bind:deadline="lots.time" class="size"> </timer>
        </div>
        <div class="curret_bit">
          <h3>CURRET BIT: {{ lots.bit }} $</h3>
          <div class="button"
            <NuxtLink :to="'lots/' + lots.id" class="none">
              <v-btn elevation="6" x-large color="#B0E0E6">MORE INFO</v-btn>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import timer from "@/components/lots_sergey/timer.vue";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getAllLots"]),
  components: {
    timer
  },
  props: ["id"]
};
</script>

<style>
.price /* див для правого угла  */ {
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 0px;
}
.curret_bit {
  padding: 0px 0px 0px 170px;
  margin: 0px 0px 0px 100px;
}
.timer /* счетчик */ {
  padding: 0px 0px 0px 220px;
  font-size: 120%;
  color: rgb(228, 133, 133);
  display: flex;
}
.size {
  font-size: 120%;
}
#h3 {
  color: rgb(17, 17, 17);
}
.button /* регулировка кнопки */ {
  display: flex;
  justify-content: flex-end;
  padding: 30px 0px 0px 0px;
  margin: 20px 20px 0px 0px;
}
.none {
  text-decoration: none;
}

.class1 {
  background-color: #e3e3e3;
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 5px; /* отступ внутри блоков*/
  margin: 10px 5px 25px 8px; /* отступ главного блока */
}
.thumb img {
  border-radius: 5px;
  width: 178px;
  height: 190px;
}
.leftimg {
  float: left;
  margin: 15px 7px 3px 3px;
  padding: 0px 0px 0px 0px;
}
.h2 {
  font-size: 250%; /* Размер шрифта */ /*Lинии под текстом*/
  font-weight: normal; /* Убираем жирное начертание */
  padding-bottom: 5px; /* Расстояние от текста до линии */
}
.p {
  float: left;
  padding: 25px 0px 15px 10px; /*отстууп внутри*/
  font-size: 18px; /*размер текста*/
  line-height: 1.9; /*расстояние  между строкома*/
}
</style>
