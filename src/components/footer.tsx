import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 lg:px-8 py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-6 w-6 text-primary" />
              <span className="text-xl font-heading font-bold">Gemutly</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting food lovers with extraordinary backyard dining
              experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">For Diners</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Find Experiences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">For Chefs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Become a Host
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Gemutly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
