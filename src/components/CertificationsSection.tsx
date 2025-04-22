
export interface Certification {
    name: string;
    issuer: string;
    date?: string;
  }
  
  export interface CertificationsSectionProps {
    readonly certifications: Certification[];
  }
  
  export function CertificationsSection({ certifications }: CertificationsSectionProps) {
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
        <div className="border-t-2 border-resume-orange mb-3"></div>
        <ul className="list-disc pl-5 space-y-1">
          {certifications.map((cert, index) => (
            <li key={index+1}>
              {cert.name} by {cert.issuer} {cert.date && `(${cert.date})`}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  