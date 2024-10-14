import { NavItem } from '../models/models';

export const navItems: NavItem[] = [
  {
    displayName: 'Users',
    route: '/users',
    icon: 'person_pin',
    roles: ['superadmin', 'Admin', 'ContentCreator']
  },

];
