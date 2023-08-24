import {ItemModel} from "@core/models/Item.interface";
import {createReducer, on} from "@ngrx/store";
import {loadItems} from "../actions/items.actions";
import {ItemState} from "@core/models/Item.state";

//Estado inicial
export const initialState : ItemState = {loading:false, items:[]}

export const itemsReducer = createReducer(
  initialState,
  on(loadItems,(state) => {
    return {...state, loading: true}
  })
);
