import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'; //(1) Import the HttpService 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Pokemon API';

  constructor(private _httpService: HttpService){}; // (2) Make HttpService as an attribute in the class.
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.getPokemonFromService();
  }
  getPokemonFromService(){
    var arr = [];
 
    // First API Call
    let bulbasaur = this._httpService.getPokemon();
    bulbasaur.subscribe(data => {

      let pokemonName = data['name'];
      for (const i of data['abilities']) {
          arr.push(i.ability.name);
      }
      // console.log(arr);
      console.log(`${pokemonName.toUpperCase()}'s abilities are ${arr[0]} and ${arr[1]}.`); 
      
      // Second API Call
      var nCount=0;
      let all_pokemon = this._httpService.getAbility();
      all_pokemon.subscribe(sData => {
        for (const i of sData['results']) {
          // console.log(arr, " VS " ,i.name);
          // [1, 2, 3].includes(2); 
          if (arr.includes(i.name)){
            nCount += 1;
          }
        }
        console.log(`${nCount} Pokemon share my favorite Pokemon's abilities.`);
      });
     
    });


  }  

}
