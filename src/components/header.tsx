import { ChefHat } from 'lucide-react';
import { Button } from './button';

const Header: React.FC = () => {
  return (
    <header className="px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-primary" />
          <span className="text-2xl font-heading font-bold text-gray-900">
            Gemutly
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            For Chefs
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            How it Works
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            About
          </a>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary font-bold"
          >
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
