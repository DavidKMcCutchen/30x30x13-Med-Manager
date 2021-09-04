import { ActionReducerMap } from "@ngrx/store";
import * as fromMeds from './meds/meds.reducer';

export interface AppState {
    [fromMeds.MED_FEATURE_KEY]: fromMeds.MedState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromMeds.MED_FEATURE_KEY]: fromMeds.medReducer
};