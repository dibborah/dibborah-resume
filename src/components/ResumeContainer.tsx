
import { ReactNode } from "react";

export interface ResumeContainerProps {
  readonly children: ReactNode;
}

export function ResumeContainer({ children }: ResumeContainerProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 px-2 sm:px-4">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden p-4 sm:p-6 print:shadow-none print:p-0">
        {children}
        <footer className="mt-10 text-center text-gray-500 text-sm py-4 border-t print:hidden">
          <p>&copy; {new Date().getFullYear()} Dibya Jyoti Borah. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
