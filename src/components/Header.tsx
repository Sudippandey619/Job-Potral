import React from 'react';
import { Menu, X, Briefcase, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { UserRole } from '../App';

interface HeaderProps {
  isLoggedIn: boolean;
  userRole: UserRole;
  onNavigate: (page: 'landing' | 'listings' | 'dashboard' | 'employer' | 'auth') => void;
  onLogout: () => void;
}

export function Header({ isLoggedIn, userRole, onNavigate, onLogout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jobseeker
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('landing')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('listings')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Find Jobs
            </button>
            {isLoggedIn && userRole === 'jobseeker' && (
              <button
                onClick={() => onNavigate('dashboard')}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Dashboard
              </button>
            )}
            {isLoggedIn && userRole === 'employer' && (
              <button
                onClick={() => onNavigate('employer')}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                Employer
              </button>
            )}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => onNavigate('auth')}
                  className="text-slate-700"
                >
                  Login
                </Button>
                <Button
                  onClick={() => onNavigate('auth')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                  <User className="w-4 h-4 text-slate-600" />
                  <span className="text-slate-700 text-sm capitalize">{userRole}</span>
                </div>
                <Button
                  variant="ghost"
                  onClick={onLogout}
                  className="text-slate-700"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate('landing');
                  setMobileMenuOpen(false);
                }}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('listings');
                  setMobileMenuOpen(false);
                }}
                className="text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                Find Jobs
              </button>
              {isLoggedIn && userRole === 'jobseeker' && (
                <button
                  onClick={() => {
                    onNavigate('dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="text-slate-700 hover:text-blue-600 transition-colors text-left"
                >
                  Dashboard
                </button>
              )}
              {isLoggedIn && userRole === 'employer' && (
                <button
                  onClick={() => {
                    onNavigate('employer');
                    setMobileMenuOpen(false);
                  }}
                  className="text-slate-700 hover:text-blue-600 transition-colors text-left"
                >
                  Employer
                </button>
              )}
              <div className="pt-4 border-t border-slate-200">
                {!isLoggedIn ? (
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onNavigate('auth');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full justify-start"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => {
                        onNavigate('auth');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                      Sign Up
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}