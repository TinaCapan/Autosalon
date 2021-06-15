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
import firebase from 'firebase'

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
<style>
  .x{
    font-size: 20px;
    font-weight: bold;
  }
  .card form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #00A1C0;
    border-radius: 4px;
    font-size: 20px;
  }
  input[type=email]:focus {
    background-color: #e7e7e7;
  }
  input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #00A1C0;
    border-radius: 4px;
    font-size: 20px;
  }
  input[type=password]:focus {
    background-color: #e7e7e7;
  }
  .logreg{
    padding: 12px 0px 5px 0px;
    font-size: 35px;
    font-weight: bold;
  }
</style>
