import { Component, ElementRef } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [FileUploadService]
})

export class UploadComponent {

  constructor(private fileUploader: FileUploadService,
    private element: ElementRef) { }

  uploadImage(): void {
    let files = this.element.nativeElement.querySelector('#image').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('image', file, file.name);
    this.fileUploader.uploadImage(formData)
      .subscribe((res) => {
        console.log(res);
        console.log('Image uploaded');
      })
  }
}
