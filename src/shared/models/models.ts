
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  //iconName: string;
  route: string;
  icon: string;
  roles: string[];
  children?: NavItem[];
}








