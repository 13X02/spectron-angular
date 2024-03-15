import { Injectable } from '@angular/core';
import { ImageSnippet } from './ImageSnippet';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResultModel } from './result-model';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  getResult(): ResultModel | null {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient,private router: Router) { }
  result:ResultModel|undefined;

  processFile(imageInput: any): Promise<ImageSnippet>{
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.addEventListener('load', (event: any) => {
        resolve(new ImageSnippet(event.target.result, file));
      });

      reader.readAsDataURL(file);
    });
  }

  async submitImage(image: ImageSnippet) {
    const formData = new FormData();
    formData.append('image', image.file);
    this.http.post('http://127.0.0.1:5000/predict', formData).subscribe(
      async (res: any) => {
        console.log(res);
        this.result = res;
        console.log('result',this.result?.processedImageURL);
        this.router.navigate(['/result']);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log('submitting image');
  }
}
