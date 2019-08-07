<template>
    <div>
        <div class="card" id="cardex" no-body @click="cardClick">
            <img class="card-img-top" :src="image" id="cardimg" />
            <div class="card-body d-flex flex-column" id="cardbody">
                <div class="mt-1">
                    <h5 v-if="loan==false" class="text-center" id="available">Available</h5>
                    <h5 v-else class="text-center" id="loan">On Loan</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "smallbookcard",
    props: {
        id: Number,
        name: String,
        image: String,
        userId: Number,
        loan: {}
    },
    methods: {
        cardClick() {
            this.$router.push("bookdetails/" + this.id);
        },
        borrowAlert() {
            this.loan = true;
            alert("Borrowing book!");
        }
    }
};

/*
    "id": 89132676,
    "name": "Introdução à Programação com Python",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51qoFdDmLqL._SX360_BO1,204,203,200_.jpg",
    "userId": 13618055,
    "loan": {
        "userId": 27940466,
        "date": "2019-06-20"
    }
*/
</script>

<style scoped lang="scss">
#cardbody {
    padding-top: 5px;
}
#cardex {
    height: 300px;
    width: 200px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12), 1px 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
#cardex:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
#cardimg {
    height: 250px;
    width: 200px;
    object-fit: cover;
}
#available {
    color: green;
}
#loan {
    color: red;
}
</style>
