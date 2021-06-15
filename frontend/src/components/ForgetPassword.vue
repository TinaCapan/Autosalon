<template>
    <div class="card card-body">
        <form @submit.prevent="forgetPassword">
            <h3>Unesite e-mail adresu za poništavanje lozinke</h3>
            <div class="field">
                <input type="email" class="input" v-model="user.email" placeholder = "Unesite e-mail" />
            </div>
            <button type="submit" class="unesi">Ponovno postavi lozinku</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      user: {
        email: ''
      }
    }
  },
  methods: {
    forgetPassword () {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert('Na vašu e-mail adresu poslani su detalji za izmjenu lozinke')
          this.user = {
            email: ''
          }
        }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
