import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='';
  date='';
  amount: number = 0;
  miles: number = 0;

  onMilesChange(event:Event) {
    this.miles = parseFloat((<HTMLInputElement>event.target).value);
  }

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  constructor(private cdr: ChangeDetectorRef) { }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(event: Event) {
    this.date = (<HTMLInputElement>event.target).value;
    console.log(this.date);
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((<HTMLInputElement>event.target).value);
  }
  
}
