<template>
  <v-form @submit.prevent="login">
    <v-text-field
      v-model="form.email"
      type="email"
      :counter="50"
      label="E-mail"
      required
    >
    </v-text-field>
    <v-text-field
      v-model="form.password"
      type="password"
      label="Password"
      required
    ></v-text-field>
    

    <v-btn
        color="green"
        type="submit"
    >Login</v-btn>
  </v-form>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            form: {
                email: null, 
                password: null
            }
        }
    },
    components: {
        axios
    },
    methods: {
        login() {
            User.login(this.form)
        }
    }
}
</script>

<style>

</style>
