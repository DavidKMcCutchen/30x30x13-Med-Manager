import { Injectable } from "@angular/core";
import { Med } from "@med-manager/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as MedActions from './meds.actions';
import * as MedSelectors from './meds.selectors';
import * as fromMeds from './meds.reducer';


@Injectable({
    providedIn: 'root'
})

export class MedFacade {
    allMeds$ = this.store.pipe(
        map((state) => MedSelectors.getAllMeds(state)),
    )
    selectedMeds$ = this.store.pipe(select(MedSelectors.getSelectedMed));
    loaded$ = this.store.pipe(select(MedSelectors.getMedsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === MedActions.createMed({} as any) .type ||
        action.type === MedActions.updateMed({} as any) .type ||
        action.type === MedActions.deleteMed({} as any) .type 
        ))

        selectMed(medId: string) {
            this.dispatch(MedActions.selectMed({ medId }));
        };

        loadMeds() {
            this.dispatch(MedActions.loadMeds())
        };

        loadMed(medId: string) {
            this.dispatch(MedActions.loadMed({ medId }))
        };

        saveMed(med: Med) {
            med.id ? this.updateMed(med) : this.createMed(med)
        };

        createMed(med: Med) {
            this.dispatch(MedActions.createMed({ med }))
        };

        updateMed(med: Med) {
            this.dispatch(MedActions.updateMed({ med }))
        };

        deleteMed(med: Med) {
            this.dispatch(MedActions.deleteMed({ med }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromMeds.MedPartialState>,
            private actions$: ActionsSubject
        ) {}
}