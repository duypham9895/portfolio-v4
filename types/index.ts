import { LinkProps } from "next/link";

export interface NavLinkProps extends LinkProps {
  activeClassName: string;
  inactiveClassName: string;
  className: string;
  children?: React.ReactNode;
}

export interface IExperience {
  id: string;
  icon: string;
  title: string;
  des: string;
  color: string;
  bg: string;
}

export interface IContact {
  phone: string;
  email: string;
  address: string;
}
