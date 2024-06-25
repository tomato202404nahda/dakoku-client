import { FuseSettingsConfigType } from "@fuse/core/FuseSettings/FuseSettings";
import { string } from "prop-types";

/**
 * The type definition for a user object.
 */
export type User = {
  uid: string;
  role: string[] | string | null;
  data: {
    displayName: string;
    workRole?: string;
    nameJa?: string;
    nameFg?: string;
    nameKr?: string;
    employeeNumber: number;
    photoURL?: string;
    email?: string;
    shortcuts?: string[];
    settings?: Partial<FuseSettingsConfigType>;
    loginRedirectUrl?: string; // The URL to redirect to after login.
    startDate?: string;
    onSiteInfo?: onSiteInfo;
  };
};

export type onSiteInfo = {
  siteName: string;
  onSiteStatus: string;
};
