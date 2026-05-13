import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultText?: string, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  he: {
    'app.title': 'Re-Assess',
    'app.title.redesign': 'עיצוב מחדש',
    'back': 'חזור',
    'loading.processing': 'מעבד פדגוגיה...',
    
    // Home
    'home.hero.title': 'איך המטלה שלך נראית בעידן ה-AI?',
    'home.hero.subtitle': 'שיפור פדגוגיה ועידוד למידה משמעותית באמצעות עיצוב מחדש של דרכי הערכה.',
    'home.tip.title': 'טיפ חשוב לפני שמתחילים',
    'home.tip.content': 'לפני שתיגש לעיצוב מחדש, אנו ממליצים מאוד לקחת את המטלה הנוכחית שלך ולנסות לפתור אותה בעצמך באמצעות כלי AI (כמו ChatGPT, Claude, או Gemini). בדיקה זו תאפשר לך לראות במו עיניך באיזו מידה ניתן לקבל תשובה טובה ובכך לעזור לך לתכנן אם ואלו חלקים דורשים עיצוב מחדש, בנוסף כדאי לחשוב איזה ידע ומיומניות נדרשים כדי לשפר את תשובת הבינה ולשקול להכניס אותם לתוך תוכנית הלימודים.',
    'home.start.title': 'התחל עיצוב למידה מחדש',
    'home.start.subtitle': 'נתח מיומנויות ושדרג את המערך הפדגוגי לליווי מיטבי של הסטודנטים.',

    // Layout
    'layout.logo': 'Re-Assess',
    'layout.subtitle': 'עיצוב מחדש של מטלות הערכה בעידן ה-AI',
    
    // App Alerts
    'error.word': 'שגיאה בקריאת קובץ Word. אנא נסה להעתיק את הטקסט ידנית.',
    'error.analyze': 'שגיאה בניתוח המטלה (שלב 1). פרטי שגיאה: ',
    // StepFinalResult
    'final.info.title': 'אישור ועריכת תוצרי המטלה',
    'final.info.content': 'לפניך נוסח המטלה המעודכן. <strong>עבור על כל חלק</strong>: תוכל לאשר אותו כפי שהוא, לערוך את הטקסט או להסיר חלקים שאינם רלוונטיים. בסיום, תוכל להעתיק את כל החלקים שאושרו למסמך המטלה שלך.',
    'final.task.title': 'משימת הערכה',
    'final.task.handled': 'כל החלקים טופלו',
    'final.task.unhandled': 'יש לאשר או לערוך את כל החלקים',
    'final.strategy.summary': 'סיכום האסטרטגיות שנבחרו',
    'final.student.instructions': 'הנחיות לסטודנטים',
    'final.btn.approve': 'אשר',
    'final.btn.edit': 'ערוך',
    'final.btn.save': 'שמור',
    'final.btn.remove': 'הסר',
    'final.lecturer.considerations': 'שיקולי דעת והנחיות למרצה',
    'final.rubric.title': 'מחוון הערכה (Rubric)',
    'final.rubric.generate': '✨ צור מחוון הערכה למטלה',
    'final.rubric.generating': 'מייצר מחוון...',
    'final.rubric.edit.hint': 'ניתן לערוך את הטבלה ע"י לחיצה על "ערוך"',
    'final.rubric.btn.edit': 'ערוך טבלה',
    'final.rubric.btn.save': 'שמור שינויים',
    'final.rubric.btn.copy': 'העתק מחוון',
    'final.rubric.btn.copied': 'הועתק!',
    'final.rubric.btn.word': 'הורד כקובץ Word',
    'final.rubric.col.criterion': 'קריטריון',
    'final.rubric.col.excellent': 'מצטיין',
    'final.rubric.col.good': 'טוב / עובר',
    'final.rubric.col.needsImprovement': 'טעון שיפור',
    'final.copy.all': 'העתק את כל חלקי המטלה שאושרו',
    'final.copy.all.success': 'הטקסט הועתק!',
    'final.chat.title': 'דיוק והתייעצות נוספת',
    'final.chat.empty': 'שאל שאלות נוספות לדיוק המטלה...',
    'final.chat.placeholder': 'שאל שאלה נוספת...',
    'final.chat.send': 'שלח',
    'final.btn.finish': 'סיים וחזור לדף הבית',
  },
  en: {
    'app.title': 'Re-Assess',
    'app.title.redesign': 'Redesign',
    'back': 'Back',
    'loading.processing': 'Processing pedagogy...',
    
    // Home
    'home.hero.title': 'How does your assignment look in the AI era?',
    'home.hero.subtitle': 'Improving pedagogy and encouraging meaningful learning through redesigning assessment methods.',
    'home.tip.title': 'Important tip before starting',
    'home.tip.content': 'Before redesigning, we highly recommend trying to solve your current assignment using an AI tool (like ChatGPT, Claude, or Gemini). This will allow you to see firsthand the extent to which a good answer can be obtained, helping you plan which parts require redesign. Also, consider what knowledge and skills are needed to improve the AI\'s answer and consider incorporating them into the curriculum.',
    'home.start.title': 'Start Learning Redesign',
    'home.start.subtitle': 'Analyze skills and upgrade the pedagogical setup for optimal student guidance.',

    // Layout
    'layout.logo': 'Re-Assess',
    'layout.subtitle': 'Redesigning Assessment Tasks in the AI Era',
    
    // App Alerts
    'error.word': 'Error reading Word file. Please try copying the text manually.',
    'error.analyze': 'Error analyzing the assignment (Step 1). Error details: ',

    // StepFinalResult
    'final.info.title': 'Approve and Edit Output',
    'final.info.content': 'Below is the updated assignment text. <strong>Review each section</strong>: You can approve it as is, edit the text, or remove irrelevant parts. Finally, you can copy all approved sections to your document.',
    'final.task.title': 'Assessment Task',
    'final.task.handled': 'All parts handled',
    'final.task.unhandled': 'Must approve or edit all parts',
    'final.strategy.summary': 'Summary of Selected Strategies',
    'final.student.instructions': 'Instructions for Students',
    'final.btn.approve': 'Approve',
    'final.btn.edit': 'Edit',
    'final.btn.save': 'Save',
    'final.btn.remove': 'Remove',
    'final.lecturer.considerations': 'Pedagogical Considerations for Lecturer',
    'final.rubric.title': 'Assessment Rubric',
    'final.rubric.generate': '✨ Generate Rubric',
    'final.rubric.generating': 'Generating rubric...',
    'final.rubric.edit.hint': 'You can edit the table by clicking "Edit"',
    'final.rubric.btn.edit': 'Edit Table',
    'final.rubric.btn.save': 'Save Changes',
    'final.rubric.btn.copy': 'Copy Rubric',
    'final.rubric.btn.copied': 'Copied!',
    'final.rubric.btn.word': 'Download as Word',
    'final.rubric.col.criterion': 'Criterion',
    'final.rubric.col.excellent': 'Excellent',
    'final.rubric.col.good': 'Good / Pass',
    'final.rubric.col.needsImprovement': 'Needs Improvement',
    'final.copy.all': 'Copy all approved sections',
    'final.copy.all.success': 'Text copied!',
    'final.chat.title': 'Refinement and Consultation',
    'final.chat.empty': 'Ask further questions to refine the task...',
    'final.chat.placeholder': 'Ask another question...',
    'final.chat.send': 'Send',
    'final.btn.finish': 'Finish & Return Home',

    // Stepper
    'step.1': 'Data Input',
    'step.2': 'Skills Analysis',
    'step.3': 'Strategies',
    'step.4': 'Final Output',

    // StepInput
    'input.info.title': 'Starting the Redesign Process',
    'input.info.content': 'Here we define the baseline for the new assignment. Make sure to enter the exact number of students, as the assistant will suggest scalable assessment methods accordingly.',
    'input.label.assignment': 'Assignment guidelines to redesign:',
    'input.opt.a': 'Option A: Paste text',
    'input.placeholder': 'What are students required to do currently?',
    'input.or': 'or',
    'input.opt.b': 'Option B: Upload File (PDF / Word)',
    'input.upload.hint': 'Click to upload a file',
    'input.label.students': 'Number of students in the course:',
    'input.btn.next': 'Analyze Skills (Bloom\'s Taxonomy)',

    // StepSkillsAnalysis
    'skills.info.title': 'Mapping Existing Skills',
    'skills.info.content': 'The AI has identified the following skills in your assignment according to Bloom\'s Taxonomy. <strong>Select the skills you want to keep or emphasize</strong> in the new version.',
    'skills.title.identified': 'Identified Skills:',
    'skills.btn.add': 'Add Custom Skill',
    'skills.title.custom': 'Additional Skills:',
    'skills.btn.continue': 'Continue to Assessment Strategies',
    'skills.modal.title': 'Add New Skill',
    'skills.modal.name': 'Skill Name',
    'skills.modal.level': 'Bloom Level',
    'skills.modal.reason': 'Reasoning / Context',
    'skills.modal.btn.cancel': 'Cancel',
    'skills.modal.btn.add': 'Add Skill',
    'skills.chart.title': 'Cognitive Levels Analysis (Bloom\'s Taxonomy)',
    'skills.chart.low': 'Remember & Understand',
    'skills.chart.high': 'Apply, Analyze & Create',
    'skills.chart.low.desc': 'Basic thinking levels (More exposed to AI)',
    'skills.chart.high.desc': 'Higher-order thinking levels (Deep learning)',
    
    // Bloom Levels
    'bloom.זכירה': 'Remember',
    'bloom.הבנה': 'Understand',
    'bloom.יישום': 'Apply',
    'bloom.אנליזה': 'Analyze',
    'bloom.הערכה': 'Evaluate',
    'bloom.יצירה': 'Create',

    // StepStrategyBuilder
    'strategy.info.title': 'Assessment Strategy Builder',
    'strategy.info.content': 'Based on the selected skills, the AI has generated a sequence of assessment strategies. Choose the specific method for each part.',
    'strategy.col.skills': 'Assessed Skills',
    'strategy.col.method': 'Assessment Method',
    'strategy.btn.add.defense': 'Add Oral Defense (Verification)',
    'strategy.btn.add.group': 'Add New Assessment Group',
    'strategy.btn.generate': 'Generate Full Assignment',
    'strategy.type.facetoface': 'Controlled Environment (Face-to-Face)',
    'strategy.type.submission': 'Open Environment (Submission)',
    'strategy.method.select': 'Select method...',
    'strategy.drag.hint': 'Move to part:',
    'strategy.part': 'Part {part}',
    'strategy.part.new': 'New Part',
    'strategy.header': 'Proposed Assessment Sequence',
    'strategy.desc': 'Adjust the groups as you see fit. The assistant considers {numStudents} students.',
    'strategy.recommended': 'Recommended',
    'strategy.rationale': 'Pedagogical rationale for method and sequence placement:',
    
    // Assessment Methods
    'method.written_exam': 'Written In-Class Exam',
    'method.computer_quiz': 'Short Computerized Quiz',
    'method.oral_exam': 'Individual Oral Exam',
    'method.quick_questions': 'Quick Knowledge Questions',
    'method.group_presentation': 'Group Presentation',
    'method.group_discussion': 'Group Discussion Assessment',
    'method.in_class_writing': 'In-Class Writing Assignment',
    'method.sample_eval': 'Sample Evaluation',
    'method.ai_writing': 'Writing Assignment with AI',
    'method.ai_feedback': 'Feedback on AI Output',
    'method.peer_eval': 'Peer Evaluation',
    'method.self_eval': 'Self Evaluation',
    'method.ai_simulation': 'AI-Developed Simulation',
    'method.reflection_journal': 'Reflection Journal',
    'method.process_doc': 'Process Documentation',
    'method.group_questions': 'Questions for Presenting Group',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, defaultText?: string, variables?: Record<string, string | number>): string => {
    let text = translations[language]?.[key] || translations['he']?.[key] || defaultText || key;
    if (variables) {
      Object.keys(variables).forEach(k => {
        text = text.replace(new RegExp(`{${k}}`, 'g'), String(variables[k]));
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
