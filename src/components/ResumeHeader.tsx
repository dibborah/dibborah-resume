
import { Mail, Phone, Glasses, Linkedin, Github } from "lucide-react";

export interface ResumeHeaderProps {
  name: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
}

export function ResumeHeader({
  name,
  location,
  phone,
  email,
  website,
  linkedin,
  github,
}: Readonly<ResumeHeaderProps>) {
  return (
    <header className="bg-resume-orange text-white rounded-lg px-6 py-5 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">

        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-0">{name}</h1>

        <div className="flex flex-col space-y-1.5 text-sm md:text-right">
          <p>{location}</p>

          <div className="flex md:justify-end items-center space-x-1 hover:underline">
            <Phone size={14} />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>

          <div className="flex md:justify-end items-center space-x-1 hover:underline">
            <Mail size={14} />
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <div className="flex md:justify-end items-center space-x-1 hover:underline">
            <Glasses size={20} className="pt-1" />
            <a href={`https://${website}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </div>

          <div className="flex md:justify-end items-center space-x-1 hover:underline">
            <Linkedin size={16} />
            <a href={linkedin} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {linkedin}
            </a>
          </div>

          <div className="flex md:justify-end items-center space-x-1 hover:underline">
            <Github size={16} />
            <a href={github} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {github}
            </a>
          </div>


        </div>

      </div>
    </header>
  );
}
