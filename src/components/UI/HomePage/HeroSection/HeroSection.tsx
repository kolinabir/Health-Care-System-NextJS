import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid"></Image>
        </Box>
        <Typography variant="h2" component={"h3"} my={1}>
          Healthier Life
        </Typography>
        <Typography variant="h2" component={"h3"} color={"primary"} my={1}>
          Makes Your{" "}
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
          }}
          variant="h2"
          component={"h3"}
          color={"primary.main"}
          my={1}
        >
          Life Better
        </Typography>
        <Typography variant="subtitle2" my={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod
          reprehenderit saepe possimus? Sit officiis dicta, ut rem error numquam
          aut culpa distinctio cum. Optio. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate nobis dignissimos
        </Typography>
        <Box mt={4}>
          <Button>Make an Appointment</Button>

          <Button
            variant="outlined"
            sx={{
              ml: 2,
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "240px",
            top: "-30px",
          }}
        >
          <Image
            src={assets.svgs.arrow}
            alt="arrow"
            width={100}
            height={100}
          ></Image>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            ></Image>
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            ></Image>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "240px",
            left: "200px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={240}
            height={240}
          ></Image>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "0px",
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            width={180}
            height={180}
          ></Image>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
