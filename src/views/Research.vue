<template>
<div class="index">
  <div class="moviePopular">
    <h2>Film populaire</h2>
         <div class="search__form">
            <input type="text" name="searchValue" v-model="searchValue"/>
        </div>
        
      <div class="itemPopular">
        <center>
         <section class="popular-area" v-if="listPopularMovie">
            <div class="" v-for="popular in listPopularMovie.items.results" :key="popular.results"><br>
            
             <img :src="`https://image.tmdb.org/t/p/original${popular.backdrop_path}`" class="imgFilm" alt=""> <br>
            <h5> {{popular.title}} </h5>
            <p>rate : {{popular.vote_average}} <i class="fas fa-star"></i> </p>
           </div> 
         
        </section>
        </center>
        </div>
  </div>
</div>
  
  
</template>

<script>
import Tmdb  from '../mixins/tmdb';

export default {
  name: 'index',

  data: function(){
    return{
      listMovie: null,
      listPopularMovie: null,
      popularImage: []

    }
  },

  props:['dialog'],

  mounted(){
    Tmdb.getHomeList().then( value => {
    this.listMovie = value
    console.log('Liste de film', this.listMovie)

    }).catch(err => {
      console.log('Erreur !!', err);
    })

    Tmdb.getMoviePopular().then( value => {
      this.listPopularMovie = value[0]

      console.log('Liste de film populaire', this.listPopularMovie)

    }).catch(err => {
      console.log('Erreur sur les films populaires !!', err)
    })

  }
  }

</script>

<style>

.imgFilm{
    width: 30%;
    height: auto;
}
.movinRow{
  margin-bottom: 30px;
}
.movinRow h2{
  margin: 0px 0px 0px 30px;
}
.list-area{
  overflow-x: hidden;
  margin-left: 30px;
}
.list{
  width: 99999999999px;
}
.item{
  display: inline-block;
  width: 200px;
  padding: 5px;
  cursor: pointer;
}
.item img{
  max-width: 100%;
  transform: scale(0.9);
  transition: all ease 0.3s;
}
.item img:hover{
  transform: scale(1);
}
.popular-area{
  background-size: 'cover';
  background-position: 'center';
}
.imgSlider{
  display: none;
  width: 100%;
}

.icones{
  background-color: #ffffff;
}

</style>


