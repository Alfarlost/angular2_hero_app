import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import { environment } from "../environments/environment"

import { Hero } from "./hero"

@Injectable()
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(
      this.http.get(environment.apiUri + 'heroes')
        .toPromise()
    )
  }

  getHero(id: number): Promise<Hero> {
    return Promise.resolve(
      this.http.get(environment.apiUri + 'heroes/' + id)
        .toPromise()
    )
  }

  updateHero(id: number, name: string): Promise<Hero> {
    return Promise.resolve(
      this.http.put(environment.apiUri + 'heroes/' + id, { name: name })
        .toPromise()
    )
  }
}
