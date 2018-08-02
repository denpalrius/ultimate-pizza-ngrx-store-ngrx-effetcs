import { Action } from "@ngrx/store";
import { Pizza } from "../../models/pizza.model";

export const LOAD_PIZZAS = "[Products] Load pizzas";
export const LOAD_PIZZAS_FAIL = "[Products] Load pizzas Fail";
export const LOAD_PIZZAS_SUCCESS = "[Products] Load pizzas Success";

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSucess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// action types
export type pizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSucess;
