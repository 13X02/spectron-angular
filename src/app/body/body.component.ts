import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentService } from '../segment.service';
import { ImageSnippet } from '../ImageSnippet';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {


  selectedFile: ImageSnippet | null = null;

  uploadedImage: string | null = null;


  segmentService:SegmentService = inject(SegmentService);

  processFile(imageInput: any) {


    this.segmentService.processFile(imageInput).then((imageSnippet: ImageSnippet) => {
      this.selectedFile = imageSnippet;
    }
    );
  }
  submitImage() {
    if (this.selectedFile) {
      this.segmentService.submitImage(this.selectedFile);
    }
  }

}
