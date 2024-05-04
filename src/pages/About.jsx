import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { Volunteering, experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, It's{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Yazeed Mshayekh
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Machine Learning Engineer, Co-Founder of MedFormer, 
          NLP Intern @ SMSM, Data Science @ University of Jordan.
          I'm Yazeed Mshayekh, a 21-year-old Data Science major at the University of Jordan, passionate about AI. My journey includes an enriching internships at SHAI and SMSM, where I enhanced my machine learning, deep learning, Natural language processing, computer vision skills, and contributions to the IEEE Team, sharing insights on technologies like ChatGPT. I've led projects like SilentVoice for sign language translation and LoreWeaver for story generation. Currently, I'm developing a medical LLM and an automated attendance system, and setting up an AI-focused Discord server for community engagement. I'm dedicated to advancing AGI development with a focus on safety and efficiency.
        </p>  
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Yazeed's Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've Study at the University of Jordan, at this period, I leveled up my skills and
            teamed up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.Volunteering_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        
      </div>


      <div className='py-16'>
        <h3 className='subhead-text'>Volunteering and Achievements.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          I've volunteered more than one time in my studying journey period, and secured some achievements that made me proud. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {Volunteering.map((Volunteer, index) => (
              <VerticalTimelineElement
                key={Volunteer.Volunteering_name}
                date={Volunteer.date}
                iconStyle={{ background: Volunteer.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={Volunteer.icon}
                      alt={Volunteer.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: Volunteer.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {Volunteer.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {Volunteer.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {Volunteer.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
