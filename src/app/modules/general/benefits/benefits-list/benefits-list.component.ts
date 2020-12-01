import { Component, OnInit, Input } from '@angular/core';
import { BenefitsList } from 'src/app/models/benefits_list';

@Component({
  selector: 'app-benefits-list',
  templateUrl: './benefits-list.component.html',
  styleUrls: ['./benefits-list.component.scss']
})
export class BenefitsListComponent implements OnInit {

  @Input() benefits: BenefitsList;

  constructor() { }

  ngOnInit() {
  }

}
