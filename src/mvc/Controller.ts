export class Controller {
  private model: any;
  private view: any;

  constructor(model: any, view: any) {
    this.model = model;
    this.view = view;
    this.view.setTemplate(this.taskListTemplate);
    this.view.setContainer(document.querySelector("#task-list") as HTMLElement);
    this.view.render();
  }

  public addTask(req:Request,res:Response): void {
    const id = this.generateId();
    const task: any = req.body
    this.model.addTask(task);
    this.view.render();
  }
  
  public deleteTask(taskId: number): void {
    this.model.deleteTask(taskId);
    this.view.render();
  }

  public updateTask(taskId: number, updatedTask: any): void {
    this.model.updateTask(taskId, updatedTask);
    this.view.render();
  }

  private generateId(): number {
    const ids = this.model.getData().map((task) => task.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    return maxId + 1;
  }

  private taskListTemplate(data: any[]): string {
    const tasksHtml = data
      .map(
        (task) =>
          `<li>
             <span>${task.title}</span>
             <button data-task-id="${task.id}" class="delete-task-button">Delete</button>
             <button data-task-id="${task.id}" class="complete-task-button">Complete</button>
           </li>`
      )
      .join("");
    return `<ul>${tasksHtml}</ul>`;
  }
}