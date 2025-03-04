export class SelectItemModel {
  readonly id: string;
  readonly label: string;

  constructor(data: Partial<SelectItemModel> = {}) {
    Object.assign(this, data);
  }
}
