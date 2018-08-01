import { Pizza } from "../../models/pizza.model";
import * as fromState from "../actions/pizzas.action";

export interface PizzaState {
  pizzas: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  pizzas: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromState.pizzasAction
): PizzaState {
  switch (action.type) {
    case fromState.LOAD_PIZZAS: {
      return { ...state, loading: true, loaded: false };
    }
    case fromState.LOAD_PIZZAS_FAIL: {
      return { ...state, loading: false, loaded: false };
    }
    case fromState.LOAD_PIZZAS_SUCCESS: {
      return { ...state, loading: false, loaded: true };
    }
  }
  return state;
}
