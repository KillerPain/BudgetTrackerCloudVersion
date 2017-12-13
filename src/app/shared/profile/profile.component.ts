import { Component, OnInit } from '@angular/core';
import { AwsService } from '../../services/aws.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FileComponent } from '../../file/file.component';
import { ProfileService } from './profile.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'bt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<FileComponent>;
  profile: any = {};
  photo: string;

  constructor(private service: AwsService, private dialog: MatDialog, private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(data => {
      console.log(data);
      this.profile = data;
    });
    setInterval(() => {
      this.profileService.getPhoto(this.profile.email).subscribe((data: any) => {
        console.log(this.profile.username);
        this.photo = 'https://s3.us-east-2.amazonaws.com/budjet-avatar/' + JSON.parse(data)['data'];
      });
    }, 500);
    this.profileService.getRss();
  }

  uploadImage() {
    this.fileNameDialogRef = this.dialog.open(FileComponent);
    this.fileNameDialogRef.componentInstance.username = this.profile.email;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.componentInstance.username = this.profile.username;
    dialogRef.componentInstance.firstname = this.profile.firstname;
    dialogRef.componentInstance.lastname = this.profile.lastname;
    dialogRef.componentInstance.email = this.profile.email;
  }
}
