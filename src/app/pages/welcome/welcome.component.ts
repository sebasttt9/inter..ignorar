import { Component, OnInit } from '@angular/core';
import { Mermaid1Component } from '../../Components/mermaid1/mermaid1.component';
import { Mermaid2Component } from '../../Components/mermaid2/mermaid2.component';
import { Mermaid3Component } from '../../Components/mermaid3/mermaid3.component';
import { Mermaid4Component } from '../../Components/mermaid4/mermaid4.component';


@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports : [Mermaid1Component, Mermaid2Component, Mermaid3Component, Mermaid4Component]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
