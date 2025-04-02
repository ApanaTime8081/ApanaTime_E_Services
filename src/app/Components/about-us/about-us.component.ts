import { Component } from '@angular/core';
import { AboutComponent } from "../home/about/about.component";
import { TeamComponent } from '../home/team/team.component';

@Component({
  selector: 'app-about-us',
  imports: [AboutComponent, TeamComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
