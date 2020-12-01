import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;

  constructor(
    private meta: Meta,
    private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.name);
    this.meta.updateTag(
      {
        name: 'description',
        content: this.name
      });
  }
}
