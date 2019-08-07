<template>
    <div class="bookdetails">
        <div v-if="loading == true">
            <CenterSpinner />
        </div>
        <div class="container-fluid" v-else>
            <div class="row">
                <div class="col col-xl-10">
                    <div class="col px-0 pb-3">
                        <h2>{{bookResult.name}}</h2>
                    </div>
                    <div class="row">
                        <div class="col col-auto">
                            <img
                                :src="bookResult.image"
                                blankColor="#777"
                                width="207"
                                height="253"
                                class="m1 rounded"
                                rounded
                            />
                        </div>
                        <div class="col">
                            <h6>
                                <b>Book Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate tenetur commodi accusamus atque magni dicta, debitis quia recusandae aliquam delectus veritatis obcaecati doloribus minus illum, ullam laborum, alias dolorum.
                            </h6>
                            <div class="row align-items-end">
                                <div class="col" id="userdatacol">
                                    <h6>
                                        <b>Book owner:</b>
                                        {{ownerData.name}}
                                    </h6>
                                    <div v-if="bookResult.loan == false">
                                        <h6>
                                            <b>Status:</b> Available!
                                        </h6>
                                    </div>
                                    <div v-else>
                                        <h6>
                                            <b>Status:</b>
                                            Borrowed by {{loanerData.name}} on {{bookResult.loan.date}}
                                        </h6>
                                    </div>
                                </div>

                                <div class="col-auto align-self-center">
                                    <button
                                        class="btn btn-primary"
                                        v-if="bookResult.loan == false"
                                        variant="primary"
                                        @click="borrowClick"
                                    >Borrow</button>
                                    <button class="btn btn-secondary" v-else disabled>Unavailable</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            bookid: this.$route.params.id,
            bookResult: null,
            ownerData: { name: "N/A" },
            loanerData: { name: "N/A" },
            loading: true,
            errored: false
        };
    },
    watch: {
        $route() {
            created();
        }
    },
    created() {
        axios
            .get(
                "https://my-json-server.typicode.com/gkotecki/FakeBooksApi/books/" +
                    this.bookid
            )
            .then(response => {
                this.bookResult = response.data;
            })
            .then(() => {
                this.getNameFromId(this.bookResult.userId, this.ownerData);
                this.getNameFromId(
                    this.bookResult.loan.userId,
                    this.loanerData
                );
            })
            .then(() => {
                this.loading = false;
            })
            .catch(error => {
                //console.log(error);
                this.errored = true;
            })
            .finally(() => {});
    },
    methods: {
        getNameFromId(usrId, obj) {
            axios
                .get(
                    "https://my-json-server.typicode.com/gkotecki/FakeBooksApi/users/" +
                        usrId
                )
                .then(response => {
                    obj.name = response.data.name;
                })
                .catch(error => {
                    //console.log(error);
                    this.errored = true;
                })
                .finally(() => {});
        },
        borrowClick() {
            this.loanerData = { name: "You" };
            let d = new Date();
            this.bookResult.loan = {
                date:
                    d.getFullYear() +
                    "-" +
                    (d.getMonth() + 1) +
                    "-" +
                    d.getDate()
            };
            alert("Borrowing Book!");
        }
    }
};
</script>

<style lang="scss" scoped>
#userdatacol {
    min-width: 250px;
}
.m1 {
    object-fit: cover;
}
</style>
