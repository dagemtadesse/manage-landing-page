import { Box, Typography } from "@mui/material";

export const TextIcon: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box
      sx={{ bgcolor: "primary.main", px: 3, py: 1, borderRadius: "1000px" }}
    >
      <Typography color="white">{text}</Typography>
    </Box>
  );
};
