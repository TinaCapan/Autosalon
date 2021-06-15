<template>
  <div class="card card-body">
  <form @submit.prevent="login">
    <div class="logreg">PRIJAVA</div>
    <div class="field">
      <input class="input" type="email" placeholder="Unesite e-mail" v-model="email"/>
      <input class="input" type="password" placeholder="Unesite lozinku" v-model="password"/>
    </div>
    <div class="x">Zaboravili ste lozinku? <router-link to='/forgetpassword'>Postavite novu lozinku</router-link></div>
    <button class="unesi">Prijava</button>
  </form>
  </div>
</template>

<script>
import firebase from '../firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        alert('Uspješno ste prijavljeni')
        this.$router.push('/')
      })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>

