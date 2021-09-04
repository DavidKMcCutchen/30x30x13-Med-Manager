import { Injectable } from '@angular/core';
import { NotificationsService } from '@med-manager/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as MedsActions from './meds.actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MedsActions.createMedSuccess),
        tap(() => this.notificationService.notify('Create Med Successful'))
      ),
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MedsActions.updateMedSuccess),
        tap(() => this.notificationService.notify('Update Med Successful'))
      ),
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MedsActions.deleteMedSuccess),
        tap(() => this.notificationService.notify('Delete Med Successful'))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
