<template>
  <div class="card card-body">
        <form @submit.prevent="register">
            <div class="logreg">REGISTRACIJA NOVOG KORISNIKA</div>
            <div class="field">
            <input type="email" class="input" placeholder="Unesite e-mail" v-model="email"/>
            <input type="password" class="input" placeholder="Unesite lozinku" v-model="password"/>
            <button type="submit" class="btnunesi">Registracija</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        alert('Uspješno ste registrirali novog korisnika.')
        this.$router.push('/home')
      })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
