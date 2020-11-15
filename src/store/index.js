import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let wish = window.localStorage.getItem('wishlist');

export const store = new Vuex.Store({
    state: {
        wish: wish ? JSON.parse(wish) : [],
        myVar:"test"
    },
    mutations: {
        saveWish(state) {
            localStorage.setItem('wishlist', JSON.stringify(state.wish))
        },
        addToWish(state, item) {
            let movieObject = {
                id: item.id,
                title: item.title,
                qty:1
            }

        let indexOfExistingMovie = state.wish.findIndex(
            (el) => el.id === movieObject.id
        );
        
        if(indexOfExistingMovie !== -1) {
            state.wish[indexOfExistingMovie].qty += 1
        }
        else {
            state.wish.push(movieObject);
        }
            this.commit('saveWish');
            console.log(state.wish);
        }
    },
    getters: {
    }
})