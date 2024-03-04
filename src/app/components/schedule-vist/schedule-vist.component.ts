import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-schedule-visit',
  templateUrl: './schedule-visit.component.html',
  styleUrls: ['./schedule-visit.component.css'],
})
export class ScheduleVisitComponent implements OnInit {
  nurseSchedules: any[] = [];
  constructor(private ns: NurseService) {}

  ngOnInit() {
    this.allSchedule();
  }

  allSchedule() {
    this.ns.getAllNurses().subscribe((res) => {
      this.nurseSchedules = res.data;

      console.log('Schedules', this.nurseSchedules);
    });
  }
}
