import { Med } from "@med-manager/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as MedActions from './meds.actions';

export const MED_FEATURE_KEY = 'meds';

export interface MedState extends EntityState<Med> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface MedPartialState {
    readonly [MED_FEATURE_KEY]: MedState
};

export const medAdapter: EntityAdapter<Med> = createEntityAdapter<Med>();

export const initialMedState: MedState = medAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): MedState => ({ ...state, error});

const onDispatch = (state, action): MedState => ({
    ...state,
    loaded: false,
    error: null
});

const _medReducer = createReducer(
    initialMedState,
    on(
        MedActions.loadMedFailed,
        MedActions.loadMedsFailed,
        MedActions.createMedFailed,
        MedActions.updateMedFailed,
        MedActions.deleteMedFailed,
        onFailed
    ),
    on(
        MedActions.loadMed,
        MedActions.loadMeds,
        MedActions.createMed,
        MedActions.updateMed,
        MedActions.deleteMed,
        onDispatch
    ),
    on(
        MedActions.loadMedSuccess, (state, { med }) =>
        medAdapter.upsertOne(med, {...state, loaded: true})
    ),
    on(
        MedActions.selectMed, (state, { medId }) => ({
            ...state,
            selectedId: medId
        })
    ),
    on(
        MedActions.loadMedsSuccess, (state, { meds }) =>
        medAdapter.setAll(meds, {...state, loaded: true})
    ),
    on(
        MedActions.deleteMedSuccess, (state, { med }) =>
        medAdapter.removeOne(med.id, {...state, loaded: true})
    ),
    on(
        MedActions.updateMedSuccess, (state, { med }) =>
        medAdapter.updateOne(
            {id: med.id, changes: med},
            {...state, loaded: true}
        )
    ),
    on(
        MedActions.createMedSuccess, (state, {med }) =>
        medAdapter.addOne(med, {...state, loaded: true})
    ),
)

export function medReducer(
    state: MedState | undefined,
    action: Action
) {
    return _medReducer(state, action)
}