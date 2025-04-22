
  export interface SummaryProps {
    readonly text: string;
  }
  
  export function Summary({ text }: SummaryProps) {
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <div className="border-t-2 border-resume-orange mb-3"></div>
        <p className="text-gray-700">{text}</p>
      </section>
    );
  }
  