export default {

    methods: {
        // addToWish(movie) {
        //      //récupération du localStorage (bien penser à parser)
        //      let card = JSON.parse(localStorage.getItem('wishlist')) || [];
        //      let movieObject = {
        //          id: this.movie.id,
        //          title: this.movie.title
        //      }

        //      // Eventuellement le même id dans le localStorage
        //      let indexOfExistingMovie = card.findIndex(
        //          (el) => el.id === movieObject.id
        //      );

        //      //check si id du produit à ajouter est présent dans le panier
        //      //Si déjà présent, j'incrémente la prop qté
        //      if(indexOfExistingMovie !== -1) {
        //          card[indexOfExistingMovie].qty += 1
        //      }
        //      //Si il n'est pas présent, j'ajoute le nouveau produit au tableau Card
        //      else {
        //          card.push(movieObject)
        //      }

        //      //Je réinsère le nouveau tableau dans le localStorage (bien penser à Stringify)
        //      localStorage.setItem('wishlist', JSON.stringify(card));
        // },
        //supprimer toute la wishlist
        clearWish() {
            localStorage.removeItem('wishlist');
        },

        //Supprimer un produit de la wishlist
        removeItemWish(movie) {
            let card = JSON.parse(localStorage.getItem('wishlist'));
            const filteredCard = card.filter((item) => {
                return item.id !== movie.id
            })
            localStorage.setItem('wishlist', JSON.stringify(filteredCard));
        },

        getWish() {
            let card = JSON.parse(localStorage.getItem('wishlist'));
            return card;
        },
    }
}