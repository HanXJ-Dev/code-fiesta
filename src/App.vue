<template>
  <div id = "page-container">
    <div class="content">
      
      <router-view/>
    </div>
  </div>
</template>

<script>

// // import Home from './components/Home'
// import Policies from './components/Policies'
export default {
  name: 'App',
  // components:{
  //   // Home,
  //   Policies
  // }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
:root{
  --form-height: 2.5em;
  --red: #d9534f;
  --white: #f7f7f7;
  --horizontal-menu-height: 70px;
}
*{
  font-family: 'Poppins', sans-serif;
}
body{
  margin: 0;
  padding: 0;
  background-image: url('./assets/images/bg.jpeg');
  background-size: 3000px;
  /* background-position-y: 500px; */
  background-repeat: no-repeat;
  object-fit: contain;
}



.menu-items::-webkit-scrollbar
{
  display: none;
}
.menu-items{
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
.menu-items,
.header {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

</style>
