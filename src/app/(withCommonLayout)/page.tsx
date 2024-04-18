import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import Button from "@mui/material/Button";
const HomePage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Specialist></Specialist>
      <TopRatedDoctors></TopRatedDoctors>
    </>
  );
};

export default HomePage;
