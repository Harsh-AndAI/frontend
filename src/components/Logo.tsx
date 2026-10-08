import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo = ({ className, light = false }: LogoProps) => {
  return (
    <img
      src={
        light
          ? "/images/anantgrid-logo-temp4.png"
          : "/images/anantgrid-logo-temp4BLACK1.png"
      }
      alt="AnantGrid - Nation First Always"
      className={cn(
        "block h-auto object-contain",
        className
      )}
    />
  );
};