'use strict';
import 'core-js/stable';

class Task {
  constructor(task) {
    this.task = task;
  }

  taskTemplate() {
    return `
    <li class="task-item d-flex justify-content-between">
      <span>${this.task}</span>
      <i class="icon" data-feather="check-circle"></i>
    </li>
    `;
  }
}

class App {
  #taskUserInput = document.querySelector('.task-input');
  #taskAddBtn = document.querySelector('.btn-add');
  #taskContainer = document.querySelector('.task');
  #tasksSection = document.querySelector('.tasks-section');

  constructor() {
    this.#taskAddBtn.addEventListener('click', this._addTaskHandler.bind(this));
    this.#taskContainer.addEventListener(
      'click',
      this._taskDoneHandler.bind(this)
    );
  }

  _addTaskHandler() {
    const userInput = this.#taskUserInput.value.trim();

    if (!userInput) return;

    this._showTasksSection();

    this._render(userInput);

    feather.replace();

    this._clearInput();
  }

  _taskDoneHandler(e) {
    if (!e.target.classList.contains('icon')) return;
    console.log('clicked');

    const taskElement = e.target.closest('.task-item');

    console.log(taskElement);

    taskElement.remove();

    if (!this.#taskContainer.childElementCount) {
      this._hideTasksSection();
    }
  }

  _render(data) {
    const markup = new Task(data).taskTemplate();

    this.#taskContainer.insertAdjacentHTML('beforeend', markup);
  }

  _clearInput() {
    this.#taskUserInput.value = '';
  }

  _showTasksSection() {
    this.#tasksSection.classList.remove('d-none');
  }

  _hideTasksSection() {
    this.#tasksSection.classList.add('d-none');
  }
}

const init = new App();
