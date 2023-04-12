import {
  Backdrop,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { GetStatedButton } from "./components/Buttons";
import { HeaderLink } from "./components/HeaderLink";
import { CtaBlock } from "./sections/Cta";
import { FooterBlock } from "./sections/Footer";
import { ServicesBlock } from "./sections/Services";
import { TestimonialsBlock } from "./sections/Testimonials";

function App() {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&:before": {
            width: "100%",
            height: "100%",
            bgcolor: "red",
            content: '""',
            position: "absolute",
            top: "-10%",
            right: "-2.5%",
            background: 'url("/bg-tablet-pattern.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100% 0%",
            backgroundSize: "contain",
          },
        }}
      >
        <Container sx={{ position: "relative" }}>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            sx={{ py: 3 }}
          >
            <img src={"/logo.svg"} />

            <Stack direction="row" gap={3} display={{ xs: "none", lg: "flex" }}>
              <HeaderLink>Pricing</HeaderLink>
              <HeaderLink>Product</HeaderLink>
              <HeaderLink> About us</HeaderLink>
              <HeaderLink>Careers</HeaderLink>
              <HeaderLink>Community</HeaderLink>
            </Stack>

            <Box display={{ xs: "none", lg: "block" }}>
              <GetStatedButton />
            </Box>

            <Box display={{ xs: "block", lg: "none" }}>
              <IconButton onClick={() => setIsMobileMenuShow((val) => !val)}>
                <img
                  src={
                    isMobileMenuShow ? "/icon-close.svg" : "/icon-hamburger.svg"
                  }
                />
              </IconButton>
            </Box>
          </Stack>
        </Container>

        <Container sx={{ py: 4, position: "relative" }}>
          <Grid
            container
            sx={{
              alignItems: "center",
            }}
            spacing={3}
          >
            <Grid xs={12} lg={6} item order={{ xs: 2, lg: 1 }}>
              <Stack alignItems={{ xs: "center", lg: "flex-start" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "medium",
                    color: "secondary.main",
                    textAlign: { xs: "center", lg: "start" },
                    fontSize: { xs: "3rem", lg: "3.75rem" },
                  }}
                >
                  Bring everyone together to build better products
                </Typography>
                <Typography
                  sx={{
                    mb: 4,
                    mt: 3,
                    maxWidth: { xs: "100%", lg: "65%" },
                    textAlign: { xs: "center", lg: "start" },
                  }}
                >
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </Typography>
                <GetStatedButton />
              </Stack>
            </Grid>
            <Grid xs={12} lg={6} item order={{ xs: 1, lg: 2 }}>
              <img src="/illustration-intro.svg" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          "&:before": {
            width: "100%",
            height: "100%",
            bgcolor: "red",
            content: '""',
            position: "absolute",
            left: { lg: "-35%", xs: "85%" },
            bottom: { lg: "-10%", xs: "10%" },
            background: 'url("/bg-tablet-pattern.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: { xs: "100%", lg: "auto" },
            backgroundPosition: { lg: "0% center", sx: "0% center" },
          },
        }}
      >
        <ServicesBlock />
        <TestimonialsBlock />
      </Box>
      <CtaBlock />
      <FooterBlock />

      <Backdrop
        open={isMobileMenuShow}
        sx={{
          p: 3,
          mt: "82px",
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.5))",
        }}
        onClick={() => setIsMobileMenuShow(false)}
      >
        <Paper sx={{ width: "100%", py: 3, px: 2, mt: '-82px' }}>
          <List>
            <ListItem sx={{ py: 2 }}>
              <HeaderLink>Pricing</HeaderLink>
            </ListItem>
            <ListItem sx={{ py: 2 }}>
              <HeaderLink>Product</HeaderLink>
            </ListItem>
            <ListItem sx={{ py: 2 }}>
              <HeaderLink> About us</HeaderLink>
            </ListItem>
            <ListItem sx={{ py: 2 }}>
              <HeaderLink>Careers</HeaderLink>
            </ListItem>
            <ListItem sx={{ py: 2 }}>
              <HeaderLink>Community</HeaderLink>
            </ListItem>
          </List>
        </Paper>
      </Backdrop>
    </>
  );
}

export default App;
