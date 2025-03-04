import { CONTROL_TYPE } from '../constants/control-type.constant';

import { SelectItemModel } from './select-item.model';

export class DataModel {
  readonly type: CONTROL_TYPE;
  readonly name: string;
  readonly model: string;
  readonly disabled: boolean = false;
  readonly required: boolean = false;
  readonly label?: string;
  readonly placeholder?: string;
  readonly inputType?: string;
  readonly value?: string | number | boolean | undefined;
  readonly selectData?: SelectItemModel[];

  constructor(data: Partial<DataModel> = {}) {
    Object.assign(this, data, {
      value: data.value !== undefined ? data.value : this.getDefaultValue(),
      selectData:
        data.type === CONTROL_TYPE.SELECT && data.selectData ? data.selectData.map(it => new SelectItemModel(it)) : [],
    });
  }

  private getDefaultValue(): string | number | boolean | undefined {
    switch (this.type) {
      case CONTROL_TYPE.CHECKBOX:
        return false;
      default:
        return undefined;
    }
  }
}
