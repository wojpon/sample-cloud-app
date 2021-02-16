import { Component, OnDestroy, OnInit } from '@angular/core';
import { Bike } from '../model/bike';
import { BikeService } from '../service/bike.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  dataSource : Bike[];
  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'model',
    'serialNumber',
    'purchasePrice',
    'purchaseDate',
  ];

  constructor(private BikeService: BikeService) {}

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes() {
    this.BikeService.getAllBikes().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
