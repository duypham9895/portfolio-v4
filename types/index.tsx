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
  address: string;
  addressUrl: string;
  birthday: string;
  avatarUrl: string;
  description: string[];
}
export interface IContact {
  phone: string;
  email: string;
  address: string;
  addressUrl: string;
}

export interface ISkill {
  id: string;
  name: string;
  experienceYears: number;
  imageUrl: string;
}

export interface IResponseToken {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}
