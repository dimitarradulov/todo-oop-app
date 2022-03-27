'use strict';
import 'core-js/stable';

class Task {
  constructor(task) {
    this.task = task;
  }

  taskTemplate() {
    return `
    <li class="task-item d-flex justify-content-between">
    <span>${this.task}</span
    ><i class="icon" data-feather="check-circle"></i>
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
    this.#taskAddBtn.addEventListener(
      'click',
      this._addTaskBtnHandler.bind(this)
    );
  }

  _addTaskBtnHandler() {
    const userInput = this.#taskUserInput.value.trim();

    if (!userInput) return;

    this._showTasksSection();

    this._render(userInput);

    feather.replace();

    this._clearInput();
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
