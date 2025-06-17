"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Languages:</strong> JavaScript, C++, C, SQL</li>
        <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, Shadcn UI</li>
        <li><strong>Backend:</strong> Node.js, Express, RESTful APIs</li>
        <li><strong>AI/ML:</strong> Gemini AI integration, Machine Learning</li>
        <li><strong>Tools:</strong> Git, GitHub, Postman, Prisma ORM, Vercel</li>
        <li><strong>Hardware:</strong> ESP8266, IR Imaging sensors</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>BE in ECE</strong> - CMR Institute of Technology (2022-2026) - GPA: 7.58</li>
        <li><strong>PUC (Science)</strong> - Morariji Desai Residential College (93.83%)</li>
        <li><strong>SSLC</strong> - Morariji Desai Residential College (93.12%)</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Patent filed for "AI-Powered infrared imaging system"</li>
        <li>Flipkart GRiD 6.0 participant (E-commerce & Tech Quiz)</li>
        <li>Teachnook Excellence Certificate in Full-Stack Development</li>
        <li>Hackathon participant: GenAI Hackfest 2025, Manthan 2025</li>
        <li>Technical Club Event Coordinator (Taq and Connaissance Club)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="Nijalingappa R K" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm an Electronics and Computer Engineering student with a passion for full-stack development and AI integration. With hands-on experience in the MERN stack and hardware-software integration projects like InfraEye, I bridge the gap between physical computing and web technologies. My work spans from building real-time chat applications to developing AI-powered career guidance platforms with Gemini AI integration.
          </p>
          <p className="text-base lg:text-lg mt-4">
            As an intern at Weboin, I honed my skills in responsive web design and performance optimization. I thrive in collaborative environments, evidenced by my role as Technical Club Event Coordinator. My patent-pending infrared imaging system demonstrates my innovative approach to solving real-world problems through technology. I'm constantly expanding my skills through hackathons and competitive programming events.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              Achievements
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;