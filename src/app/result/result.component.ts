import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentService } from '../segment.service';
import { ResultModel } from '../result-model';
import { AnimatedBgComponent } from '../animated-bg/animated-bg.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule,AnimatedBgComponent,NavComponent,],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  serverUrl:string = "http://127.0.0.1:5000"
  data:ResultModel| null = null;
  segmentService:SegmentService = inject(SegmentService);

constructor() {
  this.data = this.segmentService.getResult();
  console.log(this.data?.processedImageURL);

}


}
