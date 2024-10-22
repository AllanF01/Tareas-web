import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../domain/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  title = '';
  description = '';
  
  @Output() taskCreated = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const newTask: Task = {
      id: 0,  // ID temporal
      title: this.title,
      description: this.description,
      completed: false
    };
    this.taskService.addTask(newTask).subscribe(task => {
      this.taskCreated.emit(task);
      this.title = '';
      this.description = '';
    });
  }

}
