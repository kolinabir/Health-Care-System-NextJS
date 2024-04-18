import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialists } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          my: 30,
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment Across 50+ Specialities
          </Typography>
          <Typography variant="h6" fontWeight={300}>
            Experienced doctors across All Specialities
          </Typography>
        </Box>
        <Stack direction={"row"} gap={5} mt={5}>
          {specialists.map((specialist: any) => (
            <Box
              key={specialist.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245, 245, 245, 1)",
                border: "1px solid rgba(250, 250, 250, 1))",
                borderRadius: "10px",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                textAlign: "center",
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 10px",
                  borderRadius: "10px",
                  transition: "all 0.5s",
                },
              }}
            >
              <Image
                width={100}
                height={100}
                src={specialist.icon}
                alt={specialist.title}
              />
              <Box>
                <Typography variant="h6" fontWeight={300}>
                  {specialist.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          sx={{
            mt: 5,
          }}
          variant="outlined"
        >
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
