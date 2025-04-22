
export interface PortfolioItem {
    title: string;
    url: string;
  }
  
  export interface PortfolioSectionProps {
    readonly portfolioItems: PortfolioItem[];
  }
  
  export function PortfolioSection({ portfolioItems }: PortfolioSectionProps) {
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Websites, Portfolios, Profiles</h2>
        <div className="border-t-2 border-resume-orange mb-3"></div>
        <ul className="list-disc pl-5 space-y-1">
          {portfolioItems.map((item, index) => (
            <li key={index + 1}>
              <a 
                href={item.url} 
                className="text-blue-600 hover:underline hover:text-blue-800" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  