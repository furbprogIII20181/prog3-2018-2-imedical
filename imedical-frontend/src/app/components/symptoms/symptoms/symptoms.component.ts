import { HomeService } from './../../../containers/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit() {}
}
