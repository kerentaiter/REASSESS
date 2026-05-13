
import React from 'react';
import { useLanguage } from '../i18n';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  onBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, title, onBack }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-4xl mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center"
              title={t('back')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === 'he' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
              </svg>
            </button>
          )}
          <h1 className="text-3xl font-bold text-indigo-900">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
            className="flex items-center gap-1 bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 15h2.052M15 6h-6m-3 0V4a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6" />
            </svg>
            {language === 'he' ? 'English' : 'עברית'}
          </button>
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Re-Assess
          </div>
        </div>
      </header>
      <main className="w-full max-w-4xl flex-grow">
        {children}
      </main>
      <footer className="w-full max-w-4xl mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm flex flex-col items-center gap-2 pb-8">
        <div className="opacity-75">© {new Date().getFullYear()} Re-Assess - {language === 'he' ? 'פדגוגיה חדשנית בעידן ה-AI' : 'Innovative Pedagogy in the AI Era'}</div>
        <div className="font-bold text-indigo-900 bg-indigo-50 px-4 py-1 rounded-full">{language === 'he' ? 'פותח ע"י קרן טייטר מכון מופ"ת' : 'Developed by Keren Taiter, MOFET Institute'}</div>
      </footer>
    </div>
  );
};

export default Layout;
