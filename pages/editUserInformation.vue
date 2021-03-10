<template>
  <div class="wrapper">

    <userSettings/>

  </div>

</template>

<!--<Form for user information>-->

<script>
//<userSettings/><changePassword/>
import userSettings from '~/components/userSettings.vue';
import changePassword from '~/components/changePassword.vue';
export default {
  components: {
    userSettings,
    changePassword
  }
}
</script>
<style>
.wrapper{
width: 100%;
display: inline-flex;
justify-content: space-between;
}
</style>