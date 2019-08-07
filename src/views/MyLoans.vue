<template>
    <div class="myloans">
        <div v-if="loading == true">
            <CenterSpinner />
        </div>
        <div v-else class="container">
            <h2>My Loans</h2>
            <div class="row py-3">
                <div v-if="this.booksResult.length == 0">
                    <h3>There are no books registered as loaned by your user id ({{this.userId}})</h3>
                </div>
                <div
                    id="colCollection"
                    class="col py-2 mb-4"
                    sm="12"
                    lg="6"
                    xl="4"
                    v-else
                    v-for="book in booksResultSorted"
                >
                    <smallbookcard v-bind="book"></smallbookcard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import smallbookcard from "@/components/SmallBookCard";
import CenterSpinner from "@/components/CenterSpinner";
import axios from "axios";

export default {
    components: {
        smallbookcard,
        CenterSpinner
    },
    computed: {
        booksResultSorted: function() {
            return this.booksResult.sort(function(a, b) {
                return a.loan == false ? -1 : 1;
            });
        }
    },
    data() {
        return {
            nums: [1, 2, 3, 4, 5],
            booksResult: null,
            loading: true,
            errored: false,
            userId: 27940466
        };
    },
    mounted() {
        axios
            .get(
                "https://my-json-server.typicode.com/gkotecki/FakeBooksApi/books?loan.userId=" +
                    this.userId
            )
            .then(response => {
                this.booksResult = response.data;
            })
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    }
};
</script>
