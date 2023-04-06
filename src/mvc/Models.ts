interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export class Model {
  private data: Task[] = [];

  public setData(data: Task[]): void {
    this.data = data;
  }

  public getData(): Task[] {
    return this.data;
  }

  public addTask(task: Task): void {
    this.data.push(task);
  }

  public deleteTask(taskId: number): void {
    this.data = this.data.filter((task) => task.id !== taskId);
  }

  public updateTask(taskId: number, updatedTask: Task): void {
    const index = this.data.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.data[index] = updatedTask;
    }
  }
}