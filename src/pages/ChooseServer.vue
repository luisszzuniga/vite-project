<template>
    <div class="banner bg-gray">
        <div class="container">
            <h1>Choix du serveur</h1>
        </div>
    </div>

    <div class="container my-5">
        <server />
        <server />
        <server />
    </div>
</template>

<script>
import server from '../components/server.vue'

export default {
    components: {
        server
    }
}
</script>