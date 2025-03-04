import { motion } from "framer-motion";
import Slider from './Slider';
import MobileCarousel from "./MobileCarousel";

const certifications = [
  {
    title: "C++ programming - Udemy",
    date: "Aug 2023",
    image: "/certificates/c++_cer.jpg",
  },
  {
    title: "Crash Course on Python - Google",
    date: "Aug 2023",
    image: "/certificates/pyt_cer.png",
  },
  {
    title: "Introduction to Cybersecurity Tools - Google",
    date: "Mar 2023",
    image: "/certificates/cyb_cer.png",
  },
  {
    title: "Ethical Hacking Basics - Udemy",
    date: "Sept 2022",
    image: "/certificates/eth_cer.png",
  },
  {
    title: "Web Development Training - Internshala",
    date: "Jun 2022",
    image: "/certificates/web_dev_cer.png",
  },
  {
    title: "Cybersecurity Roles, Processes & Operating System Security - Google",
    date: "Apr 2023",
    image: "/certificates/cyb_2_cer.png",
  },
];

export default function Certifications() {
  return (
    <section id="certificate" className="hidden relative h-fit w-full bg-black md:flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold text-center mt-8"
      >
        Certificates
      </motion.h2>
      <motion.div
      initial={{ rotateY: 90, scale: 0.5 }}
      whileInView={{ rotateY: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className='h-fit hidden md:block'>
        <Slider data={certifications}/>
      </motion.div>
      {/* <motion.div
      initial={{ rotateY: 90, scale: 0.5 }}
      whileInView={{ rotateY: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className='h-fit'>
        <MobileCarousel data={certifications}/>
      </motion.div> */}
    </section>
  );
}