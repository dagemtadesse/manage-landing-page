import { Avatar, Paper, Stack, Typography } from "@mui/material";

export const SocialProffCard: React.FC<{
  avatar: string;
  name: string;
  qoute: string;
}> = ({ avatar, name, qoute }) => {
  return (
    <Paper
      sx={{
        bgcolor: "hsl(0, 0%, 98%)",
        minHeight: "250px",
        width: { lg: "550px", xs: "100%" },
        px: 3,
        pb: 3,
        flexShrink: 0,
        scrollSnapAlign: 'start'
      }}
      elevation={0}
    >
      <Stack alignItems={"center"} spacing={3}>
        <Avatar
          sx={{ height: "72px", width: "72px", mt: "-36px" }}
          src={avatar}
        />
        <Typography sx={{ fontWeight: "bold" }} color="secondary">
          {name}
        </Typography>
        <Typography>{qoute}</Typography>
      </Stack>
    </Paper>
  );
};
