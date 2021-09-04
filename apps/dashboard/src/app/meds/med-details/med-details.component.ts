import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Med } from "@med-manager/api-interfaces";

@Component({
  selector: 'med-manager-med-details',
  templateUrl: './med-details.component.html',
  styleUrls: ['./med-details.component.scss']
})
export class MedDetailsComponent {
  currentMed: Med;
  originalTitle: string;


  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set med(value) {
    if (value) this.originalTitle = value.name;
    this.currentMed = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
