
import { Calendar, Briefcase } from "lucide-react";

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
}

export interface WorkHistoryProps {
  readonly experiences: WorkExperience[];
}

export function WorkHistory({ experiences }: WorkHistoryProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Work History</h2>
      <div className="border-t-2 border-resume-orange mb-3"></div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index + 1} className="pb-4">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <h3 className="font-medium text-lg">{experience.title}</h3>
                <div className="flex items-center text-gray-600 mb-1">
                  <Briefcase size={16} className="mr-1" />
                  <span>{experience.company}, {experience.location}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mt-1 md:mt-0">
                <Calendar size={16} className="mr-1" />
                <span>{experience.period}</span>
              </div>
            </div>

            <ul className="list-disc pl-5 mb-2 text-gray-700 space-y-1">
              {experience.responsibilities.map((item, idx) => {
                if(idx === 1) {
                  return <li key={idx + 1}>Here's the link: <a className="text-blue-600 hover:underline hover:text-blue-800" href="https://movie-793bc.web.app/">https://movie-793bc.web.app/</a></li>
                } else {
                  return (
                  <li key={idx + 1}>{item}</li>
                )
                }
              })}
            </ul>

            {experience.achievements && (
              <div className="mb-2">
                <p className="font-medium text-sm">Key Achievements:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx + 1}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies && (
              <div>
                <p className="font-medium text-sm mb-1">Technologies:</p>
                <div className="flex flex-wrap gap-1">
                  {experience.technologies.map((tech, idx) => (
                    <span 
                      key={idx + 1} 
                      className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
