import { Component, OnInit } from '@angular/core';
import { AwsService } from '../services/aws.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'bt-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  public newPinDesc: string;
  public newPinBoardId: string;
  username;
  private file: any;

  constructor(private awsService: AwsService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  uploadFile() {
    this.awsService.uploadFile(this.file, this.username);
    this.dialog.closeAll();
  }

  fileEvent(fileInput: any) {
    this.file = fileInput.target.files[0];
  }
}
