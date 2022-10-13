<template>
    <header class="home-bg"></header>

    <main class="container">
        <p class="mt-5 fs-5">Vous avez besoin d'un site web pour commercialiser votre activité de photographe? Nous sommes votre solution. Choisissez un template parmi + de 10. Choisissez votre serveur et l'espace de stockage dont vous aurez besoin. En moins de 10 minutes, votre site sera en ligne !</p>
        <div class="d-flex justify-content-center mt-5">
            <router-link
            to="/"
            class="text-uppercase my-button"
            >
                Essayer notre produit
            </router-link>
        </div>
        
        <section class="row mt-5">
            <pricing class="col-12 col-md-6 col-lg-4"></pricing>
            <pricing class="col-12 col-md-6 col-lg-4"></pricing>
            <pricing class="col-12 col-md-6 col-lg-4"></pricing>
        </section>
    </main>
</template>

<script>
import pricing from '../components/pricing.vue';


export default {
    components: { 
        pricing 
    },
    
}
</script>

<style scoped>
.home-bg
{
    background: url('images/header.jpg');
    background-position: center;
    background-size: cover;
    height: 80vh;
}
</style>