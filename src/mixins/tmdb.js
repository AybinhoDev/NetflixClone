const API_KEY = '8026a5cb6390d3443332938c416e8f3f';
const URL_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endPoint) => {
    const req = await fetch(`${URL_BASE}${endPoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {
        return [
            {
                slug: 'Original',
                title: 'Film originaux de NewFlix',
                items: await basicFetch(`/discover/tv?with_network=213&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'Latest',
                title: 'Les nouveautés',
                items: await basicFetch(`/movie/now_playing?api_key=${API_KEY}&language=en-US`) // le /movie/latest ne fonctionne pas
            },
            {
                slug: 'Upcoming',
                title: 'À venir',
                items: await basicFetch(`/movie/upcoming?api_key=${API_KEY}&language=en-US`)
            },
            {
                slug: 'Trend',
                title: 'Les plus regardés en ce moment',
                items: await basicFetch(`/trending/all/week?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'TopRated',
                title: 'Les mieux notés',
                items: await basicFetch(`/movie/top_rated?language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédie',
                items:await basicFetch(`/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items:await basicFetch(`/discover/movie?with_genres=27&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horreur',
                items:await basicFetch(`/discover/movie?with_genres=10749&language=en-US&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentaire',
                items:await basicFetch(`/discover/movie?with_genres=99&language=en-US&api_key=${API_KEY}`)
            },
        ]
    },

    getMoviePopular: async () => {
        return [
            {
                items: await basicFetch(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            }
        ]
    }
}