<template>
  <nav class="navbar">
    <img :src="require('../assets/car.png')" alt="Auto1" style="width:50px">
      <div class="nav">
        <router-link
          to="/"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Vozila
        </router-link>
        <router-link
          to="ListaKlijenata"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Klijenti
        </router-link>
        <router-link
          to="ListaUgovora"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Ugovori
        </router-link>
        <router-link
          to="ListaUpita"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Upit
          </router-link>
          <router-link
          to="ListaProbnaVoznja"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Probna voznja
          </router-link>
          <router-link
          to="CardVozila"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Vozilas
        </router-link>
      </div>
  </nav>
</template>

<script>
export default {}
</script>
<style>
  .navbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 8vh;
    background-color: #e0e8ff;
  }
  .logo{
    width:60%;
    align-items: center;
  }
  .nav{
    width:40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .nav-item{
    color: black;
  }
</style>
