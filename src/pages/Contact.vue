<template>
    <div class="row justify-content-center mt-5">
        <form class="col-6 shadow" @submit.prevent="submit()">
            <h1 class="mt-3">Contact</h1>

            <div v-show="form.success" class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                <strong>Email envoyé avec succès</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div v-show="form.error" class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                <strong>L'email n'a pas pu être envoyé. Veuillez rééssayer plus tard</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <input class="form-control mt-5" placeholder="name" type="text" v-model="form.name">
            <input class="form-control mt-3" placeholder="message" type="text" v-model="form.message">

            <button class="my-button my-5 float-right" type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            form: {
                name: "",
                message: "",
                success: false,
                error: false
            }
        }
    },

    methods: {
        submit() {
            emailjs.send('service_7czii1y', 'template_02fm4ve', this.form)
                .then((response) => {
                    console.log(response)
                    this.form = {
                        message: "",
                        name: "",
                        success: true
                    }
                }), function (error) {
                    console.error(error)
                    this.form.error = true
                }
        }
    }
}
</script>

<style scoped>
.float-right
{
    float: right;
}
</style>