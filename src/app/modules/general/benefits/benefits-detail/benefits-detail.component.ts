import { Component, OnInit, Input } from '@angular/core';
import { BenefitTile } from 'src/app/models/benefit_tile';

@Component({
  selector: 'app-benefits-detail',
  templateUrl: './benefits-detail.component.html',
  styleUrls: ['./benefits-detail.component.scss']
})
export class BenefitsDetailComponent implements OnInit {

  @Input() benefit: BenefitTile;

  constructor() { }

  ngOnInit() {
  }

}
