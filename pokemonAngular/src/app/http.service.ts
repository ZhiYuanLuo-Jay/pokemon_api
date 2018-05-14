import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getPokemon();
  }


  
  getPokemon(){
    var arr = [];
    // First API Call
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/12');
    bulbasaur.subscribe(data => {

      let pokemonName = data['name'];
      for (const i of data['abilities']) {
          arr.push(i.ability.name);
      }
      console.log(arr);
      console.log(`${pokemonName}'s abilities are ${arr[0]} and ${arr[1]}.`); 
      
      // Second API Call
      var nCount=0;
      let all_pokemon = this._http.get('https://pokeapi.co/api/v2/ability');
      all_pokemon.subscribe(sData => {
        for (const i of sData['results']) {
          // console.log(arr, " VS " ,i.name);
          // [1, 2, 3].includes(2); 
          if (arr.includes(i.name)){
            nCount += 1;
          }
        }
        console.log(nCount, " Pokemon share my favorite Pokemon's abilities.");
      });
     
    });

  }

}
