<template>
    <div class="home text-center">
        <img alt="Vue logo" src="../assets/logo.png" class="pb-5" />
        <h3>Welcome to the Vue.js virtual bookshelf app!</h3>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    }
};
</script>
