import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'bt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  editForm: FormGroup;

  username = '';
  firstname = '';
  lastname = '';
  email = '';

  constructor(private fb: FormBuilder, private dialog: MatDialog, private service: ProfileService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.fb.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      email: ['']
    });
  }

  onFormSubmit() {
    console.log(this.editForm.get('name').value);
    console.log(this.username);
    this.service.editProfile(this.editForm.get('username').value || '', this.editForm.get('firstname').value || '',
              this.editForm.get('lastname').value || '', this.editForm.get('email').value || '');
    this.dialog.closeAll();
  }

  onCancel() {
    this.dialog.closeAll();
  }
}
