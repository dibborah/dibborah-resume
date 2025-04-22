
export interface Language {
    name: string;
  }
  
  export interface LanguagesSectionProps {
    readonly languages: Language[];
  }
  
  export function LanguagesSection({ languages }: LanguagesSectionProps) {
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Languages</h2>
        <div className="border-t-2 border-resume-orange mb-3"></div>
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => (
            <span 
              key={index+1} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {language.name}
            </span>
          ))}
        </div>
      </section>
    );
  }
  