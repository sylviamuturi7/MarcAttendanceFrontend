import { ROLES } from "../constants/role";

const navigation = [
  { label: "Home", path: "/dashboard", roles: [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT] },
  { label: "Students", path: "/students", roles: [ROLES.ADMIN, ROLES.TEACHER] },
  { label: "Attendance", path: "/attendance", roles: [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT] },
  { label: "Departments", path: "/departments", roles: [ROLES.ADMIN] },
  { label: "Reports", path: "/reports", roles: [ROLES.ADMIN, ROLES.TEACHER] },
];

export { navigation };
