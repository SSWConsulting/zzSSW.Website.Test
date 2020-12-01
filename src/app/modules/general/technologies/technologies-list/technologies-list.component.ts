import { Component, OnInit, Input } from '@angular/core';
import { TechnologyTile } from 'src/app/models/technology_tile';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.scss']
})
export class TechnologiesListComponent implements OnInit {

  @Input() technologies: TechnologyTile[];

  constructor() { }

  ngOnInit() {
  }

}
