<template>
    <nav class="navbar navbar-expand-lg container">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Accueil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/choose-template">Templates</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/choose-server">Serveurs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            
                <router-link to="/login">
                    <img class="h-4" src="images/contact.png" alt="">
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>

</script>


<style scoped>
.h-4
{
    height: 25px;
}
</style>