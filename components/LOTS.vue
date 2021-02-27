<template>
<form>
<div class="class1">
<div class="thumb img">
<h2 class="h2"> BRAKE DISC </h2>
<a><img src="~/assets/img/dick1.jpg"  alt="react" class="leftimg"> </a>
 <p class="p"><strong>ID:</strong> 415533<br>
 <strong>QUANTITI:</strong> 15<br>
 <strong>DESIRED PRICE:</strong> 500$<br>
 <strong>EXPIRATION DATE:</strong> 22.02.2021 18:00<br>
 <strong>STATUS:</strong> Open</p>
</div>
<div class="bid ">
<div>
 <h2 class="time">TIME LEFT: 16:02:05</h2>
 <h2 class="price"> CURRET BIT: 1200$</h2>
</div>
 <div class="rest"><v-btn
     elevation="6"
      x-large
    color="#B0E0E6"
   >MORE INFO</v-btn>
</div>
</div>
</div>
<div class="class1">
<div class="thumb img">
<h2 class="h2"> BRAKE DISC </h2>
<a><img src="~/assets/img/dick1.jpg"  alt="react" class="leftimg"> </a>
 <p class="p"><strong>ID:</strong> 415533<br>
 <strong>QUANTITI:</strong> 15<br>
 <strong>DESIRED PRICE:</strong> 500$<br>
 <strong>EXPIRATION DATE:</strong> 22.02.2021 18:00<br>
 <strong>STATUS:</strong> Open</p>
</div>
<div class="bid ">
<div>
 <h2 class="time">TIME LEFT: 16:02:05</h2>
 <h2 class="price"> CURRET BIT: 1200$</h2>
</div>
 <div class="rest"><v-btn
     elevation="6"
      x-large
    color="#B0E0E6"
   >MORE INFO</v-btn>
</div>
</div>
</div>
</form>
</template>

<script>
  export default {

  }
</script>

<style>

.time /* Время */ {

   padding: 0px 30px 0px 40px;
   font-size: 250%; /* Размер шрифта */ /*Lинии под текстом*/
   float: right;

}
.bid  /* родительский див 2 */ {

   display: flex;
   flex-flow: column;
   padding: 0px 0px 15px 0px;

}

  .rest /* кнопка */ {
  margin: 0px 10px 0px 25px;
  padding:0px 0px 50px 240px;
  /* float: right; */
  /* align-items: center; */
  }


  .price /* цена */ {
   padding: 0px 0px 70px 170px;
   font-size: 170%; /* Размер шрифта */
   /* float: right; */

  }


 .class1 {

     /* background-color: rgb(233, 233, 223); */
     /* width:100%; */
     width:100%;
     display:flex;
     align-items: flex-end;
     /* justify-content: flex-end; */
     justify-content: space-between;
     border-radius: 10px;
     padding: 10px; /* отступ внутри блоков*/
       margin: 30px 0px 25px 0px; /* отступ главного блока */
     /* overflow:auto;будет прокручиваться тест в блоке, появиться скрол снизу и сверху */
     box-shadow: 5px 5px 5px 5px rgb(94, 87, 87);


}


 .thumb img  {

     /* background-color: rgb(250, 253, 253); */
     /* float:left; */
     border: 2px solid #121313;
     border-radius: 5px;
     width: 178px;
     height: 190px;
     box-shadow: 3px 3px 3px 3px rgb(189, 180, 180);
}
 .leftimg {

    float:left;
    margin: 15px 7px 3px 3px;
    padding: 10px 0px 0px 0px;

   }

 .h2 {

    font-size: 250%; /* Размер шрифта */ /*Lинии под текстом*/
    /* border-bottom: 2px solid rgb(231, 38, 38);Параметры линии под текстом */
    font-weight: normal; /* Убираем жирное начертание */
    padding-bottom: 5px; /* Расстояние от текста до линии */
}
  .p {
    float:left;
    /* display: block; даем возможность padding работать с текстом */
    padding: 25px 0px 15px  10px; /*отстууп внутри*/
    font-size: 18px; /*размер текста*/
    line-height: 1.9; /*расстояние  между строкома*/
    /* overflow:auto;будет прокручиваться тест в блоке, появиться скрол снизу и сверху */
}
</style>
