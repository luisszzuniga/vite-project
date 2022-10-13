<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body
{
  font-family: 'Montserrat', sans-serif!important;
}

.my-button
{
  text-decoration: none;
  color: #fff;
  background-color: #000000;
  padding: 10px 25px;
  transition: 200ms ease;
}

.my-button:hover
{
  color: #fff;
  border-radius: 20px;
}

.bg-gray
{
  background-color: #D9D9D9;
}

.banner h1
{
  font-size: 23px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 25px 0;
}
</style>
