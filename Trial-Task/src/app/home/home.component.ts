import { HttpClient } from '@angular/common/http';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { User} from '../User'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  closeResult=''
  users: Array<User> = []
  count;
  user: User;
  constructor(private service: UserService, private modalService: NgbModal, private http: HttpClient) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }
  

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(res)
      },
      err => {console.log(err)}
    );
    
    
  }
  
  changed(user) {
    this.count = 0;
    this.users.forEach(item => {
      if (item['active']) {
        this.count = this.count + 1
      };
    });

    this.service.updateUser(user).subscribe(
      res => {
        console.log(res);
        },
        err => { console.log(err);
      }
    )
  }


  
}
