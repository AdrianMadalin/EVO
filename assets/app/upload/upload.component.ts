import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/portofoliu/upload/evo';

@Component ({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {

//uploadImageForm: FormGroup;

  ngOnInit() {
//    this.uploadImageForm = new FormGroup({
//      description: new FormControl(null, Validators.required),
//      image: new FormControl(null)
//    })
  };

//  onSubmit() {
//    console.log(this.uploadImageForm);
//  }


  onSubmit() {

  }

}
