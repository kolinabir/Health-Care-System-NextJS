import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const TopRatedDoctors = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/doctor?page=1&limit=3",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: doctors } = await res.json();
  return (
    <Box
      sx={{
        mt: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography component={"h1"} variant="h4" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography
          component={"p"}
          fontSize={18}
          fontWeight={400}
          sx={{
            mt: 2,
          }}
        >
          Access the best doctors in the city with
        </Typography>
        <Typography component={"p"} fontSize={18} fontWeight={400}>
          advanced tools and technology
        </Typography>
      </Box>
      <Container>
        <Grid mt={3} container spacing={2}>
          {doctors.map((doctor: any) => (
            <Grid item xs={12} sm={6} md={4} key={doctor.id}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  borderRadius: "10px",
                  padding: "20px",
                  "& img": {
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  },
                  "&:hover": {
                    border: "1px solid blue",
                    padding: "20px",
                    borderRadius: "10px",
                    transition: "all 0.5s",
                  },
                }}
              >
                <Image
                  src={doctor.profilePhoto}
                  alt={doctor.name}
                  width={500}
                  height={300}
                />
                <Typography
                  component={"h3"}
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    mt: 2,
                  }}
                >
                  {doctor.name}
                </Typography>
                <Typography
                  component={"p"}
                  fontSize={18}
                  fontWeight={400}
                  sx={{
                    mt: 1,
                  }}
                >
                  {doctor.designation}
                </Typography>
                <Typography
                  component={"p"}
                  fontSize={18}
                  fontWeight={400}
                  sx={{
                    mt: 1,
                  }}
                >
                  {doctor.qualification}
                </Typography>
                {/* add apointmentFee */}
                <Typography
                  component={"p"}
                  fontSize={18}
                  fontWeight={400}
                  sx={{
                    mt: 1,
                  }}
                  color={"#f50057"}
                >
                  Consultation Fee: {doctor.apointmentFee} TK
                </Typography>
                <Typography
                  component={"p"}
                  fontSize={18}
                  fontWeight={400}
                  sx={{
                    mt: 1,
                  }}
                >
                  {doctor.experience} years of experience
                </Typography>
                <Box mt={2} justifyContent={"center"} display={"flex"}>
                  <Button>Book Now</Button>
                  <Button
                    variant="outlined"
                    sx={{
                      ml: 2,
                    }}
                  >
                    View Profile
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
          <Box sx={{
            mt: 5, 
            mx: "auto"
          }}>
            <Button
              variant="outlined"
              sx={{
                ml: 2,
              }}
            >
              View All
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
