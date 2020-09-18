import { Component, OnInit } from '@angular/core';
import SampleJson from './carrier_cards.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'my-app';
  public searched;
  public searchTime;
  public cardData;
  public minute;

  ngOnInit() {
    this.cardData = SampleJson;
    this.searched = this.cardData.carriers_searched;
    this.searchTime = Math.round(this.cardData.search_time / 60000);
    this.minute = this.searchTime > 1 ? ' minutes' : ' minute';

    // testing onPush
    // setTimeout(() => {
    //   this.cardData.carrier_cards = this.cardData.carrier_cards.map((c, idx) => {
    //     if (idx === 0) {
    //       return {...c, name: 'Test Change'};
    //     }
    //     return {...c};
    //   });
    // }, 2000);
  }

}
