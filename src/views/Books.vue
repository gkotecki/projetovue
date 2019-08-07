<template>
    <div class="books">
        <div v-if="loading == true">
            <CenterSpinner />
        </div>
        <div class="container" v-else>
            <h2>Books Available</h2>
            <div class="row py-3">
                <div
                    id="colCollection"
                    class="col py-2 mb-4"
                    sm="12"
                    lg="6"
                    xl="4"
                    v-for="book in booksResultSorted"
                >
                    <bookcard v-bind="book"></bookcard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BookCard from "@/components/BookCard";
import CenterSpinner from "@/components/CenterSpinner";
import axios from "axios";
const bookcard = BookCard;

export default {
    components: {
        bookcard,
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
            errored: false
        };
    },
    mounted() {
        axios
            .get(
                "https://my-json-server.typicode.com/gkotecki/FakeBooksApi/books"
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

<style lang="scss" scoped>
</style>
