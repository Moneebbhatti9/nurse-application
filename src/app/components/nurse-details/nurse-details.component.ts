import { Component } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurse-details',
  templateUrl: './nurse-details.component.html',
  styleUrls: ['./nurse-details.component.css'],
})
export class NurseDetailsComponent {
  data: any;
  constructor(private user: NurseService) {
    this.user.getAllNurses().subscribe((resp: any) => {
      this.data = resp.data;
      console.log(this.data);
    });
  }
}
