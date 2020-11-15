<template>
  <div class="index">

    <div class="movinRow" v-for="item in listMovie" :key="item.value">
      <h2 class="title">{{ item.title }}</h2>

      <div class="list-area">
        <div class="list">
          <div class="item" v-for="movie in item.items.results" :key="movie.item">
            <img :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`" alt="">
           
          </div>
        </div>
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

  },

  watch:{
    listPopularMovie:function(value){
      if(value.items.results.length > 0){
        console.log('Liste de film ')
        setTimeout(() => {
          this.carousel();
        }, 100);
      }
    },
  },

  methods:{

    carousel(){
      console.log('Appel de fonction')
      let indexImg = 0
      let imgLength = 0
      let img = document.getElementsByClassName('imgSlider');

      for(var i = 0; i < img.length; i++){
        console.log('Toutes les images',img.length )
        imgLength = img.length
        img[i].style.display = 'none';
      }
    
        console.log('INDEX', indexImg)

      img[indexImg].style.display = 'block'

      // indexImg++

      if(indexImg > img.length){
        indexImg = 0
      }

      // img[indexImg].style.display = 'none';
   setInterval(() => {
       indexImg++

        console.log('index', indexImg)

      img[indexImg-1].style.display = 'none';
      img[indexImg].style.display = 'block'

      if(indexImg >= imgLength){
        indexImg = 0
      }

   }, 6000);

    },

    setCarrouselInterval(){

    

    }

  }
}
</script>

<style>
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


