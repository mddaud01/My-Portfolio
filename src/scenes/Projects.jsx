import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project = ({ title, Details, subTitle, visitLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue gap-4`;
  

  return (
    <motion.div variants={projectVariant} className="relative  ">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{subTitle}</p>
        <p className="mt-7">{Details}</p>
        <button className="border bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 active:bg-green-300"><a href={visitLink}>Visit App</a></button>
      </div>

      <img src={title} alt={title} className="w-[500px] h-[400px] bg-cover m-2" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-4 pb-4">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Developed diverse projects showcasing proficiency in React and
          TypeScript. Created a dynamic calendar task app for seamless work .
          Crafted an engaging gym fitness app to promote health and wellness.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center gap-2 ">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold m-2"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <div>
            <Project
              title={project1}
              subTitle="Calendar Task"
              Details="  This is a Calendar Task Where you can assign the Task  "
              visitLink='https://event-calendar-nine.vercel.app/'
            />
          </div>
          {/* ROW 2 */}

          <div>
            <Project
                title={project2}
              subTitle="Product Dashboard"
              Details=" This is Product Dashboard Here you can get All product export and import also you can get seller Details as well as product details"
              visitLink='https://analytic-dashboard-beige.vercel.app/'
            />
          </div>
          <div>
            <Project
                title={project3}
              subTitle="Evogym Fitness App"
              Details="This is a fitness freek gym app here you can get all fitness related Data and structured plan for body buildings and yoga classes  "
              visitLink='https://gym-fitness-app-mddaud01s-projects.vercel.app/'
            />
          </div>
          <div>
          
          </div>

          {/* ROW 3 */}
          <div>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
