import { Typography, Box, Container, Stack, Hidden } from "@mui/material";
import { GetStatedButton } from "../components/Buttons";
import { SocialProffCard } from "../components/SocialProofCard";

const testimonials = [
  {
    avatar: "/avatar-anisha.png",
    name: "Anisha L",
    qoute: `“Manage has supercharged our team’s workflow. The ability to maintain visibility on 
    larger milestones at all times keeps everyone motivated.”`,
  },
  {
    avatar: "/avatar-ali.png",
    name: "Ali Bravo",
    qoute: `“We have been able to cancel so many other subscriptions since using Manage. 
    There is no more cross-channel confusion and everyone is much more focused.” `,
  },
  {
    avatar: "/avatar-richard.png",
    name: "Richard Watts",
    qoute: `“Manage allows us to provide structure and process. 
    It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`,
  },
  {
    avatar: "/avatar-shanai.png",
    name: "Shanai Gough",
    qoute: `“Their software allows us to track, 
    manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”`,
  },
];

export const TestimonialsBlock = () => {
  return (
    <Box sx={{ py: 6, position: "relative" }}>
      <Container>
        <Typography
          variant="h4"
          color="secondary"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          What they’ve said
        </Typography>
      </Container>

      <Box sx={{ mt: "36px", mb: 6 }}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            pt: 8,
            maxWidth: "100%",
            overflow: "auto",
            scrollSnapType: "x mandatory",
          }}
        >
          {testimonials.map((t, index) => (
            <SocialProffCard {...t} key={`testimonial#${index}`} />
          ))}
        </Stack>
      </Box>

      <Container>
        <Stack alignItems={"center"} sx={{}}>
          <GetStatedButton />
        </Stack>
      </Container>
    </Box>
  );
};
