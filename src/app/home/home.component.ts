import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BodyComponent } from '../body/body.component';
import { AnimatedBgComponent } from '../animated-bg/animated-bg.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,BodyComponent,AnimatedBgComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
