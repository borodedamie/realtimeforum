<template>
    <form v-on:submit.prevent="Signup">
        <v-text-field
        v-model="form.name"
        label="Name"
        type="text"
        required
        ></v-text-field>
        <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>

        <v-text-field
        v-model="form.email"
        label="E-mail"
        type="email"
        required
        ></v-text-field>
        <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>

        <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
        required
        ></v-text-field>
        <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>

        <v-text-field
        v-model="form.password_confirmation"
        label="Confirm Password"
        type="password"
        required
        ></v-text-field>

         <v-btn
        color="blue"
        type="submit"
        >Sign Up</v-btn>

        <router-link to="/login">
            <v-btn color="green">Login</v-btn>
        </router-link>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {}
        }
    },

    methods: {
        Signup() {
            axios.post('api/auth/signup', this.form)
            .then(response => User.responseAfterLogin(response))
            .catch(error => this.errors = error.response.data.errors)
        }
    }
}
</script>

<style>

</style>
