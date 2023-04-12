import { Button } from "@mui/material";

export const GetStatedButton = ({ inverted }: { inverted?: boolean }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        borderRadius: "100px",
        textTransform: "capitalize",
        bgcolor: !inverted ? "primary.main" : "white",
        color: !inverted ? 'white': "primary.main",
        px: 5,
        py: 1.5,
      }}
    >
      Get Started
    </Button>
  );
};
