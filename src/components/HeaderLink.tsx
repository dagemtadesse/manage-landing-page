import { Link } from "@mui/material";

export const HeaderLink = ({ children }: { children: string }) => {
  return (
    <Link
      sx={{
        textDecoration: "none",
        "&:hover": { color: "text.secondary" },
      }}
      color="secondary"
      href="#"
    >
      {children}
    </Link>
  );
};

export const FooterLink = ({ children }: { children: string }) => {
  return (
    <Link
      sx={{
        textDecoration: "none",
        color: 'white',
        fontSize: '15px',
        "&:hover": { color: "primary.main" },
      }}
      href="#"
    >
      {children}
    </Link>
  );
};
