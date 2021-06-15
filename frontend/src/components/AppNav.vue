<template>
  <nav class="navbar">
    <img :src="require('../assets/car.png')" alt="Auto1" style="width:50px">
      <div class="nav">
        <router-link to="/" class="nav-item" active-class="active" exact>NASLOVNA</router-link>
        <router-link to="ListaVozila" v-if="user" class="nav-item nav-link" active-class="active" exact>Vozila</router-link>
        <router-link to="ListaKlijenata" v-if="user" class="nav-item nav-link" active-class="active" exact>Klijenti</router-link>
        <router-link to="ListaUgovora" v-if="user" class="nav-item nav-link" active-class="active" exact>Ugovori</router-link>
        <router-link to="ListaUpita" v-if="user" class="nav-item nav-link" active-class="active" exact>Upit</router-link>
        <router-link to="ListaProbnaVoznja" v-if="user" class="nav-item nav-link" active-class="active" exact> Probna voznja</router-link>
        <router-link to="CardVozila" class="nav-item nav-link" active-class="active" exact>Vozilas</router-link>
        <router-link to="Login" v-if="!user" class="nav-item" active-class="active" exact>PRIJAVA</router-link>
        <router-link to="Register" v-if="user" class="nav-item" active-class="active" exact>REGISTRACIJA</router-link>
        <a v-if="user" @click="Logout" class="logout">ODJAVA</a>
      </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'AppNav',
  data () {
    return {
      user: null
    }
  },
methods: {
  Logout () {
    firebase.auth().signOut().then(() => {
      alert('Uspješno ste se odjavili.')
      this.$router.push('/')
    })
      .catch(error => {
        alert(error.message)
      })
  }
},
created: function () {
    var vm = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.user = user
      } else {
        vm.user = null
      }
    })
  }
}
</script>
