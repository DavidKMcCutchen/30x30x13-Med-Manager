import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedFacade } from '@med-manager/core-state';

@Component({
  selector: 'med-manager-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.scss']
})
export class MedComponent implements OnInit {

  currentMed$ = this.medFacade.selectedMeds$


  constructor(
    private medFacade: MedFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const medId = this.route.snapshot.params.id;
    this.loadMed(medId);
  }

  loadMed(medId: string) {
    this.medFacade.selectMed(medId);
    this.medFacade.loadMed(medId);
  }

  navigateBack() {
    this.router.navigate(['/meds']);
  };

}

