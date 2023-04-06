export class View {
  private model: any;
  private template?: (data: any[]) => string;
  private container: any;

  constructor(model?: any) {
    this.model = model;
  }

  public setTemplate(template: (data: any[]) => string): void {
    this.template = template;
  }

  public setContainer(container: HTMLElement): void {
    this.container = container;
  }

  public render(): void {
    const data = this.model.getData();
    const html = this.template?(data);
    this.container.innerHTML = html;
  }
}