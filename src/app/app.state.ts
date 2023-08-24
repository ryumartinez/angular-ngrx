import {ItemState} from "@core/models/Item.state";
import {ActionReducerMap} from "@ngrx/store";
import {itemsReducer} from "./state/reducers/items.reducer";

export interface AppState{
  itemsList: ItemState
}

export const ROOT_REDUCER : ActionReducerMap<AppState> = {
  itemsList: itemsReducer
}
