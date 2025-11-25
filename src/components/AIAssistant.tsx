import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, MessageCircle } from 'lucide-react';
import { UserRole } from '../App';

interface AIAssistantProps {
  currentPage: string;
  userRole: UserRole;
}

const tips = {
  landing: [
    "👋 Welcome! Use the search bar to find your dream job quickly.",
    "💡 Browse trending categories to discover new opportunities.",
    "🚀 Create an account to save jobs and get personalized recommendations!"
  ],
  listings: [
    "🔍 Use filters to narrow down your job search.",
    "💾 Save interesting jobs to review them later.",
    "📊 Jobs are sorted by relevance and posting date.",
    "✨ Click on any job card to see full details!"
  ],
  details: [
    "📝 Read the requirements carefully before applying.",
    "💰 Check if the salary matches your expectations.",
    "🎯 Tailor your application to match the job requirements.",
    "📤 Click Apply to submit your application instantly!"
  ],
  dashboard: [
    "📊 Track all your applications in one place.",
    "⭐ AI suggests jobs based on your profile and activity.",
    "📄 Keep your resume updated for better opportunities.",
    "📈 Complete your profile to increase visibility!"
  ],
  employer: [
    "📝 Write clear job descriptions to attract quality candidates.",
    "🎯 Use specific requirements to filter applicants.",
    "📊 Monitor your job post performance with analytics.",
    "💡 Respond to applicants quickly to secure top talent!"
  ],
  auth: [
    "🔐 Create an account to unlock all features.",
    "⚡ Quick signup with social login options.",
    "🎯 Choose your role: Job Seeker or Employer."
  ]
};

export function AIAssistant({ currentPage, userRole }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  const pageTips = tips[currentPage as keyof typeof tips] || tips.landing;

  useEffect(() => {
    setCurrentTip(0);
    setShowTooltip(true);
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % pageTips.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen, pageTips.length]);

  return (
    <>
      {/* Floating AI Assistant Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="relative">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && !isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-3 w-64 bg-white rounded-2xl shadow-2xl p-4 border border-blue-100"
              >
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-700">{pageTips[0]}</p>
                </div>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Assistant Avatar Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Sparkles className="w-8 h-8 text-white relative z-10" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Expanded Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-6 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border border-slate-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white">AI Assistant</h3>
                  <p className="text-xs text-white/80">Here to help you!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tips Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTip}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100"
                  >
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700">{pageTips[currentTip]}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* All Tips */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Quick Tips</p>
                  {pageTips.map((tip, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTip(index)}
                      className={`w-full text-left p-3 rounded-xl transition-all ${
                        currentTip === index
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <p className="text-sm">{tip}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-center text-slate-500">
                AI-powered assistance • Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
