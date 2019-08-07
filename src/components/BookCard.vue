<template>
    <div>
        <div class="card" id="cardex" no-body @click="cardClick">
            <img class="card-img-top" :src="image" id="cardimg" />
            <div class="card-body d-flex flex-column" id="cardbody">
                <div class="card-text mb-0 mt-1">
                    <h6 class="ellipsis">
                        <b>{{name}}</b>
                    </h6>
                    <h6
                        class="ellipsis-2"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ea delectus magnam sed quas iste sapiente nisi placeat dolor nemo blanditiis, saepe dicta nesciunt in praesentium. Voluptatum sint iusto quaerat?</h6>
                </div>
                <div class="mt-auto">
                    <button
                        class="btn btn-primary"
                        id="btn"
                        v-if="loan==false"
                        @click.stop="borrowAlert"
                    >Borrow</button>
                    <button class="btn" disabled v-else @click.stop>Unavailable</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookCard",
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
    height: 416px;
    width: 235px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12), 1px 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
#cardex:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
#cardimg {
    height: 180px;
    width: 235px;
    object-fit: cover;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-height: 1.2em; /* fallback */
    max-height: 1.2em * 3; /* fallback */
}
.ellipsis-2 {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5; /* number of lines to show */
}
.btn {
    width: 100%;
    font-weight: 500;
    padding-bottom: 6px;
}
</style>
