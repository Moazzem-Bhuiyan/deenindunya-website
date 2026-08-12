import { ReactNode } from "react";
import Link from "next/link";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-espresso text-ivory hover:bg-espresso-soft shadow-soft hover:shadow-lift",
  secondary:
    "bg-transparent text-espresso border border-espresso/20 hover:border-espresso/50 hover:bg-espresso/[0.03]",
  ghost: "bg-transparent text-espresso-soft hover:text-espresso",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-sans font-semibold tracking-wide2 transition-all duration-300 ease-premium hover:scale-[1.015] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso";

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "", icon } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
      {icon}
    </button>
  );
}
