import { useState } from "react";
import { motion } from "framer-motion";
import { FaSuitcase, FaGraduationCap, FaCalendar } from "react-icons/fa6";

const education = [
  {
    title: "BTech - Computer Science and Engineering",
    company: "Dibrugarh University Institute of Engineering and Technology",
    location: "",
    duration: "2020 - 2024",
    align: "left",
  },
  {
    title: "HS - Science",
    company: "Moran Higher Secondary",
    location: "",
    duration: "2018 - 2020",
    align: "right",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company: "Gratia Technology (P) Ltd",
    location: "Assam - India",
    duration: "Aug 2024 - Dec 2024",
    align: "right",
  },
  {
    title: "Frontend Developer Intern",
    company: "Gratia Technology (P) Ltd",
    location: "Assam - India",
    duration: "Feb 2024 - Jul 2024",
    align: "left",
  },
  {
    title: "Summer Intern",
    company: "Bay Area Advanced Analytics India (P) Ltd",
    location: "Assam - India",
    duration: "Jun 2023 - Jul 2023",
    align: "right",
  },
  {
    title: "Web Developer Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    duration: "May 2023 - Jun 2023",
    align: "left",
  },
  {
    title: "Project Intern",
    company: "Academy of Skill Development ",
    location: "Remote",
    duration: "Aug 2022 - Sep 2022",
    align: "right",
  },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function QualificationSection() {
  const [activeTab, setActiveTab] = useState("Education");

  const data = activeTab === "Education" ? education : experiences;

  return (
    <section id="qualifications" className="bg-black text-white py-10 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold text-center text-red-500 mb-6"
      >
        Qualifications
      </motion.h2>

      {/* Toggle Buttons */}
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-4 mb-6"
      >
        <button
          className={`px-6 py-2 rounded-lg flex justify-center border-2 items-center gap-2 ${
            activeTab === "Experience"
              ? "bg-red-600 border-red-600 text-white hover:shadow-[0_0_13px_#ffffff]"
              : "bg-black text-red-500 hover:shadow-[0_0_13px_#ff0000]"
          }  border-red-500 transition cursor-pointer`}
          onClick={() => setActiveTab("Experience")}
        >
          <FaSuitcase />
          Experience
        </button>

        <button
          className={`px-6 py-2 rounded-lg flex justify-center border-2 items-center gap-2 ${
            activeTab === "Education"
              ? "bg-red-600 border-red-600 text-white hover:shadow-[0_0_13px_#ffffff]"
              : "bg-black text-red-500 hover:shadow-[0_0_13px_#ff0000]"
          }  border-red-500 transition cursor-pointer`}
          onClick={() => setActiveTab("Education")}
        >
          <FaGraduationCap />
          Education
        </button>
      </motion.div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white "></div>

        {/* Qualification Items */}
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex items-center  md:justify-center flex-row-reverse md:flex-row ${
              item.align === "right" ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            custom={index}
            variants={timelineVariants}
          >
            {/* Card */}
            <div
              className={`w-full md:w-1/2 px-4 flex ${
                item.align === "right" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="p-4 bg-black shadow-lg rounded-lg flex flex-col">
                <h3 className="font-semibold text-lg hover:scale-110 transition duration-300">
                  {item.title}
                </h3>
                {item.company && (
                  <p className="text-gray-400">
                    {item.company} {item.location && `- ${item.location}`}
                  </p>
                )}
                <p className="text-gray-500 text-sm flex items-center">
                  <FaCalendar className="mr-2" /> {item.duration}
                </p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="relative w-10 flex justify-center">
              <motion.div
                className="w-4 h-4 bg-red-600 rounded-full"
                animate={{ scale: [0.8, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>

            {/* Empty space for left-aligned items */}
            <div className="w-0 md:w-1/2 md:px-4"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
