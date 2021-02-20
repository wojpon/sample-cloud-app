import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bike } from '../model/bike';
import { BikeService } from '../service/bike.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {

  bike: Bike = new Bike();

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.bikeService.postBikeForm(this.bike).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }
}
