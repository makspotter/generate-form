import { CONTROL_TYPE } from '../constants/control-type.constant';

export interface ControlInterface {
  type: CONTROL_TYPE;
  name: string;
  model: string;
  label?: string;
  placeholder?: string;
  value?: string | number | boolean;
  data?: unknown[];
}
