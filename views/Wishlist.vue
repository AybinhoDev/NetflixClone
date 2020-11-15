<template>
    <div class="wish__page">
        <TitlePage title="Ma wishlist"/>
        <Button classList="btn btn-red" btnTitle="Vider la wishlist" :btnFunction="clearWishAndRefresh"/>
        <div class="card__content">
            <table v-if="cardArray">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Film</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="movie in cardArray" :key="movie.id">
                        <td>
                            {{movie.id}}
                        </td>
                        <td>
                            {{movie.title}}
                        </td>
                        <td>
                            <button @click="()=>removeQty(movie)">-</button>

                        </td>
                        <td>
                            <button @click="() => deleteItem(movie)">delete</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
            <p v-else> 
                Votre Wishlist est vide
            </p>
        </div>
    </div>
</template>

<script>
    
    import Button from "../components/Button";
    import Card from "../mixins/Card";

    export default {
        name:"Wishlist",
        mixins:[Card],
        components:{
            Button,
            Card
        },
        data: function () {
            return {
                cardArray:[],
            }
        },
        created() {
            this.cardArray = this.getWish();
        },

        methods: {
            clearWishAndRefresh: function() {
                this.clearWish();
                this.cardArray=this.getWish();
            },
            removeQty: function(movie) {
                this.removeOneQty(movie);
                this.cardArray=this.getWish();
            },
            deleteItem: function(movie) {
                this.removeItemWish(movie);
                this.cardArray=this.getWish();
            }
        },
    }
</script>

<style>
table {
    margin: 30px auto;
}
</style>