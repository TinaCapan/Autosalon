<template>
  <div id="appnav" class="appnav">
    <img :src="require('../assets/car.png')" alt="Auto1" style="width:50px">
      <div class="topnav">
        <router-link to="/" class="nav-item" active-class="active" exact>NASLOVNA</router-link>
        <router-link to="ListaVozila" v-if="user" class="nav-item" active-class="active" exact>VOZILA</router-link>
        <router-link to="ListaKlijenata" v-if="user" class="nav-item" active-class="active" exact>KLIJENTI</router-link>
        <router-link to="ListaUgovora" v-if="user" class="nav-item" active-class="active" exact>UGOVORI</router-link>
        <router-link to="ListaUpita" v-if="user" class="nav-item" active-class="active" exact>UPITI</router-link>
        <router-link to="ListaProbnaVoznja" v-if="user" class="nav-item" active-class="active" exact>PROBNE VOŽNJE</router-link>
        <router-link to="CardVozila" class="nav-item" active-class="active" exact>PONUDA VOZILA</router-link>
        <router-link to="Login" v-if="!user" class="nav-item" active-class="active" exact>PRIJAVA</router-link>
        <router-link to="Register" v-if="user" class="nav-item" active-class="active" exact>REGISTRACIJA</router-link>
        <a v-if="user" @click="Logout" class="logout">ODJAVA</a>
      </div>
  </div>
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
<style>
  *{
margin: 0px;
padding: 0px;
box-sizing: border-box;
}

.appnav{
display: flex;
justify-content: space-around;
align-items: center;
height: 8vh;
width: 100%;
background-color: #00A1C0;
}

.nsl{
  color: #ffffff;
  font-size: 40px;
}

.topnav .nav-item{
text-decoration: none;
color: #ffffff;
}

.topnav{
display: flex;
text-decoration: none;
justify-content: space-around;
align-items: center;
width:40%;
}
.nav-item{
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.nav-item:hover{
  color: bisque;
}
.logout{
  position: absolute;
  right: 0;
  padding-right: 15px;
  cursor:pointer;
  color: #ffffff;
  font-size: 20px;
}
</style>
