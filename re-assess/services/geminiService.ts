
import { GoogleGenAI, Type } from "@google/genai";
import { BloomLevel, Skill, AssessmentMethod } from "../types";

const API_KEY = "AIzaSyDfSZ_yNEj-8tkWPN-I7M56gx5_vBIE_0A";
const ai = new GoogleGenAI({ apiKey: API_KEY });

// NOTE: testAiAssignment function removed as per requirements to remove that mode.

export const analyzeBloomTaxonomy = async (assignmentText: string, fileData?: { data: string, mimeType: string }) => {
  const parts: any[] = [];

  // Add file if it exists
  if (fileData) {
    parts.push({
      inlineData: {
        data: fileData.data,
        mimeType: fileData.mimeType
      }
    });
  }

  parts.push({
    text: `נתח את המטלה הבאה לפי הטקסונומיה של בלום. 
    עליך לזהות את המיומנויות הנדרשות במשימה הנוכחית ולהציע הרחבות שיחזקו את הלמידה.
    
    הנחיות קריטיות לניתוח מיומנויות "זכירה" (Remember):
    בעידן הבינה המלאכותית, פעולות זכירה פשוטות (כמו שליפת עובדות) נעשות בקלות ע"י ה-AI ולכן אינן נחשבות כ"למידה" משמעותית.
    בניתוח שלך, ציין תחת רמת ה"זכירה" אך ורק עוגני ידע קריטיים, עקרונות ליבה, או מושגי יסוד שהסטודנט *חייב* להפנים בזיכרון לטווח ארוך כדי לתפקד בתחום, ואי אפשר להסתמך רק על שליפה חיצונית עבורם.
    
    המטלה (טקסט ו/או קובץ מצורף): ${assignmentText}`
  });

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-lite-preview',
    contents: { parts },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          currentSkills: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                bloomLevel: { type: Type.STRING, enum: Object.values(BloomLevel) },
                reasoning: { type: Type.STRING }
              },
              required: ["name", "bloomLevel", "reasoning"]
            }
          },
          suggestedSkills: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                bloomLevel: { type: Type.STRING, enum: Object.values(BloomLevel) },
                reasoning: { type: Type.STRING }
              },
              required: ["name", "bloomLevel", "reasoning"]
            }
          }
        },
        required: ["currentSkills", "suggestedSkills"]
      }
    }
  });

  const cleanedText = response.text.replace(/```json/gi, '').replace(/```/g, '').trim();
  return JSON.parse(cleanedText);
};

export const generateAssessmentStrategies = async (skills: Skill[], numStudents: number) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-lite-preview',
    contents: `עבור רשימת המיומנויות הבאה וכיתה של ${numStudents} סטודנטים, בנה תהליך הערכה המורכב מ-2 עד 3 חלקים (קבוצות הערכה).
    
    עליך להפעיל שיקול דעת פדגוגי בקביעת סדר החלקים (Sequence):
    הימנע מתבנית קבועה. שקול כל מקרה לגופו:
    - דפוס 1 (Inquiry First): להתחיל במטלת יצירה/חקר (Submission) ורק לאחר מכן לבצע הגנה או בדיקה (FaceToFace). זה מתאים מאוד למטלות מורכבות בעידן ה-AI.
    - דפוס 2 (Foundations First): להתחיל בבדיקת ידע בסיסי (FaceToFace) ורק לאחר מכן לאפשר יישום בבית (Submission).
    
    עליך לבחור את הסדר הנכון ביותר עבור המיומנויות הספציפיות הללו.

    כללים פדגוגיים להמלצה:
    1. קדם תהליך למידה משמעותי המשלב דרישה להתייחסות לתכנים ספציפיים שנלמדו בשיעור.
    2. התחשב בגודל הכיתה (${numStudents} סטודנטים) בבחירת השיטה.
    3. הסבר בבהירות מדוע בחרת בסדר הזה (למשל: "התחלנו ב-Submission כדי לאפשר עומק, ואנו מסיימים ב-FaceToFace כדי לאמת מקוריות").
    
    שיטות זמינות:
    FaceToFace (הערכה בסביבה מבוקרת): מבחן כתוב, בוחן ממוחשב, בחינה בע"פ, שאלות ידע בשיעור, הצגת תוצר, הערכת דיון, כתיבה בכיתה, הערכה מדגמית.
    Submission (הערכה בסביבה פתוחה): כתיבת משימה עם AI, משוב על תוצר AI, הערכת עמיתים, הערכה עצמית, סימולציה עם AI, יומן רפלקציה, תיעוד שלבי העבודה.
    
    המיומנויות שנבחרו: ${JSON.stringify(skills)}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            skills: { type: Type.ARRAY, items: { type: Type.STRING } },
            method: { type: Type.STRING, description: "השיטה הספציפית המומלצת מתוך הרשימה" },
            type: { type: Type.STRING, enum: ['FaceToFace', 'Submission'] },
            explanation: { type: Type.STRING, description: "הסבר פדגוגי: נמק את בחירת השיטה ואת מיקומה ברצף ההערכה." }
          },
          required: ["skills", "method", "type", "explanation"]
        }
      }
    }
  });

  const cleanedText = response.text.replace(/```json/gi, '').replace(/```/g, '').trim();
  let res = JSON.parse(cleanedText);
  if (res && !Array.isArray(res)) {
    // Sometimes Gemini ignores the top-level array schema and wraps it in an object
    res = res.strategies || res.items || res.data || Object.values(res)[0] || [];
  }
  return res.map((item: any, index: number) => ({
    ...item,
    id: `group-${index}-${Date.now()}`
  }));
};

export interface TaskSection {
  title: string;
  content: string;
  audience: 'student' | 'lecturer';
}

export interface RephrasedResult {
  sections: TaskSection[];
  practicalTips: string;
}

export interface RubricRow {
  criterion: string;
  excellent: string;
  good: string;
  needsImprovement: string;
}

export const rephraseAssignment = async (originalText: string, targetSkills: Skill[], strategies: AssessmentMethod[], numStudents: number) => {
  const labelsMap = {
    FaceToFace: 'הערכה בסביבה מבוקרת',
    Submission: 'הערכה בסביבה פתוחה'
  };

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-lite-preview',
    contents: `נסח מחדש את המטלה המקורית למטלה אקדמית מעודכנת. המטרה היא יצירת "משימת הערכה" שלמה ומפורטת.
    
    כללים מבניים חובה:
    1. עבור הסטודנטים (sections): חלק את ההנחיות לפרקים נפרדים עבור כל אחד ממרכיבי המטלה.
       עבור כל אסטרטגיה ברשימה להלן, צור אובייקט TaskSection נפרד (audience: 'student') עם כותרת בפורמט: "חלק [מספר]: [שיטת ההערכה]".
       כל חלק כזה חייב להסביר לסטודנט בדיוק מה עליו לעשות ובאילו מיומנויות הוא משתמש.
    2. עבור המרצה (sections): צור לפחות 2 פרקים נפרדים (audience: 'lecturer'):
       א. "שיקולי דעת פדגוגיים" - הסבר מדוע נבחרו השיטות הללו.
       ב. "הנחיות לוגיסטיות ודגשים לבדיקה" - כיצד לבצע את ההערכה בפועל עבור ${numStudents} סטודנטים.
    3. סיכום האסטרטגיות (practicalTips): בסעיף זה כתוב סיכום קצר ובהיר של האסטרטגיות שנבחרו, וכיצד הן משרתות את המיומנויות שנבחרו בתהליך העיצוב (למשל: "נבחרה אסטרטגיה של הגנה בע"פ כדי לוודא זכירה של מושגי יסוד..."). התמקד בבחירות החדשות שנעשו.
    
    דגש על אותנטיות ופרסונליזציה:
    אם זה רלוונטי למשימה, הוסף בהנחיות לסטודנט דרישה מפורשת לקשר את התוכן לניסיון אישי, דוגמאות מהסביבה הקרובה, או ניתוח מקרה אקטואלי/מקומי - כדי להקשות על יצירת תשובה גנרית ע"י AI.
    
    נתונים לשילוב:
    ${strategies.map((s, idx) => `- אסטרטגיה ${idx + 1}: מיומנויות [${s.skills.join(', ')}] בשיטת "${s.userSelectedMethod}" (סוג: ${labelsMap[s.userSelectedCategory as keyof typeof labelsMap]}).`).join('\n')}
    
    מטלה מקורית: ${originalText}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          sections: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                content: { type: Type.STRING },
                audience: { type: Type.STRING, enum: ['student', 'lecturer'] }
              },
              required: ["title", "content", "audience"]
            }
          },
          practicalTips: { type: Type.STRING, description: "Summary of strategies and chosen skills" }
        },
        required: ["sections", "practicalTips"]
      }
    }
  });
  const cleanedText = response.text.replace(/```json/gi, '').replace(/```/g, '').trim();
  return JSON.parse(cleanedText) as RephrasedResult;
};

export const askFollowUpQuestion = async (
  context: { originalText: string, revisedTask: TaskSection[], strategies: AssessmentMethod[] },
  question: string,
  history: { role: 'user' | 'model', text: string }[]
) => {
  const chat = ai.chats.create({
    model: 'gemini-3.1-flash-lite-preview',
    config: {
      systemInstruction: `אתה עוזר פדגוגי מומחה. התמקד בחיבור לתוכן שנלמד בשיעור ובשיטות הערכה מגוונות.`,
    }
  });
  const response = await chat.sendMessage({ message: question });
  return response.text;
};

export const generateRubric = async (revisedSections: TaskSection[]) => {
  const studentInstructions = revisedSections
    .filter(s => s.audience === 'student')
    .map(s => s.content)
    .join('\n');

  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-lite-preview',
    contents: `צור מחוון הערכה (Rubric) מלא עבור המטלה הבאה.
    הקריטריונים צריכים לכלול היבטים כמו: איכות התוכן, חשיבה ביקורתית, שימוש מושכל ב-AI (אם רלוונטי), איכות הפרזנטציה/כתיבה, ורפלקציה.
    עבור כל קריטריון, נסח את התיאור עבור שלוש רמות ביצוע: מצטיין, עובר (טוב), וטעון שיפור.

    תוכן המטלה:
    ${studentInstructions}
    `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            criterion: { type: Type.STRING, description: "שם הקריטריון" },
            excellent: { type: Type.STRING, description: "תיאור ביצוע מצטיין" },
            good: { type: Type.STRING, description: "תיאור ביצוע עובר/טוב" },
            needsImprovement: { type: Type.STRING, description: "תיאור ביצוע טעון שיפור" }
          },
          required: ["criterion", "excellent", "good", "needsImprovement"]
        }
      }
    }
  });
  const cleanedText = response.text.replace(/```json/gi, '').replace(/```/g, '').trim();
  return JSON.parse(cleanedText) as RubricRow[];
};
