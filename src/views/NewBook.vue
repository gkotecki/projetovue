<template>
    <div class="container">
        <div class="row justify-content-md-center" align-v="center">
            <div class="col col-md-9 col-lg-8 col-xl-6">
                <h4 class="text-center">Adding a new book</h4>
                <div class="card p-3">
                    <form @submit="onSubmit">
                        <div class="form-group">
                            <label for="input-0" class="mb-1">Name of the book</label>
                            <input
                                type="name"
                                class="form-control"
                                id="input-0"
                                v-model="reg.name"
                                placeholder="Name"
                            />
                        </div>

                        <div class="form-group">
                            <label for="input-1" class="mb-1 mt-2">Book description</label>
                            <textarea
                                class="form-control"
                                id="input-1"
                                v-model="reg.description"
                                placeholder="Description"
                            />
                        </div>

                        <div class="form-group">
                            <label for="input-2" class="mb-1 mt-2">Book cover image</label>
                            <input
                                type="url"
                                class="form-control mb-4"
                                v-model="reg.image"
                                id="input-2"
                                placeholder="https://picsum.photos/200/300"
                            />
                        </div>

                        <button type="submit" class="btn btn-block btn-primary">Add book</button>
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
                description: "",
                image: ""
            }
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            //alert(JSON.stringify(this.form));
            this.$router.push("/mybooks");
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
