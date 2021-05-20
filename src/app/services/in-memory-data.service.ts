import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Ashe' },
      { id: 3, name: 'Baptiste' },
      { id: 4, name: 'Bastion' },
      { id: 5, name: 'Brigitte' },
      { id: 6, name: 'D.Va' },
      { id: 7, name: 'Doomfist' },
      { id: 8, name: 'Echo' },
      { id: 9, name: 'Genji' },
      { id: 10, name: 'Hanzo' },
      { id: 11, name: 'Junkrat' },
      { id: 12, name: 'Lucio' },
      { id: 13, name: 'McCree' },
      { id: 14, name: 'Mei' },
      { id: 15, name: 'Mercy' },
      { id: 16, name: 'Moira' },
      { id: 17, name: 'Orisa' },
      { id: 18, name: 'Pharah' },
      { id: 19, name: 'Reaper' },
      { id: 20, name: 'Reinhardt' },
      { id: 21, name: 'Roadhog' },
      { id: 22, name: 'Sigma' },
      { id: 23, name: 'Soldier: 76' },
      { id: 24, name: 'Sombra' },
      { id: 25, name: 'Symmetra' },
      { id: 26, name: 'Torbjorn' },
      { id: 27, name: 'Tracer' },
      { id: 28, name: 'Widowmaker' },
      { id: 29, name: 'Winston' },
      { id: 30, name: 'Wrecking Ball' },
      { id: 31, name: 'Zarya' },
      { id: 32, name: 'Zenyata' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }

}
