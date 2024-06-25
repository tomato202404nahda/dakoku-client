import _ from "@lodash";
import { User } from "src/app/auth/user";
import { PartialDeep } from "type-fest";

const EmployeeModel = (u: PartialDeep<User>): User =>
  _.defaults(u || {}, {
    uid: _.uniqueId(),
    role: "",
    data: {
      displayName: "",
      workRole: "",
      nameJa: "",
      nameFg: "",
      nameKr: "",
      employeeNumber: _.random(847, 900),
      photoURL: "",
      email: "",
      startDate: "",
      onSiteInfo: {
        siteName: "",
        onSiteStatus: "",
      },
    },
  });
export default EmployeeModel;
