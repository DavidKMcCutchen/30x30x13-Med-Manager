import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedFacade } from '@med-manager/core-state';
import { Med } from "@med-manager/api-interfaces";

@Component({
  selector: 'med-manager-med-info',
  templateUrl: './med-info.component.html',
  styleUrls: ['./med-info.component.scss']
})
export class MedInfoComponent {

  @Input() med: Med | null;


  constructor(
    private medFacade: MedFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/meds']);
  };

}
