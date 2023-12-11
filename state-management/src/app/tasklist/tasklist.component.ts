import { Component } from '@angular/core';
import { TaskDto } from '../dto/task-dto';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-tasklist',
  template: `
    <div>
      @for(task of taskList; track task.id) {
        <app-task [task]="task"
        (onDelete)="onTaskDelete($event)" />
      }@empty {
        <p class="text-center mt-2">No tasks yet!</p>
      }
    </div>
  `,
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

  constructor(private service: TaskService){

  }

  taskList: Array<TaskDto> = [
    new TaskDto(1, "Task 1"),
    new TaskDto(2, "Task 2", true),
    new TaskDto(3, "Task 3"),
    new TaskDto(4, "Task 4", true),
    new TaskDto(5, "Task 5"),
  ];

  onTaskDelete(task: TaskDto){
      const index = this.taskList.indexOf(task);
      this.taskList.splice(index, 1);
  }
}
