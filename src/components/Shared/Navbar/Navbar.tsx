import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          component={Link}
          href="/"
        >
          B
          <Box component="span" color={"primary.main"}>
            D
          </Box>{" "}
          HealthCare
        </Typography>
        <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
          <Typography component={Link} href="/login" variant="body1">
            Consultation
          </Typography>
          <Typography component={Link} href="/login" variant="body1">
            Health Plans
          </Typography>
          <Typography component={Link} href="/login" variant="body1">
            Medicines
          </Typography>
          <Typography component={Link} href="/login" variant="body1">
            Diagnostic
          </Typography>
          <Typography component={Link} href="/login" variant="body1">
            NGOs
          </Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
