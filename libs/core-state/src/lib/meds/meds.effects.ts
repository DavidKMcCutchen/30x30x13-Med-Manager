import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Med } from "@med-manager/api-interfaces";
import { MedsService } from "@med-manager/core-data";
import * as MedActions from './meds.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class MedEffects{
    loadMed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MedActions.loadMed),
            fetch({
                run: (action) =>
                    this.medsService
                        .find(action.medId)
                        .pipe(map((med: Med) => MedActions.loadMedSuccess({ med }))),
                    onError: (action, error) => MedActions.loadMedFailed({ error })    
            })
        ));
    loadMeds$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MedActions.loadMeds),
            fetch({
                run: () =>
                    this.medsService
                    .all()
                    .pipe(
                        map((meds: Med[]) => MedActions.loadMedsSuccess({ meds }))
                    ),
                onError: (action, error) => MedActions.loadMedsFailed({ error })    
            })
        ));
        createMed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MedActions.createMed),
            pessimisticUpdate({
                run: (action) =>
                    this.medsService
                        .create(action.med)
                        .pipe(map((med: Med) => MedActions.createMedSuccess({ med }))),
                    onError: (action, error) => MedActions.createMedFailed({ error })    
            })
    ));

    updateMed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MedActions.updateMed),
            pessimisticUpdate({
                run: (action) =>
                    this.medsService
                        .update(action.med)
                        .pipe(map((med: Med) => MedActions.updateMedSuccess({ med}))),
                    onError: (action, error) => MedActions.updateMedFailed({ error })    
            })
    ));

    deleteMed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MedActions.deleteMed),
            pessimisticUpdate({
                run: (action) =>
                    this.medsService
                        .delete(action.med)
                        .pipe(
                            map(() => MedActions.deleteMedSuccess({ med: action.med }))
                        ),
                    onError: (action, error) => MedActions.deleteMedFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private medsService: MedsService
    ) {}    
}