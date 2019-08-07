<template>
    <div class="container">
        <div class="row justify-content-md-center" align-v="center">
            <div class="col col-md-9 col-lg-8 col-xl-6">
                <h4 class="text-center">Registering a new user</h4>
                <div class="card p-3">
                    <form @submit="onSubmit">
                        <div class="form-group">
                            <label for="input-0" class="mb-1">Full Name</label>
                            <input
                                type="name"
                                class="form-control"
                                id="input-0"
                                v-model="reg.name"
                                aria-describedby="emailHelp"
                                placeholder="Your name"
                            />
                        </div>

                        <div class="form-group">
                            <label for="input-1" class="mb-1 mt-2">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="input-1"
                                v-model="reg.email"
                                aria-describedby="emailHelp"
                                placeholder="Your e-mail"
                            />
                        </div>

                        <div class="form-group">
                            <label for="input-2" class="mb-1 mt-2">Password</label>
                            <input
                                type="password"
                                class="form-control mb-4"
                                v-model="reg.password"
                                id="input-2"
                                placeholder="Password"
                            />
                        </div>

                        <button type="submit" class="btn btn-block btn-primary">Register</button>
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
            reg: {
                name: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            //alert(JSON.stringify(this.form));
            this.$store.commit("setStateObj", this.reg);
            this.$router.push("/");
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
