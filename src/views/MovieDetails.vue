<template>
    <div class="movie__detail">
        <TitlePage :title="movie.title"/>
        <p>{{movie.description}}</p>
        <Button btnTitle="Ajouter à la wishlist" classList="btn btn-red" :btnFunction="()=>addToWish(movie)"/>
    </div>
</template>

<script>
    import Button from "../components/Button";
    import Card from "../mixins/Card";
    
    export default {
        components: {
            Button
        },
        data: function () {
            return {
                movie:{}
            }
        },
        mixins: [Card],
        created() {
            console.log(this.$route.params.id);
            this.getMovie(this.$route.params.id)
            .then(data=> this.movie=data)
            .catch(err=> console.log(err))
        }
    }
</script>

<style lang="scss" scoped>
</style>