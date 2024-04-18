import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17,26,34) "} py={5}>
      <Container>
        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Typography
            color={"#fff"}
            component={Link}
            href="/login"
            variant="body1"
          >
            Consultation
          </Typography>
          <Typography
            color={"#fff"}
            component={Link}
            href="/login"
            variant="body1"
          >
            Health Plans
          </Typography>
          <Typography
            color={"#fff"}
            component={Link}
            href="/login"
            variant="body1"
          >
            Medicines
          </Typography>
          <Typography
            color={"#fff"}
            component={Link}
            href="/login"
            variant="body1"
          >
            Diagnostic
          </Typography>
          <Typography
            color={"#fff"}
            component={Link}
            href="/login"
            variant="body1"
          >
            NGOs
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} py={4} justifyContent={"center"}>
          <Link href="/login">
            <Image
              src={facebookIcon}
              alt="facebook"
              width={30}
              height={30}
            ></Image>
          </Link>
          <Link href="/login">
            <Image
              src={facebookIcon}
              alt="facebook"
              width={30}
              height={30}
            ></Image>
          </Link>
          <Link href="/login">
            <Image
              src={facebookIcon}
              alt="facebook"
              width={30}
              height={30}
            ></Image>
          </Link>
          <Link href="/login">
            <Image
              src={facebookIcon}
              alt="facebook"
              width={30}
              height={30}
            ></Image>
          </Link>
          <Link href="/login">
            <Image
              src={facebookIcon}
              alt="facebook"
              width={30}
              height={30}
            ></Image>
          </Link>
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction={"row"}
          gap={2}
          py={4}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography color={"#fff"} variant="subtitle1">
            © 2024 BD Healthcare. All rights reserved.
          </Typography>
          <Typography
            color={"#fff"}
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
          <Typography color={"#fff"} variant="subtitle1">
            Privacy Policy | Terms of Service
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
