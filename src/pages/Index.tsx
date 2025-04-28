
import { ResumeContainer } from "@/components/ResumeContainer";
import { PrintButton } from "@/components/PrintButton";
import { ResumeHeader } from "@/components/ResumeHeader";
import { Summary } from "@/components/Summary";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkHistory } from "@/components/WorkHistory";
import { Education } from "@/components/Education";
import { LanguagesSection } from "@/components/LanguagesSection";
import { HobbiesSection } from "@/components/HobbiesSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { PortfolioSection } from "@/components/PortfolioSection";

const Index = () => {
  return (
    <>
    <ResumeContainer>
      <ResumeHeader
        name="Dibya Jyoti Borah"
        location="Noida, India 201301"
        phone="9365733667"
        email="dibyajyotiborah469@gmail.com"
        website="www.dibborah.fun"
        linkedin="https://www.linkedin.com/in/dib-borah/"
        github="https://github.com/dibborah"
      />

      <Summary 
        text="Results-driven software specialist with 1.6+ years of experience in software engineering and problem solving. Skilled in Web dev, API integration, and building cool UI. Successfully increased platform performance by 40%. Passionate about building engaging UI experiences. Seeking to contribute my expertise for expansion."
      />

      <PortfolioSection 
        portfolioItems={[
          { title: "https://dibborah.github.io/dibborah-portfolio/", url: "https://dibborah.github.io/dibborah-portfolio/" },
          { title: "https://dibborah.fun.luxuryview.site/", url: "https://dibborah.fun.luxuryview.site/" },
          { title: "https://dibborah.fun.bingecrave.com", url: "https://dibborah.fun.bingecrave.com" },
          { title: "https://dibborah.fun.recycleking.site/", url: "https://dibborah.fun.recycleking.site/" },
          { title: "https://dibborah.fun.vibegram.site/", url: "https://dibborah.fun.vibegram.site/" },
        ]}
      />

      <SkillsSection
        skills={[
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "CSS" },
          { name: "React Native" },
          { name: "React Hook Form" },
          { name: "React Router Dom" },
          { name: "REACT JS" },
          { name: "HTML" },
          { name: "Python" },
          { name: "React Query" },
          { name: "Front-end Development" },
        ]}
      />

      <WorkHistory
        experiences={[
          {
            title: "Software Engineer",
            company: "Taazaa Tech",
            location: "Noida, India",
            period: "October 2023 - Current",
            responsibilities: [
              "Currently, we are building an exciting project, multi-tenant trip agency platfrom. It's an in-house project—a multi-tenant&amp;mg agency platform. For example: If you run a B2B service like MakeMyTrip.com, you can register on our platform and manage all your operations, including trip planning, payment registration, payments, and more.",
            ],
            achievements: [
              "Managed to optimize the platform's performance by 40% and decreased its bugs count by more than 60%."
            ],
            technologies: [
              "React", "TypeScript", "React Router DOM", "React Query", "React Hook Form", "API Design", "Zustand"
            ]
          },
          {
            title: "Intern",
            company: "Taazaa Pvt. Ltd.",
            location: "Noida",
            period: "September 2023 - October 2023",
            responsibilities: [
              "I met many exciting and cool engineers (mentors) and built this awesome Movie Application.",
              "Here's the link: https://movie-793ac.web.app/",
              "Learned debugging and problem solving",
              "Got hands-on experience with many industry level FE libraries",
            ]
          }
        ]}
      />

      <Education
        education={[
          {
            degree: "Bachelors in Computer Application",
            institution: "Kalabor College",
            location: "Assam",
            graduationDate: "January 2023"
          }
        ]}
      />

      <LanguagesSection
        languages={[
          { name: "ENGLISH" },
          { name: "ASSAMESE" },
          { name: "HINDI" },
        ]}
      />

      <HobbiesSection
        hobbies={[
          { name: "CHESS" },
          { name: "PUZZLES" },
        ]}
      />

      <CertificationsSection
        certifications={[
          {
            name: "2 Months DSA program",
            issuer: "geekforgeeks"
          }
        ]}
      />
    </ResumeContainer>
    <PrintButton />
    </>
  );
};

export default Index;
