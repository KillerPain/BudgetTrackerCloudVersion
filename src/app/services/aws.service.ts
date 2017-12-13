import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import { UUID } from 'angular2-uuid';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Injectable()
export class AwsService {

  constructor(private http: HttpClient) {
    AWS.config.update({  
    });
  }

  // TODO https://zv5yt8g8j2.execute-api.us-east-2.amazonaws.com/test/avatar/save   Post {'username': " ", "filename":""}
  // TODO https://zv5yt8g8j2.execute-api.us-east-2.amazonaws.com/test/avatar/getbyusername   Post {'username': " ", } 
  

  uploadFile(file: any, username: string) {
    console.log('uploadFile')
    console.log(file.name)
    console.log(username)
    let newName = file.name.split('.');
    newName = newName[newName.length - 1];
    let id = UUID.UUID();
    newName = id + '.' + newName;

    // console.log(newName);
    // this.Service.registerImageUpload(newName, board_id).subscribe(data=>{
    //   console.log(data);
    // });

    this.http.post('https://zv5yt8g8j2.execute-api.us-east-2.amazonaws.com/test/avatar/save', {username: username, filename: newName}).toPromise().then(
      data => {
        console.log(data);
      }
    ).catch(error => {
      console.log(error);
    });
    var bucket = new AWS.S3({ apiVersion: '2006-03-01', params: { Bucket: 'budjet-avatar' } });
    var params = { Key: newName, Body: file, ACL: 'public-read' } as PutObjectRequest;
    bucket.upload(params, function (err, data) {
      console.log(err, data);
      if (err == null) {
        let location = data['Location']

        console.log('no error')
      }
    });

  }

}
