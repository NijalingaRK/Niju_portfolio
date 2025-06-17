"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chat-App",
    description: "A real-time chat application with JWT authentication and Socket.io messaging, built with the MERN stack.",
    image: "/images/projects/chatapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NijalingaRK/Chat-App",
    previewUrl: "https://chat-app-niju.onrender.com",
  },
  {
    id: 2,
    title: "Career Mind",
    description: "An AI-powered career guidance platform using Gemini AI, Next.js, and Tailwind CSS, offering personalized recommendations.",
    image: "/images/projects/career_mind.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NijalingaRK/Career_Mind",
    previewUrl: "https://career-mind-gray.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A full-stack e-commerce application built with React, Node.js, and MongoDB, featuring user authentication, product management, and a shopping cart.",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NijalingaRK/E-commerce",
    previewUrl: "https://shoppify-nijuu.vercel.app",
  },
  {
    id: 1,
    title: "Historical Places",
    description: "A web application showcasing historical places with detailed information",
    image: "/images/projects/histo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NijalingaRK/historical_Places",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and experience, built with next.js and Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NijalingaRK/Niju_portfolio",
    previewUrl: "/",
  },
  


];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
