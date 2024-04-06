import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {

  editId: string = '';
  editIdIndex: number | null = null;

  dropdownList = [
    { item_id: 1, item_text: 'Raj' },
    { item_id: 2, item_text: 'Amit' },
    { item_id: 3, item_text: 'Rahul' }
  ];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  taskForm: FormGroup;

  showSuccessBanner: boolean = false;

  constructor(private route: ActivatedRoute) {   }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.editId = params.get('id');
      }
    );

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.taskForm = new FormGroup({
      name: new FormControl('', {validators: [Validators.required, Validators.pattern('[0-9]*')]}),
      desc: new FormControl('', {validators: [Validators.required]}),
      priority: new FormControl('Normal', {validators: [Validators.required]}),
      status: new FormControl('', {validators: [Validators.required]})
    });

    this.preFillIfEdit()
  }

  private preFillIfEdit(){
    if(this.editId != ''){
      const t = JSON.parse(localStorage.getItem('tasks'));
      t.forEach((element, index) => {
        if (element.id == this.editId){
          this.editIdIndex = index;
          this.taskForm.get('name').setValue(element.id);
          this.taskForm.get('desc').setValue(element.desc);
          this.taskForm.get('priority').setValue(element.priority);
          this.taskForm.get('status').setValue(element.status);
          this.selectedItems = element.assign;
        }
      });
    }
  }
  get name() {
    return this.taskForm.get('name');
  }

  get desc() {
    return this.taskForm.get('desc');
  }

  get priority() {
    return this.taskForm.get('priority');
  }

  get status() {
    return this.taskForm.get('status');
  }

  onTaskFormSubmit()
  {
    const frmBody = {
      'id': this.taskForm.get('name').value,
      'desc' : this.taskForm.get('desc').value,
      'priority': this.taskForm.get('priority').value,
      'assign': this.selectedItems,
      'status': this.taskForm.get('status').value,
      'timestamp': Date.now()
    }
    
    if (this.storeTasks(frmBody)){
      this.taskForm.reset();
      this.selectedItems = [];
    };
  }

  storeTasks(obj){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(this.editIdIndex == null){
      tasks.push(obj);
    } else{
      tasks[this.editIdIndex] = obj;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.showSuccessBanner = true;
    return true;
  }
}
