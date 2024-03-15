import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentService } from '../segment.service';
import { ResultModel } from '../result-model';
@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {

  data:ResultModel| null = null;
  segmentService:SegmentService = inject(SegmentService);

constructor() {
  this.data = this.segmentService.getResult();
}
}
