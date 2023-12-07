import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '../task-list/task-list.component';

@Component({
  selector: 'app-task',
  template: `
    <div class="flex justify-between p-2 
        rounded-md items-center
       hover:bg-slate-100">
      <div>
        <input class="cursor-pointer"
            [checked]="task?.status"
             id="chk-{{task?.id}}" type="checkbox">
        <label class="px-2 cursor-pointer" 
            for=chk-{{task?.id}}>
          {{task?.description}}
        </label>
      </div>
      <button 
      (click)="handleDelete()"
      class="border py-0.5 px-2 
      hover:bg-red-400
      border-red-300 rounded-md shadow">
        Delete
      </button>
    </div>
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input()
  task?: TaskType;

  @Output()
  onDelete = new EventEmitter<number>();

  handleDelete(){
    this.onDelete.emit(this.task!.id);
  }
}
