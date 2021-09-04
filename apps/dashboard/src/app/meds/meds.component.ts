import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Med, emptyMed } from '@med-manager/api-interfaces';
import { MedFacade } from '@med-manager/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'med-manager-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.scss']
})
export class MedsComponent implements OnInit {
  allMeds$: Observable<Med[]> = this.medFacade.allMeds$;
  selectedMed$: Observable<Med> = this.medFacade.selectedMeds$;

  form: FormGroup;

  constructor(
    private medFacade: MedFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.medFacade.mutations$.subscribe((_) => this.resetMed());
  }

  ngOnInit() {
    this.initForm();
    this.medFacade.loadMeds();
    this.resetMed()

    const medRouteId = this.route.snapshot.params['id'];

    if (medRouteId) {
      this.loadMed((medRouteId))
    }
  }

  viewMed(medId: string) {
    this.router.navigate(["meds", medId])
  }

  loadMed(medId: string) {
    this.medFacade.selectMed(medId);
    this.medFacade.loadMed(medId);
  }

  selectMed(med: Med) {
    this.medFacade.selectMed(med.id)
    this.form.patchValue(med);
  }

  saveMed(med: Med) {
    this.medFacade.saveMed(med);
  }

  deleteMed(med: Med) {
    this.medFacade.deleteMed(med);
  }

  resetMed() {
    this.form.reset();
    this.selectMed(emptyMed)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      genericName: [''],
      dosage: [''],
      halfLife: [''],
      indication: [''],
      stock: [''],
      rx: false
    })
  }
}
