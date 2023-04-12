import { Box, Container, Stack, Typography } from "@mui/material";
import { GetStatedButton } from "../components/Buttons";

export const CtaBlock = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 8,
        backgroundImage: {
          xs: 'url("/bg-simplify-section-mobile.svg")',
          lg: 'url("/bg-simplify-section-desktop.svg")',
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container>
        <Stack
          direction={{lg: "row", sx: 'column'}}
          justifyContent={{lg: "space-between", sx: 'center'}}
          alignItems={"center"}
          gap={3}
        >
          <Typography variant="h3" color="white" sx={{textAlign: {xs: 'center', lg: 'start'}}}>
            Simplify how your team
            <br /> works today.
          </Typography>
          <GetStatedButton inverted />
        </Stack>
      </Container>
    </Box>
  );
};
