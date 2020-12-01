import { Component, OnInit, Input } from '@angular/core';
import { TechnologyTile } from 'src/app/models/technology_tile';

@Component({
  selector: 'app-technologies-detail',
  templateUrl: './technologies-detail.component.html',
  styleUrls: ['./technologies-detail.component.scss']
})
export class TechnologiesDetailComponent implements OnInit {

  @Input() technology: TechnologyTile;

  constructor() { }

  ngOnInit() {
  }

}
