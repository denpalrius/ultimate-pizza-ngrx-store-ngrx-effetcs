import { Injectable } from "@angular/core";

import { of } from "rxjs";
import { Effect, Actions } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";

import * as pizzaActions from "../actions";
import * as fromServices from "../../services";

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSucess(pizzas)),
        // catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        catchError(error => of(new pizzaActions.ActionError(error)))
      );
    })
  );
}
