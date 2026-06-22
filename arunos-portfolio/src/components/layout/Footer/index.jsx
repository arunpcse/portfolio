import { profileData } from '../../../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright Notice */}
        <p className="text-sm">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>

        {/* Right Side: Dynamically loaded Social Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <a 
            href={profileData.socials.github} 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-sky-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href={profileData.socials.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href={profileData.socials.twitter} 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-sky-400 transition-colors"
          >
            Twitter
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;