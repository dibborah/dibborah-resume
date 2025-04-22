
export interface Skill {
    name: string;
  }
  
  export interface SkillsSectionProps {
    readonly skills: Skill[];
  }
  
  export function SkillsSection({ skills }: SkillsSectionProps) {
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="border-t-2 border-resume-orange mb-3"></div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index+1}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    );
  }
  