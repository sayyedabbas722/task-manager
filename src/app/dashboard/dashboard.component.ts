import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit {
  taskData:any = [];
  tableData:any = [];
  page: number = 1;
  perpage: number = 5;
  showNext: boolean = false;

  //Dont Change anything below this line
  startItem = (this.page - 1) * this.perpage;
  endItem = (this.page * this.perpage);

  ngOnInit(): void {
    let t = localStorage.getItem('tasks');
    if (t === null){
      localStorage.setItem('tasks', JSON.stringify(this.taskData))
    }else {
      this.taskData = JSON.parse(t);
      this.buildPagination();
    }
  }

  onNext(){
    if (this.page >= 1){
      this.page = this.page + 1;
      this.buildPagination();
    }
  }

  onPrevious(){
    if (this.page >= 2){
      this.page = this.page - 1;
      this.buildPagination();
    }
  }

  buildPagination(){
    this.startItem = (this.page - 1) * this.perpage;
    this.endItem = (this.page * this.perpage);
    this.tableData = this.taskData.slice(this.startItem, this.endItem);

    if (Math.ceil(this.taskData.length / this.perpage) >= 1){
      this.showNext = true;
    }else {
      this.showNext = false;
    }
  }
}
