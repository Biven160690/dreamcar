<template>
  <div class="component">
    <div class="header">
      <h2>BRAKE DISCS</h2>
      <h2>STATUS: Open</h2>
    </div>
    <div class="content">
      <img src="@/assets/img/discs.png" alt="DISCS" width="180px" height="180px"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="chars">
      <h3>QUANTITY: 15</h3>
      <h3>BIRTH DATE: 22.02.2021 18:00</h3>
      <h3>EXPIRATION DATE: 22.02.2021 18:00</h3>
      <h3>DESIRED PRICE: 500$</h3>
    </div>
    <div class="footer">
      <div class="footer__chars">
        <h2>CURRENT BID: 1200$</h2>
        <h2>TIME LEFT: 16:02:55</h2>
      </div>
      <NuxtLink to="/"><button>PARTICIPATE</button></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.component {
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  width: 50%;
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
img{
    margin-right: 30px;
}
</style>