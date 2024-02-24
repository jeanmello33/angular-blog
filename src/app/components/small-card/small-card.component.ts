import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://pbs.twimg.com/profile_images/1093320615430213632/dA2G7rl7_400x400.jpg"

  @Input()
  cardTitle:string = "Games dos Principais Personagens da Marvel"

  constructor() { }

  ngOnInit(): void {
  }

}
