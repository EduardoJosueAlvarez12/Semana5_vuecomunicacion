<template>
  <div id="app" :style="{'background-image':'url(https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)', 'background-size':'cover', 'height':'800px', 'width':'1550px', display}">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/#/Almacenamiento">Almacenamiento</b-nav-item>
        <b-nav-item to="/#/Longitud">Longitudes</b-nav-item>
        <b-nav-item to="/#/Masa">Masa</b-nav-item>
        <b-nav-item to="/#/Moneda">Moneda</b-nav-item>
        <b-nav-item to="/#/Tiempo">Tiempo</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
