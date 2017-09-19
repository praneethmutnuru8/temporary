import {HttpModule, Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Mod } from './Mod';

@Injectable()

export class CommentService {
    http: Http;
    returnCommentStatus: Object = [];
    posts_Url: string = 'http://172.23.238.209:8080/hackathon';
    constructor(public _http: Http) {
       this.http = _http;
    }
    postComment(message: Mod) {
        return this.http.post(this.posts_Url, Mod, {
        })
       .map(res =>  res.json());
   }
 }
