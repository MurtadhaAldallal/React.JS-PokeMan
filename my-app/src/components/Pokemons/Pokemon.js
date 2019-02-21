import React, { Component } from 'react';
import { getPokemons, getPokemon } from '../../services/pokemonApi';

class Pokemons extends Component {
  
   constructor() {
       super();
       this.state = { pokemons: [], selectedPokemon: null };
   }
   
    componentDidMount() {
        getPokemons().then((response) => {
            console.log(response);
            this.setState({ pokemons: response.data.results });

        });
    }
    selectPokemon(e,pokemon) {
        e.preventDefault();
        getPokemon(pokemon.url).then((result) => {
            console.log(result);
            this.setState({ selectedPokemon: result.data });
        });
    }

    renderPokemons() {
        return this.state.pokemons.map((pokemon) => {
            return <div key={pokemon.name}>
           <a href="" onClick={(e) => this.selectPokemon(e, pokemon) }>{ pokemon.name } </a> </div>
        });
    }
  
    render() {
    return (
        <div>
        <div> <b>My Pokemons</b> <br></br></div>
        { this.renderPokemons() }
        <div> {this.state.selectedPokemon && <img style={{width: '200px'}} src={this.state.selectedPokemon.sprites.front_default} /> }</div>
        </div> 
    );
     
  }
}

export default Pokemons;