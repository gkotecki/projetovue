<template>
    <div class="container">
        <ul class="nav flex-column" id="sidebar">
            <li class="nav-item mt-3">
                <router-link class="nav-link" to="/home">
                    <h6>Home</h6>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/books">
                    <h6>Books Available</h6>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/mybooks">
                    <h6>My books</h6>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/myloans">
                    <h6>My loans</h6>
                </router-link>
            </li>
            <!-- <hr />
            <h6 class="pl-3 pt-5 muted">Logged in as {{this.$store.currentUserId}}</h6>-->
        </ul>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
};
</script>

<style scoped lang="scss">
#sidebar {
    background: #e0e0e0;
    position: fixed;
    height: 100%;
    padding: 0px;
    width: 100%;
    max-width: 25%;
    min-width: 150px;
    box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.2), 2px 5px 9px rgba(0, 0, 0, 0.15);
}
#open {
    transform: translate(0, 0);
}
.nav-item {
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.nav-item:hover {
    background: rgba(0, 0, 0, 0.15);
}
.nav-item:hover h6 {
    font-weight: 700;
}
.nav-item:active {
    background: #007bff1a;
}
.muted {
    opacity: 0.6;
}
h6 {
    margin-left: 10px;
    margin-bottom: 0px;
    color: #2c3e50;
    font-weight: 500;
}
li a {
    text-decoration: none;
}
</style>
