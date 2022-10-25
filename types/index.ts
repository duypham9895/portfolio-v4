import { LinkProps } from "next/link";
import { IconType } from "react-icons";

export interface NavLinkProps extends LinkProps {
  activeClassName: string;
  inactiveClassName: string;
  className: string;
  children?: React.ReactNode;
}

export interface IAbout {
  phone: string;
  email: string;
  introduction: string[];
  address: string;
  addressUrl: string;
  birthDate: string;
}
export interface IContact {
  phone: string;
  email: string;
  address: string;
}

export interface ICourse {
  id: string;
  name: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  credentialId: string;
  credentialUrl: string;
}

export interface IExperience {
  id: string;
  title: string;
  companyName: string;
  startDate: string;
  endDate: string | null;
  summary: string[];
}

export interface IEducation {
  id: string;
  major: string;
  university: string;
  startDate: string;
  endDate: string | null;
}

export interface ISkill {
  id: string;
  imageUrl: string;
  name: string;
  experience: number;
  bgDark?: string;
}
