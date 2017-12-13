import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ProfileService } from '../../shared/profile/profile.service';

@Component({
  selector: 'bt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private service: ProfileService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.transactionForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  onFormSubmit() {
    console.log(this.transactionForm.get('name').value);
    this.service.createTransaction(this.transactionForm.get('name').value, this.transactionForm.get('price').value);
    this.dialog.closeAll();
  }

  onCancel() {
    this.dialog.closeAll();
  }
}
