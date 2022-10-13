<template>
    <div class="banner bg-gray">
        <div class="container">
            <h1>Choix du template</h1>
        </div>
    </div>
    <div class="container mb-5">
        <div class="row">
            <myTemplate />
            <myTemplate />
            <myTemplate />
            <myTemplate />
            <myTemplate />
            <myTemplate />
        </div>
    </div>
</template>

<script>
import myTemplate from "../components/myTemplate.vue";

export default {
    components: {
        myTemplate
    }
}
</script>