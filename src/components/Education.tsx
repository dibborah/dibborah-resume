
import { GraduationCap } from "lucide-react";

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

export interface EducationProps {
  readonly education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      <div className="border-t-2 border-resume-orange mb-3"></div>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index+1} className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h3 className="font-medium">{item.degree}</h3>
              <div className="flex items-center text-gray-600">
                <GraduationCap size={16} className="mr-1" />
                <span>{item.institution}, {item.location}</span>
              </div>
            </div>
            <span className="text-gray-600 mt-1 md:mt-0">{item.graduationDate}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
