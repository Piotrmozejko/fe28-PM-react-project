export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Error = 'error',
  Tabs = 'tabs',
  BurgerItem = 'burgeritem',
}
export type ButtonClassnamesType = {
  [k in ButtonType]: string;
};
export type ButtonPropsType = {
  title: string;
  type: ButtonType;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};
