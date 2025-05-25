import { ReactNode } from 'react';
import { ArrowLeft, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

interface MockupLayoutProps {
  title: string;
  projectId: number;
  children: ReactNode;
}

const MockupLayout = ({ title, projectId, children }: MockupLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(`/portfolio/${projectId}`)}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Project
            </Button>
            <h1 className="text-xl font-medium">{title} - UI Mockup</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/portfolio">
                All Projects
              </Link>
            </Button>
            <Button variant="outline" size="sm" disabled className="flex items-center gap-2">
              <Github size={16} />
              View Code
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary-50 py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-secondary-700 text-sm">
          This is a UI mockup demonstration for the portfolio project. 
          Not all functionality is implemented.
        </div>
      </footer>
    </div>
  );
};

export default MockupLayout;