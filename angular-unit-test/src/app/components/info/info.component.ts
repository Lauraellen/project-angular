import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  list: any = [];

  ngOnInit(): void {
    this.list.push(
      {
        name: 'Dart Vader'
      },
      {
        name: 'Luke Skywalker'
      },
      {
        name: 'Leia'
      }
    )
  }
  
}
