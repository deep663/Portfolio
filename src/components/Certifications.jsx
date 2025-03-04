import { motion } from "framer-motion";
import Slider from './Slider';


export default function Certifications() {
  return (
    <section id="certificate" className="relative h-fit w-full bg-black flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold text-center mt-8"
      >
        Certificates
      </motion.h2>
      <div className='h-fit'>
        <Slider/>
      </div>
    </section>
  );
}