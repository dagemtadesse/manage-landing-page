import {
  Box,
  Grid,
  Container,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "../../public/logo-inverted.svg";
import { FooterLink } from "../components/HeaderLink";

export const FooterBlock = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>("");

  const validate = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please provide a valid email");
    } else {
      setError(undefined);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "hsl(233, 12%, 13%)",
        py: 8,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} lg={4} order={{ xs: 3, lg: 1 }}>
            <Stack
              justifyContent={"space-between"}
              sx={{ height: "100%" }}
              alignItems={{ lg: "start", xs: "center" }}
              spacing={5}
            >
              <img
                src={logo}
                alt="hamburger"
                style={{ fill: "white", height: "1em", objectFit: "contain" }}
              />

              <Stack direction={"row"} spacing={3}>
                <img src="/icon-facebook.svg" />
                <img src="/icon-instagram.svg" />
                <img src="/icon-pinterest.svg" />
                <img src="/icon-youtube.svg" />
                <img src="/icon-twitter.svg" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={4} order={2}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              gap={3}
              sx={{ px: 5 }}
            >
              <Stack gap={2}>
                <FooterLink>Home</FooterLink>
                <FooterLink>Pricing</FooterLink>
                <FooterLink>Products</FooterLink>
                <FooterLink>About us</FooterLink>
              </Stack>

              <Stack gap={2}>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Community</FooterLink>
                <FooterLink>Privacy policy</FooterLink>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={4} order={{ xs: 1, lg: 3 }}>
            <Stack direction="row" alignItems={"center"} gap={1}>
              <TextField
                id="filled-basic"
                label=""
                variant="outlined"
                fullWidth
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  bgcolor: "white",
                  borderRadius: "1000px",
                  flexGrow: "grow",
                }}
              />
              <Button
                variant="contained"
                sx={{ borderRadius: "1000px", py: 1 }}
                disableElevation
                onClick={validate}
              >
                Go
              </Button>
            </Stack>

            <Typography
              sx={{ width: "100%", flexShrink: 0, px: 2, mt: 1 }}
              color="error"
            >
              {error}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
