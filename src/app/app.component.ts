// Importing necessary modules and components from Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from './User'; // Assuming User is a custom model or interface defined in User.ts

@Component({
  selector: 'app-root', // Component selector
  standalone: true, // Indicates whether the component is standalone
  imports: [FormsModule, NgFor, NgIf, RouterOutlet, CommonModule], // Importing necessary Angular modules
  templateUrl: './app.component.html', // Template file path for the component
  styleUrl: './app.component.css' // CSS file path for the component
})
export class AppComponent {

  // Array containing task names
  tasks = ['Components', 'Directives', 'Dependency Injection', 'Binding', 'Routing and Navigation', 'Forms'];

  // Variable to track whether a task has an error or not
  taskHasError = true;

  // Creating a new instance of the User class with default values
  userModel = new User('', 'john123@gmail.com', 9988776655, 'default', 'weekdays', true);

  // Function to validate the selected task
  validateTask(value: string) {
    if (value === 'default') { // Checking if the selected task is default
      this.taskHasError = true; // Setting taskHasError to true if the selected task is default
    } else {
      this.taskHasError = false; // Setting taskHasError to false if the selected task is not default
    }
  }

  // Function to handle form submission
  onSubmit() {
    console.log(this.userModel); // Logging the user model object to the console
  }
}
