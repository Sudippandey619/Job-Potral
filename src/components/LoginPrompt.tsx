import React from 'react';
import { motion } from 'motion/react';
import { LogIn, UserPlus, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface LoginPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToAuth: () => void;
}

export function LoginPrompt({ isOpen, onClose, onNavigateToAuth }: LoginPromptProps) {
  const handleLogin = () => {
    onClose();
    onNavigateToAuth();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-blue-600" />
            </div>
            Login Required
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <p className="text-slate-600">
            You need to be logged in to apply for jobs. Create an account or login to continue.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="mb-2 text-blue-900">Why login?</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Apply to jobs instantly</li>
              <li>• Save jobs for later</li>
              <li>• Track your applications</li>
              <li>• Build your professional profile</li>
              <li>• Get personalized job recommendations</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleLogin}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
            <Button
              onClick={handleLogin}
              variant="outline"
              className="flex-1 gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Button>
          </div>

          <button
            onClick={onClose}
            className="w-full text-sm text-slate-500 hover:text-slate-700"
          >
            Continue browsing jobs
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
