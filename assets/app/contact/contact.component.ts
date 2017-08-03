import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  form: FormGroup;
  lat: number = 44.433059;
  lng: number = 26.053845;
  zoom: number = 14;
  label: string = 'EVO';
  title: string = 'Locatie EVO DESIGN CONSTRUCT';
  sendEmail = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required]),
      'subject': new FormControl(null)
    });
  };

  hovered(event: EventEmitter<MouseEvent>) {
    console.log('acoperit')
    console.log(event);
  }

  onSubmit() {
    const formData = {
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message,
      subject: this.form.value.subject,
    };

    this.contactService.sendEmail(formData)
      .subscribe(
      data => console.log(data),
      error => console.log(error));
    this.form.reset();
    this.sendEmail = true;
  };
}
