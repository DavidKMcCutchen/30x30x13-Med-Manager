import { emptyMed } from "@med-manager/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { medAdapter, MedState, MED_FEATURE_KEY } from "./meds.reducer";

export const getMedState = createFeatureSelector<MedState>(MED_FEATURE_KEY);

const { selectAll, selectEntities } = medAdapter.getSelectors();

export const getMedsLoaded = createSelector(
    getMedState,
    (state: MedState) => state.loaded
);

export const getMedError = createSelector(
    getMedState,
    (state: MedState) => state.error
);

export const getAllMeds = createSelector(
    getMedState,
    (state: MedState) => selectAll(state)
);

export const getMedEntities = createSelector(
    getMedState,
    (state: MedState) => selectEntities(state)
);

export const getSelectedMedId = createSelector(
    getMedState,
    (state: MedState) => state.selectedId
);

export const getSelectedMed = createSelector(
    getMedEntities,
    getSelectedMedId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyMed
);