<template>
    <div class="mt-5 bg-gray d-flex py-5 px-3 gap-3 align-items-center">
        <img src="images/server.png" alt="">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ad suscipit harum, asperiores dignissimos. Torem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ad suscipit harum, asperiores dignissimos. Morem ipsum dolor sit amet consectetur.</p>

        <div class="d-flex flex-column justify-content-between align-items-right gap-5">
            <span class="text-right">20€ / mois</span>
            <router-link class="my-button" :to="{ path: '/' }">Choisir</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.text-right
{
    text-align: right;
}
</style>