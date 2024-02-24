import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://vidafullstack.com.br/wp-content/uploads/2021/07/versao-12-angular-980x487.png"
  @Input()
  cardTitle:string ="Nova Versão do Angular"
  @Input()
  cardDescription:string ="Muitas novidades no Angular. Você pode construir seus projetos com muita facilidade, aproveitando as novas funcionalidades."

  constructor() { }

  ngOnInit(): void {
  }

}
