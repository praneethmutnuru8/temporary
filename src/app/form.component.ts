
import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from './form.service';
import { Mod } from './Mod';


@Component({
  moduleId: module.id,
  selector: 'my-form',
  templateUrl: './form.component.html',
  providers: [CommentService]
})
export class FormComponent {


  model = new Mod(0, '', '', '', '');

  submitted = false;

 onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
export class CommentsComponent implements OnInit {

     constructor(private _commentService: CommentService) { }

     @Input() message: Mod;
      responseStatus: Object= [];
      status: boolean ;

     submitPost()
      {
         console.log('submit Post click happend ' + this.message.name);
          this._commentService.postComment(this.message).subscribe(
             data => console.log(this.responseStatus = data),
             err => console.log(err),
             () => console.log('Request Completed')
          );
          this.status = true;
      }
      ngOnInit() {
         this.message = new Mod(0, '', '', '', '');
         this.message.name = 'keysandstokes';
      }
  }
