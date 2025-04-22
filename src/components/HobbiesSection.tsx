
export interface Hobby {
    name: string;
  }
  
  export interface HobbiesSectionProps {
    readonly hobbies: Hobby[];
  }
  
  export function HobbiesSection({ hobbies }: HobbiesSectionProps) {
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hobbies and Interests</h2>
        <div className="border-t-2 border-resume-orange mb-3"></div>
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby, index) => (
            <span 
              key={index+1} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {hobby.name}
            </span>
          ))}
        </div>
      </section>
    );
  }
  