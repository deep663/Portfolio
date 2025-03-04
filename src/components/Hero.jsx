import { TypeAnimation as Typing } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const icons = [
    {
      href: "https://www.linkedin.com/in/deepsenchowa/",
      components: <FaLinkedin />,
    },
    {
      href: "https://github.com/deep663",
      components: <FaGithub />,
    },
    {
      href: "https://x.com/DeepSenchowa/",
      components: <FaSquareXTwitter />,
    },
    {
      href: "https://www.instagram.com/deep__senchowa/#",
      components: <FaInstagram />,
    },
  ];

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen py-10 px-6 overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="md:w-1/2 flex flex-col justify-center items-center"
      >
        <img
          alt="Image"
          className="rounded-full w-48 md:w-80 shadow-lg hover:scale-105 transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
          height="200"
          src="./images/hero_img2.png"
          width="200"
        />
        <h3 className="text-2xl md:text-3xl font-semibold mt-4 hover:scale-110 transition duration-600 hover:drop-shadow-[0_0_10px_#ffffff]">
          &lt;{" "}
          <span className="agustina-font font-semibold"> Deep Senchowa </span>{" "}
          /&gt;
        </h3>
      </motion.div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 ">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl sm:text-7xl font-bold mb-4"
        >
          Hi, It's <span className="text-red-500">DEEP</span>
        </motion.h1>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold mb-4"
        >
          I'm a{" "}
          <span className="text-red-500">
            <Typing
              sequence={[
                "Software Engineer",
                1000,
                "Machine Learning Developer",
                1000,
                "AI Enthusiast",
                1000,
                "MERN Stack Developer",
                1000,
                "Cybersecurity Enthusiast",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2rem" }}
              repeat={Infinity}
            />
          </span>
        </motion.h3>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm sm:text-lg mb-6"
        >
          I am a passionate Full Stack Developer with expertise in React,
          Node.js, Express.js, and MongoDB, along with a strong foundation in
          AI/ML and Cybersecurity. With hands-on experience in developing web
          applications, REST APIs, and AI-based projects, I strive to create
          innovative solutions that enhance user experiences.
        </motion.p>
        <div className="flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6">
          {icons.map((icon, index) => (
            <motion.a
              ref={ref}
              initial={{ rotateX: 90, opacity: 0 }} 
              animate={
                inView
                  ? { rotateX: 0, opacity: 1 }
                  : { rotateX: 90, opacity: 0 }
              } 
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
              href={icon.href}
              target="_blank"
              key={index}
              className="w-10 h-10 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
            >
              {icon.components}
            </motion.a>
          ))}
        </div>
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          href="./DeepSenchowaResume.pdf"
          download="Deep_Senchowa_CV.pdf"
          className="px-4 sm:px-6 py-2 rounded-full text-red-500 border-2 border-red-500 font-semibold hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
