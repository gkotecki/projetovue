<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-md-9 col-lg-8 col-xl-6">
                <h4 class="text-center">Login</h4>
                <div class="card p-3">
                    <form @submit="onSubmit">
                        <div class="form-group">
                            <label for="input-1" class="mb-1">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="input-1"
                                v-model="form.email"
                                aria-describedby="emailHelp"
                                placeholder="Your e-mail"
                            />
                        </div>

                        <div class="form-group">
                            <label for="input-2" class="mb-1 mt-2">Password</label>
                            <input
                                type="password"
                                class="form-control mb-4"
                                v-model="form.password"
                                id="input-2"
                                placeholder="Password"
                            />
                        </div>

                        <div class="form-group form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                v-model="form.checked"
                                id="check-1"
                            />
                            <label class="form-check-label" for="check-1">Remember me</label>
                        </div>

                        <button type="submit" class="btn btn-block btn-primary">Submit</button>
                        <div class="pt-3 text-center">
                            Don't have an account?
                            <router-link class="nav-link" to="register">Create one</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
                checked: []
            },
            show: true
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            //alert(JSON.stringify(this.form));
            this.$router.push("/books");
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.22), 0 5px 5px rgba(0, 0, 0, 0.2);
}
.container {
    margin-top: 50px;
}
</style>
