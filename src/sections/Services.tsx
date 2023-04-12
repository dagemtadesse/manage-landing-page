import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { TextIcon } from "../components/TextIcon";

const sevices = [
  {
    primary: "Track company-wide progress",
    secondary: `See how your day-to-day tasks fit into the wider vision.
    Go from tracking progress at the milestone level all the
    way done to the smallest of details. Never lose sight of
    the bigger picture again.`,
  },
  {
    primary: "Advanced built-in reports",
    secondary: `Set internal delivery estimates and track progress toward company goals. 
      Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.`,
  },
  {
    primary: "Everything you need in one place",
    secondary: `Stop jumping from one service to another to communicate, store files, track tasks and share documents.
       Manage offers an all-in-one team productivity solution`,
  },
];

export const ServicesBlock = () => {
  return (
    <Container sx={{ py: 6, position: "relative" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          <Typography
            variant="h4"
            color="secondary"
            sx={{
              fontWeight: "bold",
              mt: 3,
              textAlign: { xs: "center", lg: "start" },
            }}
          >
            What's different about manage?
          </Typography>
          <Typography sx={{ mt: 3, textAlign: { xs: "center", lg: "start" } }}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Typography>
        </Grid>

        <Grid item xs={12} lg={7}>
          <List>
            {sevices.map((service, index) => (
              <ListItem
                alignItems="flex-start"
                sx={{ gap: 3 }}
                key={`service#${index}`}
              >
                <ListItemIcon sx={{ display: { xs: "none", lg: "block" } }}>
                  <TextIcon text={`0${index + 1}`} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Stack
                      direction={"row"}
                      alignItems="center"
                      gap={2}
                      sx={{
                        bgcolor: { xs: "primary.light", lg: "white" },
                        px: 1,
                        borderRadius: "1000px",
                      }}
                    >
                      <Box component={"span"}  sx={{ display: { xs: "block", lg: "none" } }}>
                        <TextIcon text={`0${index + 1}`} />
                      </Box>
                      <Typography
                        variant="h6"
                        color="secondary.main"
                        sx={{
                          fontWeight: "medium",
                        }}
                      >
                        {service.primary}
                      </Typography>
                    </Stack>
                  }
                  secondary={
                    <Typography sx={{ mt: 2 }}>{service.secondary}</Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
