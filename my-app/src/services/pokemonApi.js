import axios from 'axios';

export function getPokemons() {
    return axios.get('https://pokeapi.co/api/v2/pokemon');
}

export function getPokemon(url) {
    return axios.get(url);
}