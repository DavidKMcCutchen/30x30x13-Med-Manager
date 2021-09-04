import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Med } from "@med-manager/api-interfaces";

@Component({
  selector: 'med-manager-med-list',
  templateUrl: './med-list.component.html',
  styleUrls: ['./med-list.component.scss']
})
export class MedListComponent {
  @Input() meds: Med[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() medViewed = new EventEmitter();
}
