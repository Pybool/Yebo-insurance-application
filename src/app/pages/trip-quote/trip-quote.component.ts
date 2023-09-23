import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-quote',
  templateUrl: './trip-quote.component.html',
  styleUrls: ['./trip-quote.component.css']
})
export class TripQuoteComponent {
  public tripType:string = 'One Way Trip'
  public isChecked:boolean = false;
  public quotes:any = {'life':false,'gadget':false,'accident':false,'vehicle':false}
  ngOnInit(){

  }

  showQuote($event:any,quote:string){
    const isChecked:boolean = $event.target.checked
    this.quotes[quote] = isChecked
  }

  toggleTripType($event:any){
    this.isChecked = $event.target.checked
    if(this.isChecked){
      this.tripType = 'Two Way Trip'
      return null
    }
    this.tripType = 'One Way Trip'
    return null
    
  }

}
