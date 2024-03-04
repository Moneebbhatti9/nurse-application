import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleVisitComponent } from '../schedule-vist/schedule-vist.component';
import { HttpClient } from '@angular/common/http';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-all-nurses',
  templateUrl: './all-nurses.component.html',
  styleUrls: ['./all-nurses.component.css'],
})
export class AllNursesComponent implements OnInit {
  nurseList: any[] = [];
  amount: number = 0;
  selectedNurseList: any[] = [];

  constructor(private dialog: MatDialog, private ns: NurseService) {}
  ngOnInit(): void {
    this.allNurses();
  }

  allNurses() {
    this.ns.getAllNurses().subscribe((res) => {
      console.log(res);
      this.nurseList = res.data;
    });
  }

  selectAll() {
    this.selectedNurseList.push(...this.nurseList);
    this.nurseList = [];
    this.amount = 149 * this.selectedNurseList.length;
  }
  unSelectAll() {
    this.nurseList.push(...this.selectedNurseList);
    this.selectedNurseList = [];
    this.amount = 0;
  }

  selectNurse(index: number) {
    const removedNurse = this.nurseList.splice(index, 1)[0];
    this.selectedNurseList.push(removedNurse);
    this.amount += 149;
  }
  unSelectNurse(index: number) {
    const removedNurse = this.selectedNurseList.splice(index, 1)[0];
    this.nurseList.push(removedNurse);
    this.amount -= 149;
  }

  openScheduleVisitDialog(): void {
    const dialogRef = this.dialog.open(ScheduleVisitComponent, {
      width: '50%',
      height: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
    });
  }
}
