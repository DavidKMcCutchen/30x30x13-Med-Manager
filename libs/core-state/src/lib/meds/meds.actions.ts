import { createAction, props } from "@ngrx/store";
import {  Med } from "@med-manager/api-interfaces";

// Select Entity

export const selectMed = createAction(
    '[MEDS] Select Med',
    props<{ medId: string }>()
);

// Load all Entities

export const loadMeds = createAction(
    '[MEDS] Load Meds'
);

export const loadMedsSuccess = createAction(
    '[MEDS] Load Meds Success',
    props<{ meds: Med[]}>()
);

export const loadMedsFailed = createAction(
    '[MEDS] Load Meds Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadMed = createAction(
    '[MEDS] Load Med',
    props<{ medId: string}>()
);

export const loadMedSuccess = createAction(
    '[MEDS] Load Med Success',
    props<{ med: Med}>()
);

export const loadMedFailed = createAction(
    '[MEDS] Load Med Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createMed = createAction(
    '[MEDS] Create Med',
    props<{ med: Med}>()
);

export const createMedSuccess = createAction(
    '[MEDS] Create Med Success',
    props<{ med: Med}>()
);

export const createMedFailed = createAction(
    '[MEDS] Create Med Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateMed = createAction(
    '[MEDS] Update Med',
    props<{ med: Med}>()
);

export const updateMedSuccess = createAction(
    '[MEDS] Update Med Success',
    props<{ med: Med}>()
);

export const updateMedFailed = createAction(
    '[MEDS] Create Med Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteMed = createAction(
    '[MEDS] Delete Med',
    props<{ med: Med}>()
);

export const deleteMedSuccess = createAction(
    '[MEDS] Delete Med Success',
    props<{ med: Med}>()
);

export const deleteMedFailed = createAction(
    '[MEDS] Create Med Failed',
    props<{ error: any}>()
);