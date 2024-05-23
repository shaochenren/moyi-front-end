// mainpage.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../../services/student.info.service';
import { Info } from '../../model/info.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  infos: Info[] = [];
  newInfo: Info = {id: -1, feedback: '', hw: '', mockquestions: '', date: '' };

  constructor(private infoService: StudentInfoService) { }

  ngOnInit(): void {
    this.loadAllInfos();
  }

  loadAllInfos(): void {
    this.infoService.getAllInfo().subscribe(data => {
      this.infos = data;
    });
  }

  addInfo(): void {
    this.infoService.addInfo(this.newInfo).subscribe(info => {
      this.infos.push(info);
      this.newInfo = {id: -1, feedback: '', hw: '', mockquestions: '', date: '' };
    });
  }

  deleteInfo(id: number | undefined): void {
    if (id === undefined) {
      console.error('Attempted to delete an item with an undefined ID');
      return;
    }
    this.infoService.deleteInfo(id).subscribe(() => {
      this.infos = this.infos.filter(info => info.id !== id);
    }, error => {
      console.error('Failed to delete info:', error);
    });
  }
}
