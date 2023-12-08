import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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
const gymLink = (
  <a
    href="https://www.instagram.com/mddaud01/"
    target="_blank"
    rel="noreferrer"
  >
    {" "}
    visit app
  </a>
);

const Project = ({ title, Details, subTitle, gml }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue gap-2`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{subTitle}</p>
        <p className="mt-7">{Details}</p>
      </div>

      <img src={` ../assets/${projectTitle}.jpeg`} alt={projectTitle} />
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
          TypeScript. Created a dynamic movie website app for seamless
          entertainment exploration. Engineered a robust CRUD application for
          efficient data management. Crafted an engaging gym fitness app to
          promote health and wellness. Implemented a user-friendly E-commerce
          website with CRUD functionalities for seamless online shopping.
          Additionally, designed a sleek food recipe platform, blending
          creativity with functionality using React and TypeScript for an
          optimal user experience across applications.
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
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
         
          <div>
            <Project
              title="Project 7"
              subTitle="Project Management Tool"
              Details=" PMO is a project management tool here you can manage all projects you can create project assign projects to your employees and also you can manage your employees like how many the employee you have and working status and who has a project or not who is Unscheduled Fully-Scheduled Partially-Scheduled Over-Scheduled PMO keeps all records and you can check project health status also."
            />
          </div>
          {/* ROW 2 */}

          <div>
            <Project
              title="Project 3"
              subTitle="Wellness Today"
              Details="Wellness Today project is a health-related project that advice to wellness on how can be fit, they teach about exercise yoga with high expertise."
            />
          </div>
          <div>
            <Project
              title="Project 4"
              subTitle="Noon"
              Details="Noon project is an E-commerce project that runs a business in Saudi Arabia, inside the Noon there are multiple business projects like Flash, Heartbeat, Magic"
            />
          </div>
          <div>
            <Project
              title="Project 5"
              subTitle="MyAssignmentServices"
              Details="This project is developed for learning purposes like student can visit website and learn about his subject also they provide guidence or expert for suggetion."
            />
          </div>

          {/* ROW 3 */}
          <div>
            <Project
              title="Project 6"
              subTitle="Seahawk Media"
              Details=" This website is for client who wants to make website for his business purpose they provide wordPress services mostly."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
