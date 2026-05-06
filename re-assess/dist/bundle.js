// ../REASSESS_github/re-assess/index.tsx
import React5 from "react";
import ReactDOM from "react-dom/client";

// ../REASSESS_github/re-assess/App.tsx
import { useState as useState4 } from "react";

// ../REASSESS_github/re-assess/components/Layout.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Layout = ({ children, title, onBack }) => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col items-center p-4 md:p-8", children: [
    /* @__PURE__ */ jsxs("header", { className: "w-full max-w-4xl mb-8 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        onBack && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onBack,
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-indigo-900", children: title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold", children: "Re-Assess" })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "w-full max-w-4xl flex-grow", children }),
    /* @__PURE__ */ jsxs("footer", { className: "w-full max-w-4xl mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm flex flex-col items-center gap-2 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "opacity-75", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Re-Assess - \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9\u05D4 \u05D7\u05D3\u05E9\u05E0\u05D9\u05EA \u05D1\u05E2\u05D9\u05D3\u05DF \u05D4-AI"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "font-bold text-indigo-900 bg-indigo-50 px-4 py-1 rounded-full", children: '\u05E4\u05D5\u05EA\u05D7 \u05E2"\u05D9 \u05E7\u05E8\u05DF \u05D8\u05D9\u05D9\u05D8\u05E8 \u05DE\u05DB\u05D5\u05DF \u05DE\u05D5\u05E4"\u05EA' })
    ] })
  ] });
};
var Layout_default = Layout;

// ../REASSESS_github/re-assess/components/InfoBox.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var InfoBox = ({ title, children, variant = "info" }) => {
  const colors = {
    info: "bg-indigo-50 border-indigo-200 text-indigo-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
    success: "bg-green-50 border-green-200 text-green-900"
  };
  return /* @__PURE__ */ jsxs2("div", { className: `p-4 rounded-xl border-l-4 mb-6 ${colors[variant]}`, children: [
    /* @__PURE__ */ jsxs2("h5", { className: "font-bold mb-1 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx2("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }),
      title
    ] }),
    /* @__PURE__ */ jsx2("div", { className: "text-sm leading-relaxed opacity-90", children })
  ] });
};

// ../REASSESS_github/re-assess/components/StepInput.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var StepInput = ({
  assignmentText,
  setAssignmentText,
  uploadedFile,
  onFileUpload,
  numStudents,
  setNumStudents,
  onNext,
  loading
}) => {
  return /* @__PURE__ */ jsxs3("div", { className: "bg-white p-8 rounded-xl shadow-sm border border-gray-100", children: [
    /* @__PURE__ */ jsx3(InfoBox, { title: "\u05EA\u05D7\u05D9\u05DC\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E2\u05D9\u05E6\u05D5\u05D1", children: "\u05DB\u05D0\u05DF \u05E0\u05D2\u05D3\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D1\u05E1\u05D9\u05E1 \u05DC\u05DE\u05D8\u05DC\u05D4 \u05D4\u05D7\u05D3\u05E9\u05D4. \u05D5\u05D5\u05D3\u05D0 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05D6\u05D9\u05DF \u05D0\u05EA \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD \u05D4\u05DE\u05D3\u05D5\u05D9\u05E7, \u05E9\u05DB\u05DF \u05D4\u05E2\u05D5\u05D6\u05E8 \u05D9\u05E6\u05D9\u05E2 \u05E9\u05D9\u05D8\u05D5\u05EA \u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E0\u05D5\u05EA-\u05D9\u05D9\u05E9\u05D5\u05DD (Scalable) \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05D9\u05EA\u05D4." }),
    /* @__PURE__ */ jsxs3("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("label", { className: "block text-lg font-semibold mb-2", children: "\u05D4\u05E0\u05D7\u05D9\u05D9\u05EA \u05D4\u05DE\u05D8\u05DC\u05D4 \u05DC\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05D3\u05E9:" }),
        /* @__PURE__ */ jsxs3("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx3("label", { className: "text-sm text-gray-600 mb-1 block", children: "\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D0': \u05D4\u05D3\u05D1\u05E7 \u05D8\u05E7\u05E1\u05D8" }),
            /* @__PURE__ */ jsx3(
              "textarea",
              {
                value: assignmentText,
                onChange: (e) => setAssignmentText(e.target.value),
                className: "w-full h-32 p-4 border rounded-lg outline-none focus:ring-2 focus:ring-green-500",
                placeholder: "\u05DE\u05D4 \u05D4\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05E2\u05E9\u05D5\u05EA \u05DB\u05D9\u05D5\u05DD?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-4 my-2", children: [
            /* @__PURE__ */ jsx3("div", { className: "h-px bg-gray-200 flex-1" }),
            /* @__PURE__ */ jsx3("span", { className: "text-gray-400 text-sm font-bold", children: "\u05D0\u05D5" }),
            /* @__PURE__ */ jsx3("div", { className: "h-px bg-gray-200 flex-1" })
          ] }),
          /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx3("label", { className: "text-sm text-gray-600 mb-1 block", children: "\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05D1': \u05D4\u05E2\u05DC\u05D4 \u05E7\u05D5\u05D1\u05E5 (PDF / Word)" }),
            /* @__PURE__ */ jsxs3("div", { className: "relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors text-center cursor-pointer group", children: [
              /* @__PURE__ */ jsx3(
                "input",
                {
                  type: "file",
                  accept: ".pdf,.docx,.txt",
                  onChange: onFileUpload,
                  className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                }
              ),
              /* @__PURE__ */ jsxs3("div", { className: "flex flex-col items-center justify-center pointer-events-none group-hover:text-green-700 transition-colors", children: [
                /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-gray-400 mb-2 group-hover:text-green-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" }) }),
                uploadedFile ? /* @__PURE__ */ jsx3("span", { className: "text-green-700 font-bold", children: uploadedFile.name }) : /* @__PURE__ */ jsx3("span", { className: "text-gray-500", children: "\u05DC\u05D7\u05E5 \u05DC\u05D4\u05E2\u05DC\u05D0\u05EA \u05E7\u05D5\u05D1\u05E5" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { children: [
        /* @__PURE__ */ jsx3("label", { className: "block text-lg font-semibold mb-2", children: "\u05DE\u05E1\u05E4\u05E8 \u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD \u05D1\u05E7\u05D5\u05E8\u05E1:" }),
        /* @__PURE__ */ jsx3("input", { type: "number", value: numStudents, onChange: (e) => setNumStudents(parseInt(e.target.value)), className: "w-32 p-3 border rounded-lg font-bold text-indigo-900 focus:ring-2 focus:ring-indigo-500" })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("button", { onClick: onNext, disabled: loading || !assignmentText && !uploadedFile, className: "mt-8 w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-md", children: "\u05E0\u05EA\u05D7 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D1\u05D8\u05E7\u05E1\u05D5\u05E0\u05D5\u05DE\u05D9\u05D9\u05EA \u05D1\u05DC\u05D5\u05DD" })
  ] });
};
var StepInput_default = StepInput;

// ../REASSESS_github/re-assess/components/StepSkillsAnalysis.tsx
import { useState, useMemo } from "react";

// ../REASSESS_github/re-assess/types.ts
var BloomLevel = /* @__PURE__ */ ((BloomLevel2) => {
  BloomLevel2["Remember"] = "\u05D6\u05DB\u05D9\u05E8\u05D4";
  BloomLevel2["Understand"] = "\u05D4\u05D1\u05E0\u05D4";
  BloomLevel2["Apply"] = "\u05D9\u05D9\u05E9\u05D5\u05DD";
  BloomLevel2["Analyze"] = "\u05D0\u05E0\u05DC\u05D9\u05D6\u05D4";
  BloomLevel2["Evaluate"] = "\u05D4\u05E2\u05E8\u05DB\u05D4";
  BloomLevel2["Create"] = "\u05D9\u05E6\u05D9\u05E8\u05D4";
  return BloomLevel2;
})(BloomLevel || {});

// ../REASSESS_github/re-assess/components/StepSkillsAnalysis.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var StepSkillsAnalysis = ({
  bloomAnalysis,
  selectedSkills,
  handleSkillToggle,
  customSkills,
  onAddCustomSkill,
  onNext,
  onBack,
  loading
}) => {
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState("\u05D9\u05D9\u05E9\u05D5\u05DD" /* Apply */);
  const handleAdd = () => {
    if (!newSkillName.trim())
      return;
    const newSkill = {
      name: newSkillName.trim(),
      bloomLevel: newSkillLevel,
      reasoning: "\u05D4\u05D5\u05E1\u05E4\u05D4 \u05D9\u05D3\u05E0\u05D9\u05EA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05DE\u05E8\u05E6\u05D4"
    };
    onAddCustomSkill(newSkill);
    setNewSkillName("");
  };
  const chartData = useMemo(() => {
    if (!bloomAnalysis)
      return { low: 0, high: 0 };
    const allSkills = [...bloomAnalysis.currentSkills, ...bloomAnalysis.suggestedSkills, ...customSkills];
    const lowOrderLevels = ["\u05D6\u05DB\u05D9\u05E8\u05D4" /* Remember */, "\u05D4\u05D1\u05E0\u05D4" /* Understand */];
    let lowCount = 0;
    let highCount = 0;
    allSkills.forEach((skill) => {
      if (selectedSkills.length > 0 && !selectedSkills.some((s) => s.name === skill.name))
        return;
      if (lowOrderLevels.includes(skill.bloomLevel)) {
        lowCount++;
      } else {
        highCount++;
      }
    });
    const total = lowCount + highCount;
    if (total === 0)
      return { low: 0, high: 0 };
    return {
      low: Math.round(lowCount / total * 100),
      high: Math.round(highCount / total * 100)
    };
  }, [bloomAnalysis, customSkills, selectedSkills]);
  if (!bloomAnalysis)
    return null;
  return /* @__PURE__ */ jsxs4("div", { className: "bg-white p-6 rounded-xl shadow-sm border animate-fade-in", children: [
    /* @__PURE__ */ jsxs4(InfoBox, { title: "\u05D1\u05D7\u05D9\u05E8\u05EA \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D9\u05E2\u05D3", children: [
      "\u05D4\u05E2\u05D5\u05D6\u05E8 \u05D4\u05E4\u05D3\u05D2\u05D5\u05D2\u05D9 \u05E0\u05D9\u05EA\u05D7 \u05D0\u05EA \u05D4\u05DE\u05D8\u05DC\u05D4 \u05D5\u05D7\u05D9\u05DC\u05E7 \u05D0\u05D5\u05EA\u05D4 \u05DC\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA. ",
      /* @__PURE__ */ jsx4("strong", { children: "\u05E1\u05DE\u05DF \u05D1-V" }),
      " \u05D0\u05EA \u05D4\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05D4\u05E2\u05E8\u05D9\u05DA \u05D1\u05DE\u05D8\u05DC\u05D4 \u05D4\u05D7\u05D3\u05E9\u05D4. \u05EA\u05D5\u05DB\u05DC \u05D2\u05DD \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DE\u05E9\u05DC\u05DA \u05D1\u05EA\u05D9\u05D1\u05D4 \u05DC\u05DE\u05D8\u05D4."
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200", children: [
      /* @__PURE__ */ jsx4("h4", { className: "font-bold text-gray-800 mb-4 text-center", children: "\u05E4\u05D9\u05DC\u05D5\u05D7 \u05E8\u05DE\u05D5\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 (\u05D8\u05E7\u05E1\u05D5\u05E0\u05D5\u05DE\u05D9\u05D9\u05EA \u05D1\u05DC\u05D5\u05DD)" }),
      /* @__PURE__ */ jsxs4("div", { className: "flex h-12 rounded-full overflow-hidden shadow-inner", children: [
        /* @__PURE__ */ jsx4(
          "div",
          {
            style: { width: `${chartData.low}%` },
            className: "bg-amber-300 flex items-center justify-center text-amber-900 font-bold text-sm transition-all duration-500",
            children: chartData.low > 5 && `\u05D6\u05DB\u05D9\u05E8\u05D4 \u05D5\u05D4\u05D1\u05E0\u05D4 (${chartData.low}%)`
          }
        ),
        /* @__PURE__ */ jsx4(
          "div",
          {
            style: { width: `${chartData.high}%` },
            className: "bg-indigo-500 flex items-center justify-center text-white font-bold text-sm transition-all duration-500",
            children: chartData.high > 5 && `\u05D9\u05D9\u05E9\u05D5\u05DD, \u05D0\u05E0\u05DC\u05D9\u05D6\u05D4 \u05D5\u05D9\u05E6\u05D9\u05E8\u05D4 (${chartData.high}%)`
          }
        )
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "flex justify-between mt-2 text-xs text-gray-500 px-1", children: [
        /* @__PURE__ */ jsx4("span", { children: "\u05E8\u05DE\u05D5\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA (\u05D7\u05E9\u05D5\u05E4\u05D5\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DC-AI)" }),
        /* @__PURE__ */ jsx4("span", { children: "\u05E8\u05DE\u05D5\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D5\u05EA (\u05DC\u05DE\u05D9\u05D3\u05D4 \u05E2\u05DE\u05D5\u05E7\u05D4)" })
      ] })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "grid gap-3 max-h-[500px] overflow-y-auto pr-2 mb-6", children: bloomAnalysis.currentSkills.concat(bloomAnalysis.suggestedSkills).concat(customSkills).map((skill, idx) => /* @__PURE__ */ jsxs4("div", { className: `flex items-start gap-4 p-4 rounded-xl border transition-all ${selectedSkills.some((s) => s.name === skill.name) ? "bg-indigo-50 border-indigo-400 shadow-sm" : "bg-gray-50 border-gray-200 opacity-80"}`, children: [
      /* @__PURE__ */ jsx4("input", { type: "checkbox", checked: selectedSkills.some((s) => s.name === skill.name), onChange: () => handleSkillToggle(skill), className: "mt-1.5 w-6 h-6 rounded-md cursor-pointer accent-indigo-600" }),
      /* @__PURE__ */ jsxs4("div", { className: "flex-1 cursor-pointer", onClick: () => handleSkillToggle(skill), children: [
        /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx4("span", { className: "font-bold text-indigo-900 text-lg", children: skill.name }),
          /* @__PURE__ */ jsx4("span", { className: "text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-semibold", children: skill.bloomLevel })
        ] }),
        /* @__PURE__ */ jsx4("p", { className: "text-sm text-gray-700 mt-1 leading-relaxed", children: skill.reasoning })
      ] })
    ] }, idx)) }),
    /* @__PURE__ */ jsxs4("div", { className: "bg-gray-50 p-6 rounded-xl border border-gray-200 border-dashed mb-6", children: [
      /* @__PURE__ */ jsx4("h4", { className: "font-bold text-gray-800 mb-4", children: "\u05D4\u05D5\u05E1\u05E3 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05EA \u05D9\u05E2\u05D3 \u05E0\u05D5\u05E1\u05E4\u05EA" }),
      /* @__PURE__ */ jsxs4("div", { className: "flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ jsx4(
          "input",
          {
            type: "text",
            value: newSkillName,
            onChange: (e) => setNewSkillName(e.target.value),
            placeholder: "\u05E9\u05DD \u05D4\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05EA (\u05DC\u05DE\u05E9\u05DC: \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E6\u05D5\u05D5\u05EA, \u05E4\u05E8\u05D6\u05E0\u05D8\u05E6\u05D9\u05D4...)",
            className: "flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          }
        ),
        /* @__PURE__ */ jsx4(
          "select",
          {
            value: newSkillLevel,
            onChange: (e) => setNewSkillLevel(e.target.value),
            className: "p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white",
            children: Object.values(BloomLevel).map((level) => /* @__PURE__ */ jsx4("option", { value: level, children: level }, level))
          }
        ),
        /* @__PURE__ */ jsx4(
          "button",
          {
            onClick: handleAdd,
            disabled: !newSkillName.trim(),
            className: "bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all disabled:opacity-50",
            children: "+ \u05D4\u05D5\u05E1\u05E3 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05EA"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "flex gap-4 mt-8 pt-6 border-t", children: [
      /* @__PURE__ */ jsx4("button", { onClick: onBack, className: "px-8 py-3 border rounded-lg font-bold hover:bg-gray-50", children: "\u05D7\u05D6\u05D5\u05E8" }),
      /* @__PURE__ */ jsx4("button", { onClick: onNext, disabled: loading || selectedSkills.length === 0, className: "flex-1 bg-indigo-600 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition-all", children: "\u05D4\u05DE\u05E9\u05DA \u05DC\u05E0\u05D9\u05D4\u05D5\u05DC \u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA" })
    ] })
  ] });
};
var StepSkillsAnalysis_default = StepSkillsAnalysis;

// ../REASSESS_github/re-assess/components/StepStrategyBuilder.tsx
import { useState as useState2 } from "react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var CATEGORIZED_OPTIONS = {
  FaceToFace: [
    "\u05DE\u05D1\u05D7\u05DF \u05DB\u05EA\u05D5\u05D1 \u05D1\u05DB\u05D9\u05EA\u05D4",
    "\u05D1\u05D5\u05D7\u05DF \u05DE\u05DE\u05D5\u05D7\u05E9\u05D1 \u05E7\u05E6\u05E8 \u05D1\u05DB\u05D9\u05EA\u05D4",
    '\u05D1\u05D7\u05D9\u05E0\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D1\u05E2"\u05E4',
    "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D9\u05D3\u05E2 \u05DE\u05D4\u05D9\u05E8\u05D5\u05EA \u05D1\u05E9\u05D9\u05E2\u05D5\u05E8",
    "\u05D4\u05E6\u05D2\u05EA \u05EA\u05D5\u05E6\u05E8 \u05E7\u05D1\u05D5\u05E6\u05EA\u05D9",
    "\u05D4\u05E2\u05E8\u05DB\u05EA \u05D3\u05D9\u05D5\u05DF \u05E7\u05D1\u05D5\u05E6\u05EA\u05D9",
    "\u05DB\u05EA\u05D9\u05D1\u05D4 \u05D5\u05D4\u05D2\u05E9\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05DB\u05D9\u05EA\u05D4",
    "\u05D4\u05E2\u05E8\u05DB\u05D4 \u05DE\u05D3\u05D2\u05DE\u05D9\u05EA"
  ],
  Submission: [
    "\u05DB\u05EA\u05D9\u05D1\u05EA \u05DE\u05E9\u05D9\u05DE\u05D4 \u05E2\u05DD AI",
    "\u05DE\u05E9\u05D5\u05D1 \u05E2\u05DC \u05EA\u05D5\u05E6\u05E8 AI",
    "\u05D4\u05E2\u05E8\u05DB\u05EA \u05E2\u05DE\u05D9\u05EA\u05D9\u05DD",
    "\u05D4\u05E2\u05E8\u05DB\u05D4 \u05E2\u05E6\u05DE\u05D9\u05EA",
    "\u05E1\u05D9\u05DE\u05D5\u05DC\u05E6\u05D9\u05D4 \u05E9\u05E4\u05D5\u05EA\u05D7\u05D4 \u05E2\u05DD AI",
    "\u05D9\u05D5\u05DE\u05DF \u05E8\u05E4\u05DC\u05E7\u05E6\u05D9\u05D4",
    "\u05EA\u05D9\u05E2\u05D5\u05D3 \u05E9\u05DC\u05D1\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4"
  ],
  Defense: [
    '\u05D1\u05D7\u05D9\u05E0\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D1\u05E2"\u05E4',
    "\u05D4\u05E2\u05E8\u05DB\u05D4 \u05DE\u05D3\u05D2\u05DE\u05D9\u05EA",
    "\u05E9\u05D0\u05DC\u05D5\u05EA \u05DC\u05E7\u05D1\u05D5\u05E6\u05EA \u05D4\u05DE\u05D2\u05D9\u05E9\u05D9\u05DD \u05D1\u05DB\u05D9\u05EA\u05D4"
  ]
};
var StepStrategyBuilder = ({
  strategies,
  numStudents,
  updateStrategySelection,
  moveSkillToGroup,
  addNewGroup,
  onNext,
  onBack,
  loading
}) => {
  const [inspectedSkill, setInspectedSkill] = useState2(null);
  const shouldShowDefenseSuggestion = (idx, strat) => {
    const isLast = idx === strategies.length - 1;
    const isAiSubmission = strat.userSelectedCategory === "Submission";
    const hasRoomForMore = strategies.length < 3;
    return isLast && isAiSubmission && hasRoomForMore;
  };
  return /* @__PURE__ */ jsx5("div", { className: "space-y-6 animate-fade-in pb-12", children: /* @__PURE__ */ jsxs5("div", { className: "bg-white p-8 rounded-2xl shadow-xl border-t-8 border-indigo-600 relative", children: [
    /* @__PURE__ */ jsx5(InfoBox, { title: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05D4\u05E2\u05E8\u05DB\u05D4", children: "\u05DC\u05E4\u05E0\u05D9\u05DA \u05D4\u05E6\u05E2\u05D4 \u05DC\u05E8\u05E6\u05E3 \u05D4\u05E2\u05E8\u05DB\u05D4 \u05D4\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05E9\u05D1\u05D7\u05E8\u05EA. \u05D4\u05E2\u05D5\u05D6\u05E8 \u05D4\u05E4\u05D3\u05D2\u05D5\u05D2\u05D9 \u05E1\u05D9\u05D3\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DC\u05E7\u05D9\u05DD \u05D1\u05E1\u05D3\u05E8 \u05DC\u05D5\u05D2\u05D9 (\u05DC\u05DE\u05E9\u05DC: \u05D9\u05D3\u05E2 \u05DC\u05E4\u05E0\u05D9 \u05D9\u05D9\u05E9\u05D5\u05DD, \u05D0\u05D5 \u05D9\u05E6\u05D9\u05E8\u05D4 \u05DC\u05E4\u05E0\u05D9 \u05D4\u05D2\u05E0\u05D4), \u05D0\u05DA \u05D9\u05E9 \u05DC\u05DA \u05E9\u05DC\u05D9\u05D8\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05E9\u05D9\u05D8\u05D5\u05EA \u05D5\u05D4\u05E1\u05D3\u05E8." }),
    /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx5("h3", { className: "text-2xl font-bold text-indigo-900", children: "\u05E8\u05E6\u05E3 \u05D4\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D4\u05DE\u05D5\u05E6\u05E2" }),
        /* @__PURE__ */ jsxs5("p", { className: "text-gray-600", children: [
          "\u05D4\u05EA\u05D0\u05DD \u05D0\u05EA \u05D4\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05DC\u05E4\u05D9 \u05E9\u05D9\u05E7\u05D5\u05DC \u05D3\u05E2\u05EA\u05DA. \u05D4\u05E2\u05D5\u05D6\u05E8 \u05DE\u05EA\u05D7\u05E9\u05D1 \u05D1-",
          numStudents,
          " \u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD."
        ] })
      ] }),
      /* @__PURE__ */ jsx5("button", { onClick: () => addNewGroup("\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05EA \u05D7\u05D3\u05E9\u05D4"), className: "bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md", children: "+ \u05D4\u05D5\u05E1\u05E3 \u05D7\u05DC\u05E7" })
    ] }),
    /* @__PURE__ */ jsx5("div", { className: "space-y-8", children: strategies.map((strat, idx) => /* @__PURE__ */ jsxs5("div", { className: "p-6 rounded-2xl bg-gray-50 border-2 border-indigo-100 shadow-sm relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs5("div", { className: "absolute top-0 right-0 bg-indigo-100 text-indigo-800 px-4 py-1 rounded-bl-xl font-bold text-sm", children: [
        "\u05D7\u05DC\u05E7 ",
        idx + 1,
        " \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA"
      ] }),
      /* @__PURE__ */ jsx5("h4", { className: "text-sm font-bold text-indigo-400 mb-3 mt-4 uppercase", children: "\u05E7\u05D1\u05D5\u05E6\u05EA \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA" }),
      /* @__PURE__ */ jsx5("div", { className: "flex flex-wrap gap-3 mb-6", children: strat.skills.map((s, i) => /* @__PURE__ */ jsx5("button", { onClick: () => setInspectedSkill({ name: s, groupIdx: idx }), className: `skill-btn flex items-center bg-white text-indigo-900 border-2 border-indigo-200 text-sm px-4 py-2 rounded-xl font-bold shadow-sm ${inspectedSkill?.name === s ? "ring-4 ring-indigo-400" : ""}`, children: s }, i)) }),
      inspectedSkill && inspectedSkill.groupIdx === idx && /* @__PURE__ */ jsxs5("div", { className: "mb-6 p-5 bg-white rounded-xl border-2 border-indigo-500 shadow-lg animate-fade-in", children: [
        /* @__PURE__ */ jsxs5("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsx5("h5", { className: "font-bold text-lg text-indigo-900", children: inspectedSkill.name }),
          /* @__PURE__ */ jsx5("button", { onClick: () => setInspectedSkill(null), className: "text-gray-400 hover:text-gray-600", children: "\u2715" })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "flex flex-wrap gap-2 pt-4 border-t", children: [
          /* @__PURE__ */ jsx5("span", { className: "text-xs font-bold text-gray-400 w-full mb-1", children: "\u05D4\u05E2\u05D1\u05E8 \u05DC\u05D7\u05DC\u05E7:" }),
          strategies.map((target, tIdx) => target.id !== strat.id && /* @__PURE__ */ jsxs5("button", { onClick: () => {
            moveSkillToGroup(inspectedSkill.name, target.id);
            setInspectedSkill(null);
          }, className: "bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-lg hover:bg-indigo-600 hover:text-white", children: [
            "\u05D7\u05DC\u05E7 ",
            tIdx + 1
          ] }, target.id)),
          /* @__PURE__ */ jsx5("button", { onClick: () => {
            addNewGroup(inspectedSkill.name);
            setInspectedSkill(null);
          }, className: "bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-lg hover:bg-green-600 hover:text-white", children: "+ \u05D7\u05DC\u05E7 \u05D7\u05D3\u05E9" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "grid md:grid-cols-2 gap-8 pt-4 border-t", children: [
        /* @__PURE__ */ jsxs5("div", { children: [
          /* @__PURE__ */ jsx5("label", { className: "block text-sm font-bold text-gray-700 mb-3", children: "\u05E1\u05D5\u05D2 \u05D4\u05E2\u05E8\u05DB\u05D4:" }),
          /* @__PURE__ */ jsxs5("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx5("button", { onClick: () => updateStrategySelection(idx, "FaceToFace"), className: `flex-1 py-4 rounded-xl font-bold border-2 transition-all ${strat.userSelectedCategory === "FaceToFace" ? "bg-indigo-600 border-indigo-600 text-white shadow-lg" : "bg-white text-gray-400 border-gray-100 hover:border-indigo-200"}`, children: "\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA" }),
            /* @__PURE__ */ jsx5("button", { onClick: () => updateStrategySelection(idx, "Submission"), className: `flex-1 py-4 rounded-xl font-bold border-2 transition-all ${strat.userSelectedCategory === "Submission" ? "bg-indigo-600 border-indigo-600 text-white shadow-lg" : "bg-white text-gray-400 border-gray-100 hover:border-indigo-200"}`, children: "\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05E4\u05EA\u05D5\u05D7\u05D4" })
          ] })
        ] }),
        strat.userSelectedCategory && /* @__PURE__ */ jsxs5("div", { className: "animate-fade-in", children: [
          /* @__PURE__ */ jsx5("label", { className: "block text-sm font-bold text-gray-700 mb-3", children: "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E9\u05D9\u05D8\u05D4:" }),
          /* @__PURE__ */ jsxs5(
            "select",
            {
              value: strat.userSelectedMethod,
              onChange: (e) => updateStrategySelection(idx, strat.userSelectedCategory, e.target.value),
              className: "w-full p-4 border-2 border-indigo-200 rounded-xl bg-white outline-none focus:border-indigo-500 font-medium text-gray-800 shadow-sm appearance-none",
              children: [
                /* @__PURE__ */ jsx5("option", { value: "", children: "-- \u05D1\u05D7\u05E8 \u05E9\u05D9\u05D8\u05D4 --" }),
                (() => {
                  const baseOptions = CATEGORIZED_OPTIONS[strat.userSelectedCategory];
                  const defenseOptions = strat.userSelectedCategory === "FaceToFace" ? CATEGORIZED_OPTIONS.Defense : [];
                  const combined = Array.from(/* @__PURE__ */ new Set([...baseOptions, ...defenseOptions]));
                  return combined.map((opt) => /* @__PURE__ */ jsx5("option", { value: opt, children: opt === strat.method ? `${opt} (\u05DE\u05D5\u05DE\u05DC\u05E5)` : opt }, opt));
                })()
              ]
            }
          ),
          /* @__PURE__ */ jsxs5("div", { className: "mt-3 bg-blue-50 border border-blue-100 p-3 rounded-lg", children: [
            /* @__PURE__ */ jsx5("p", { className: "text-xs font-bold text-blue-800 mb-1", children: "\u05E8\u05E6\u05D9\u05D5\u05E0\u05DC \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9 \u05DC\u05E9\u05D9\u05D8\u05D4 \u05D5\u05DC\u05DE\u05D9\u05E7\u05D5\u05DD \u05D1\u05E8\u05E6\u05E3:" }),
            /* @__PURE__ */ jsx5("p", { className: "text-sm text-blue-900 leading-relaxed", children: strat.explanation })
          ] }),
          shouldShowDefenseSuggestion(idx, strat) && /* @__PURE__ */ jsx5("button", { onClick: () => addNewGroup("\u05DB\u05DC\u05DC\u05D9", true), className: "mt-3 w-full text-xs bg-amber-50 text-amber-700 border border-amber-200 p-2 rounded-lg font-bold hover:bg-amber-100 shadow-sm transition-colors", children: "+ \u05D4\u05E6\u05E2\u05D4: \u05D4\u05D5\u05E1\u05E4\u05EA \u05E9\u05DC\u05D1 \u05D4\u05D2\u05E0\u05D4 (Defense) \u05D1\u05E1\u05D9\u05D5\u05DD \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA" })
        ] })
      ] })
    ] }, strat.id)) }),
    /* @__PURE__ */ jsxs5("div", { className: "flex gap-4 mt-12 pt-8 border-t", children: [
      /* @__PURE__ */ jsx5("button", { onClick: onBack, className: "px-10 py-4 border-2 rounded-xl font-bold hover:bg-gray-50 transition-all", children: "\u05D7\u05D6\u05D5\u05E8" }),
      /* @__PURE__ */ jsx5("button", { onClick: onNext, disabled: loading, className: "flex-1 bg-green-600 text-white py-4 rounded-xl font-bold text-xl shadow-xl hover:bg-green-700 transition-all", children: "\u05E6\u05D5\u05E8 \u05DE\u05D8\u05DC\u05D4 \u05D5\u05E1\u05D9\u05DB\u05D5\u05DD \u05DC\u05DE\u05D9\u05D3\u05D4" })
    ] })
  ] }) });
};
var StepStrategyBuilder_default = StepStrategyBuilder;

// ../REASSESS_github/re-assess/components/StepFinalResult.tsx
import { useState as useState3, useRef, useEffect } from "react";

// ../REASSESS_github/re-assess/services/geminiService.ts
import { GoogleGenAI, Type } from "@google/genai";
var part1 = "AIzaSyBl_Of_sUNgHv_";
var part2 = "NUvEfccXZQBucDPtM91M";
var API_KEY = part1 + part2;
var ai = new GoogleGenAI({ apiKey: API_KEY });
var analyzeBloomTaxonomy = async (assignmentText, fileData) => {
  const parts = [];
  if (fileData) {
    parts.push({
      inlineData: {
        data: fileData.data,
        mimeType: fileData.mimeType
      }
    });
  }
  parts.push({
    text: `\u05E0\u05EA\u05D7 \u05D0\u05EA \u05D4\u05DE\u05D8\u05DC\u05D4 \u05D4\u05D1\u05D0\u05D4 \u05DC\u05E4\u05D9 \u05D4\u05D8\u05E7\u05E1\u05D5\u05E0\u05D5\u05DE\u05D9\u05D4 \u05E9\u05DC \u05D1\u05DC\u05D5\u05DD. 
    \u05E2\u05DC\u05D9\u05DA \u05DC\u05D6\u05D4\u05D5\u05EA \u05D0\u05EA \u05D4\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D4\u05E0\u05D3\u05E8\u05E9\u05D5\u05EA \u05D1\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9\u05EA \u05D5\u05DC\u05D4\u05E6\u05D9\u05E2 \u05D4\u05E8\u05D7\u05D1\u05D5\u05EA \u05E9\u05D9\u05D7\u05D6\u05E7\u05D5 \u05D0\u05EA \u05D4\u05DC\u05DE\u05D9\u05D3\u05D4.
    
    \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05E7\u05E8\u05D9\u05D8\u05D9\u05D5\u05EA \u05DC\u05E0\u05D9\u05EA\u05D5\u05D7 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA "\u05D6\u05DB\u05D9\u05E8\u05D4" (Remember):
    \u05D1\u05E2\u05D9\u05D3\u05DF \u05D4\u05D1\u05D9\u05E0\u05D4 \u05D4\u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA, \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D6\u05DB\u05D9\u05E8\u05D4 \u05E4\u05E9\u05D5\u05D8\u05D5\u05EA (\u05DB\u05DE\u05D5 \u05E9\u05DC\u05D9\u05E4\u05EA \u05E2\u05D5\u05D1\u05D3\u05D5\u05EA) \u05E0\u05E2\u05E9\u05D5\u05EA \u05D1\u05E7\u05DC\u05D5\u05EA \u05E2"\u05D9 \u05D4-AI \u05D5\u05DC\u05DB\u05DF \u05D0\u05D9\u05E0\u05DF \u05E0\u05D7\u05E9\u05D1\u05D5\u05EA \u05DB"\u05DC\u05DE\u05D9\u05D3\u05D4" \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9\u05EA.
    \u05D1\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E9\u05DC\u05DA, \u05E6\u05D9\u05D9\u05DF \u05EA\u05D7\u05EA \u05E8\u05DE\u05EA \u05D4"\u05D6\u05DB\u05D9\u05E8\u05D4" \u05D0\u05DA \u05D5\u05E8\u05E7 \u05E2\u05D5\u05D2\u05E0\u05D9 \u05D9\u05D3\u05E2 \u05E7\u05E8\u05D9\u05D8\u05D9\u05D9\u05DD, \u05E2\u05E7\u05E8\u05D5\u05E0\u05D5\u05EA \u05DC\u05D9\u05D1\u05D4, \u05D0\u05D5 \u05DE\u05D5\u05E9\u05D2\u05D9 \u05D9\u05E1\u05D5\u05D3 \u05E9\u05D4\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8 *\u05D7\u05D9\u05D9\u05D1* \u05DC\u05D4\u05E4\u05E0\u05D9\u05DD \u05D1\u05D6\u05D9\u05DB\u05E8\u05D5\u05DF \u05DC\u05D8\u05D5\u05D5\u05D7 \u05D0\u05E8\u05D5\u05DA \u05DB\u05D3\u05D9 \u05DC\u05EA\u05E4\u05E7\u05D3 \u05D1\u05EA\u05D7\u05D5\u05DD, \u05D5\u05D0\u05D9 \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E1\u05EA\u05DE\u05DA \u05E8\u05E7 \u05E2\u05DC \u05E9\u05DC\u05D9\u05E4\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05E2\u05D1\u05D5\u05E8\u05DD.
    
    \u05D4\u05DE\u05D8\u05DC\u05D4 (\u05D8\u05E7\u05E1\u05D8 \u05D5/\u05D0\u05D5 \u05E7\u05D5\u05D1\u05E5 \u05DE\u05E6\u05D5\u05E8\u05E3): ${assignmentText}`
  });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
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
  const cleanedText = response.text.replace(/```json/gi, "").replace(/```/g, "").trim();
  return JSON.parse(cleanedText);
};
var generateAssessmentStrategies = async (skills, numStudents) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: `\u05E2\u05D1\u05D5\u05E8 \u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D4\u05D1\u05D0\u05D4 \u05D5\u05DB\u05D9\u05EA\u05D4 \u05E9\u05DC ${numStudents} \u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD, \u05D1\u05E0\u05D4 \u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E2\u05E8\u05DB\u05D4 \u05D4\u05DE\u05D5\u05E8\u05DB\u05D1 \u05DE-2 \u05E2\u05D3 3 \u05D7\u05DC\u05E7\u05D9\u05DD (\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D4\u05E2\u05E8\u05DB\u05D4).
    
    \u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05E9\u05D9\u05E7\u05D5\u05DC \u05D3\u05E2\u05EA \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9 \u05D1\u05E7\u05D1\u05D9\u05E2\u05EA \u05E1\u05D3\u05E8 \u05D4\u05D7\u05DC\u05E7\u05D9\u05DD (Sequence):
    \u05D4\u05D9\u05DE\u05E0\u05E2 \u05DE\u05EA\u05D1\u05E0\u05D9\u05EA \u05E7\u05D1\u05D5\u05E2\u05D4. \u05E9\u05E7\u05D5\u05DC \u05DB\u05DC \u05DE\u05E7\u05E8\u05D4 \u05DC\u05D2\u05D5\u05E4\u05D5:
    - \u05D3\u05E4\u05D5\u05E1 1 (Inquiry First): \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1\u05DE\u05D8\u05DC\u05EA \u05D9\u05E6\u05D9\u05E8\u05D4/\u05D7\u05E7\u05E8 (Submission) \u05D5\u05E8\u05E7 \u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF \u05DC\u05D1\u05E6\u05E2 \u05D4\u05D2\u05E0\u05D4 \u05D0\u05D5 \u05D1\u05D3\u05D9\u05E7\u05D4 (FaceToFace). \u05D6\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DC\u05DE\u05D8\u05DC\u05D5\u05EA \u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA \u05D1\u05E2\u05D9\u05D3\u05DF \u05D4-AI.
    - \u05D3\u05E4\u05D5\u05E1 2 (Foundations First): \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1\u05D1\u05D3\u05D9\u05E7\u05EA \u05D9\u05D3\u05E2 \u05D1\u05E1\u05D9\u05E1\u05D9 (FaceToFace) \u05D5\u05E8\u05E7 \u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF \u05DC\u05D0\u05E4\u05E9\u05E8 \u05D9\u05D9\u05E9\u05D5\u05DD \u05D1\u05D1\u05D9\u05EA (Submission).
    
    \u05E2\u05DC\u05D9\u05DA \u05DC\u05D1\u05D7\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E1\u05D3\u05E8 \u05D4\u05E0\u05DB\u05D5\u05DF \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D5\u05EA \u05D4\u05DC\u05DC\u05D5.

    \u05DB\u05DC\u05DC\u05D9\u05DD \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9\u05D9\u05DD \u05DC\u05D4\u05DE\u05DC\u05E6\u05D4:
    1. \u05E7\u05D3\u05DD \u05EA\u05D4\u05DC\u05D9\u05DA \u05DC\u05DE\u05D9\u05D3\u05D4 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9 \u05D4\u05DE\u05E9\u05DC\u05D1 \u05D3\u05E8\u05D9\u05E9\u05D4 \u05DC\u05D4\u05EA\u05D9\u05D9\u05D7\u05E1\u05D5\u05EA \u05DC\u05EA\u05DB\u05E0\u05D9\u05DD \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05D9\u05DD \u05E9\u05E0\u05DC\u05DE\u05D3\u05D5 \u05D1\u05E9\u05D9\u05E2\u05D5\u05E8.
    2. \u05D4\u05EA\u05D7\u05E9\u05D1 \u05D1\u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05D9\u05EA\u05D4 (${numStudents} \u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD) \u05D1\u05D1\u05D7\u05D9\u05E8\u05EA \u05D4\u05E9\u05D9\u05D8\u05D4.
    3. \u05D4\u05E1\u05D1\u05E8 \u05D1\u05D1\u05D4\u05D9\u05E8\u05D5\u05EA \u05DE\u05D3\u05D5\u05E2 \u05D1\u05D7\u05E8\u05EA \u05D1\u05E1\u05D3\u05E8 \u05D4\u05D6\u05D4 (\u05DC\u05DE\u05E9\u05DC: "\u05D4\u05EA\u05D7\u05DC\u05E0\u05D5 \u05D1-Submission \u05DB\u05D3\u05D9 \u05DC\u05D0\u05E4\u05E9\u05E8 \u05E2\u05D5\u05DE\u05E7, \u05D5\u05D0\u05E0\u05D5 \u05DE\u05E1\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1-FaceToFace \u05DB\u05D3\u05D9 \u05DC\u05D0\u05DE\u05EA \u05DE\u05E7\u05D5\u05E8\u05D9\u05D5\u05EA").
    
    \u05E9\u05D9\u05D8\u05D5\u05EA \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA:
    FaceToFace (\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA): \u05DE\u05D1\u05D7\u05DF \u05DB\u05EA\u05D5\u05D1, \u05D1\u05D5\u05D7\u05DF \u05DE\u05DE\u05D5\u05D7\u05E9\u05D1, \u05D1\u05D7\u05D9\u05E0\u05D4 \u05D1\u05E2"\u05E4, \u05E9\u05D0\u05DC\u05D5\u05EA \u05D9\u05D3\u05E2 \u05D1\u05E9\u05D9\u05E2\u05D5\u05E8, \u05D4\u05E6\u05D2\u05EA \u05EA\u05D5\u05E6\u05E8, \u05D4\u05E2\u05E8\u05DB\u05EA \u05D3\u05D9\u05D5\u05DF, \u05DB\u05EA\u05D9\u05D1\u05D4 \u05D1\u05DB\u05D9\u05EA\u05D4, \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DE\u05D3\u05D2\u05DE\u05D9\u05EA.
    Submission (\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05E4\u05EA\u05D5\u05D7\u05D4): \u05DB\u05EA\u05D9\u05D1\u05EA \u05DE\u05E9\u05D9\u05DE\u05D4 \u05E2\u05DD AI, \u05DE\u05E9\u05D5\u05D1 \u05E2\u05DC \u05EA\u05D5\u05E6\u05E8 AI, \u05D4\u05E2\u05E8\u05DB\u05EA \u05E2\u05DE\u05D9\u05EA\u05D9\u05DD, \u05D4\u05E2\u05E8\u05DB\u05D4 \u05E2\u05E6\u05DE\u05D9\u05EA, \u05E1\u05D9\u05DE\u05D5\u05DC\u05E6\u05D9\u05D4 \u05E2\u05DD AI, \u05D9\u05D5\u05DE\u05DF \u05E8\u05E4\u05DC\u05E7\u05E6\u05D9\u05D4, \u05EA\u05D9\u05E2\u05D5\u05D3 \u05E9\u05DC\u05D1\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4.
    
    \u05D4\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5: ${JSON.stringify(skills)}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            skills: { type: Type.ARRAY, items: { type: Type.STRING } },
            method: { type: Type.STRING, description: "\u05D4\u05E9\u05D9\u05D8\u05D4 \u05D4\u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05EA \u05D4\u05DE\u05D5\u05DE\u05DC\u05E6\u05EA \u05DE\u05EA\u05D5\u05DA \u05D4\u05E8\u05E9\u05D9\u05DE\u05D4" },
            type: { type: Type.STRING, enum: ["FaceToFace", "Submission"] },
            explanation: { type: Type.STRING, description: "\u05D4\u05E1\u05D1\u05E8 \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9: \u05E0\u05DE\u05E7 \u05D0\u05EA \u05D1\u05D7\u05D9\u05E8\u05EA \u05D4\u05E9\u05D9\u05D8\u05D4 \u05D5\u05D0\u05EA \u05DE\u05D9\u05E7\u05D5\u05DE\u05D4 \u05D1\u05E8\u05E6\u05E3 \u05D4\u05D4\u05E2\u05E8\u05DB\u05D4." }
          },
          required: ["skills", "method", "type", "explanation"]
        }
      }
    }
  });
  const cleanedText = response.text.replace(/```json/gi, "").replace(/```/g, "").trim();
  let res = JSON.parse(cleanedText);
  if (res && !Array.isArray(res)) {
    res = res.strategies || res.items || res.data || Object.values(res)[0] || [];
  }
  return res.map((item, index) => ({
    ...item,
    id: `group-${index}-${Date.now()}`
  }));
};
var rephraseAssignment = async (originalText, targetSkills, strategies, numStudents) => {
  const labelsMap = {
    FaceToFace: "\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA",
    Submission: "\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E1\u05D1\u05D9\u05D1\u05D4 \u05E4\u05EA\u05D5\u05D7\u05D4"
  };
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: `\u05E0\u05E1\u05D7 \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05D4\u05DE\u05D8\u05DC\u05D4 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9\u05EA \u05DC\u05DE\u05D8\u05DC\u05D4 \u05D0\u05E7\u05D3\u05DE\u05D9\u05EA \u05DE\u05E2\u05D5\u05D3\u05DB\u05E0\u05EA. \u05D4\u05DE\u05D8\u05E8\u05D4 \u05D4\u05D9\u05D0 \u05D9\u05E6\u05D9\u05E8\u05EA "\u05DE\u05E9\u05D9\u05DE\u05EA \u05D4\u05E2\u05E8\u05DB\u05D4" \u05E9\u05DC\u05DE\u05D4 \u05D5\u05DE\u05E4\u05D5\u05E8\u05D8\u05EA.
    
    \u05DB\u05DC\u05DC\u05D9\u05DD \u05DE\u05D1\u05E0\u05D9\u05D9\u05DD \u05D7\u05D5\u05D1\u05D4:
    1. \u05E2\u05D1\u05D5\u05E8 \u05D4\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD (sections): \u05D7\u05DC\u05E7 \u05D0\u05EA \u05D4\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05DC\u05E4\u05E8\u05E7\u05D9\u05DD \u05E0\u05E4\u05E8\u05D3\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8 \u05DB\u05DC \u05D0\u05D7\u05D3 \u05DE\u05DE\u05E8\u05DB\u05D9\u05D1\u05D9 \u05D4\u05DE\u05D8\u05DC\u05D4.
       \u05E2\u05D1\u05D5\u05E8 \u05DB\u05DC \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4 \u05D1\u05E8\u05E9\u05D9\u05DE\u05D4 \u05DC\u05D4\u05DC\u05DF, \u05E6\u05D5\u05E8 \u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8 TaskSection \u05E0\u05E4\u05E8\u05D3 (audience: 'student') \u05E2\u05DD \u05DB\u05D5\u05EA\u05E8\u05EA \u05D1\u05E4\u05D5\u05E8\u05DE\u05D8: "\u05D7\u05DC\u05E7 [\u05DE\u05E1\u05E4\u05E8]: [\u05E9\u05D9\u05D8\u05EA \u05D4\u05D4\u05E2\u05E8\u05DB\u05D4]".
       \u05DB\u05DC \u05D7\u05DC\u05E7 \u05DB\u05D6\u05D4 \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05E1\u05D1\u05D9\u05E8 \u05DC\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8 \u05D1\u05D3\u05D9\u05D5\u05E7 \u05DE\u05D4 \u05E2\u05DC\u05D9\u05D5 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D5\u05D1\u05D0\u05D9\u05DC\u05D5 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D4\u05D5\u05D0 \u05DE\u05E9\u05EA\u05DE\u05E9.
    2. \u05E2\u05D1\u05D5\u05E8 \u05D4\u05DE\u05E8\u05E6\u05D4 (sections): \u05E6\u05D5\u05E8 \u05DC\u05E4\u05D7\u05D5\u05EA 2 \u05E4\u05E8\u05E7\u05D9\u05DD \u05E0\u05E4\u05E8\u05D3\u05D9\u05DD (audience: 'lecturer'):
       \u05D0. "\u05E9\u05D9\u05E7\u05D5\u05DC\u05D9 \u05D3\u05E2\u05EA \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9\u05D9\u05DD" - \u05D4\u05E1\u05D1\u05E8 \u05DE\u05D3\u05D5\u05E2 \u05E0\u05D1\u05D7\u05E8\u05D5 \u05D4\u05E9\u05D9\u05D8\u05D5\u05EA \u05D4\u05DC\u05DC\u05D5.
       \u05D1. "\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05DC\u05D5\u05D2\u05D9\u05E1\u05D8\u05D9\u05D5\u05EA \u05D5\u05D3\u05D2\u05E9\u05D9\u05DD \u05DC\u05D1\u05D3\u05D9\u05E7\u05D4" - \u05DB\u05D9\u05E6\u05D3 \u05DC\u05D1\u05E6\u05E2 \u05D0\u05EA \u05D4\u05D4\u05E2\u05E8\u05DB\u05D4 \u05D1\u05E4\u05D5\u05E2\u05DC \u05E2\u05D1\u05D5\u05E8 ${numStudents} \u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD.
    3. \u05E1\u05D9\u05DB\u05D5\u05DD \u05D4\u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D5\u05EA (practicalTips): \u05D1\u05E1\u05E2\u05D9\u05E3 \u05D6\u05D4 \u05DB\u05EA\u05D5\u05D1 \u05E1\u05D9\u05DB\u05D5\u05DD \u05E7\u05E6\u05E8 \u05D5\u05D1\u05D4\u05D9\u05E8 \u05E9\u05DC \u05D4\u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5, \u05D5\u05DB\u05D9\u05E6\u05D3 \u05D4\u05DF \u05DE\u05E9\u05E8\u05EA\u05D5\u05EA \u05D0\u05EA \u05D4\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5 \u05D1\u05EA\u05D4\u05DC\u05D9\u05DA \u05D4\u05E2\u05D9\u05E6\u05D5\u05D1 (\u05DC\u05DE\u05E9\u05DC: "\u05E0\u05D1\u05D7\u05E8\u05D4 \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4 \u05E9\u05DC \u05D4\u05D2\u05E0\u05D4 \u05D1\u05E2"\u05E4 \u05DB\u05D3\u05D9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05D6\u05DB\u05D9\u05E8\u05D4 \u05E9\u05DC \u05DE\u05D5\u05E9\u05D2\u05D9 \u05D9\u05E1\u05D5\u05D3..."). \u05D4\u05EA\u05DE\u05E7\u05D3 \u05D1\u05D1\u05D7\u05D9\u05E8\u05D5\u05EA \u05D4\u05D7\u05D3\u05E9\u05D5\u05EA \u05E9\u05E0\u05E2\u05E9\u05D5.
    
    \u05D3\u05D2\u05E9 \u05E2\u05DC \u05D0\u05D5\u05EA\u05E0\u05D8\u05D9\u05D5\u05EA \u05D5\u05E4\u05E8\u05E1\u05D5\u05E0\u05DC\u05D9\u05D6\u05E6\u05D9\u05D4:
    \u05D0\u05DD \u05D6\u05D4 \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9 \u05DC\u05DE\u05E9\u05D9\u05DE\u05D4, \u05D4\u05D5\u05E1\u05E3 \u05D1\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05DC\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8 \u05D3\u05E8\u05D9\u05E9\u05D4 \u05DE\u05E4\u05D5\u05E8\u05E9\u05EA \u05DC\u05E7\u05E9\u05E8 \u05D0\u05EA \u05D4\u05EA\u05D5\u05DB\u05DF \u05DC\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D0\u05D9\u05E9\u05D9, \u05D3\u05D5\u05D2\u05DE\u05D0\u05D5\u05EA \u05DE\u05D4\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D4\u05E7\u05E8\u05D5\u05D1\u05D4, \u05D0\u05D5 \u05E0\u05D9\u05EA\u05D5\u05D7 \u05DE\u05E7\u05E8\u05D4 \u05D0\u05E7\u05D8\u05D5\u05D0\u05DC\u05D9/\u05DE\u05E7\u05D5\u05DE\u05D9 - \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E7\u05E9\u05D5\u05EA \u05E2\u05DC \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4 \u05D2\u05E0\u05E8\u05D9\u05EA \u05E2"\u05D9 AI.
    
    \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05E9\u05D9\u05DC\u05D5\u05D1:
    ${strategies.map((s, idx) => `- \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4 ${idx + 1}: \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA [${s.skills.join(", ")}] \u05D1\u05E9\u05D9\u05D8\u05EA "${s.userSelectedMethod}" (\u05E1\u05D5\u05D2: ${labelsMap[s.userSelectedCategory]}).`).join("\n")}
    
    \u05DE\u05D8\u05DC\u05D4 \u05DE\u05E7\u05D5\u05E8\u05D9\u05EA: ${originalText}`,
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
                audience: { type: Type.STRING, enum: ["student", "lecturer"] }
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
  const cleanedText = response.text.replace(/```json/gi, "").replace(/```/g, "").trim();
  return JSON.parse(cleanedText);
};
var askFollowUpQuestion = async (context, question, history) => {
  const chat = ai.chats.create({
    model: "gemini-3.1-flash-lite-preview",
    config: {
      systemInstruction: `\u05D0\u05EA\u05D4 \u05E2\u05D5\u05D6\u05E8 \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9 \u05DE\u05D5\u05DE\u05D7\u05D4. \u05D4\u05EA\u05DE\u05E7\u05D3 \u05D1\u05D7\u05D9\u05D1\u05D5\u05E8 \u05DC\u05EA\u05D5\u05DB\u05DF \u05E9\u05E0\u05DC\u05DE\u05D3 \u05D1\u05E9\u05D9\u05E2\u05D5\u05E8 \u05D5\u05D1\u05E9\u05D9\u05D8\u05D5\u05EA \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DE\u05D2\u05D5\u05D5\u05E0\u05D5\u05EA.`
    }
  });
  const response = await chat.sendMessage({ message: question });
  return response.text;
};
var generateRubric = async (revisedSections) => {
  const studentInstructions = revisedSections.filter((s) => s.audience === "student").map((s) => s.content).join("\n");
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: `\u05E6\u05D5\u05E8 \u05DE\u05D7\u05D5\u05D5\u05DF \u05D4\u05E2\u05E8\u05DB\u05D4 (Rubric) \u05DE\u05DC\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05D4\u05DE\u05D8\u05DC\u05D4 \u05D4\u05D1\u05D0\u05D4.
    \u05D4\u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05E0\u05D9\u05DD \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05DC\u05DB\u05DC\u05D5\u05DC \u05D4\u05D9\u05D1\u05D8\u05D9\u05DD \u05DB\u05DE\u05D5: \u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05EA\u05D5\u05DB\u05DF, \u05D7\u05E9\u05D9\u05D1\u05D4 \u05D1\u05D9\u05E7\u05D5\u05E8\u05EA\u05D9\u05EA, \u05E9\u05D9\u05DE\u05D5\u05E9 \u05DE\u05D5\u05E9\u05DB\u05DC \u05D1-AI (\u05D0\u05DD \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9), \u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05E4\u05E8\u05D6\u05E0\u05D8\u05E6\u05D9\u05D4/\u05DB\u05EA\u05D9\u05D1\u05D4, \u05D5\u05E8\u05E4\u05DC\u05E7\u05E6\u05D9\u05D4.
    \u05E2\u05D1\u05D5\u05E8 \u05DB\u05DC \u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05DF, \u05E0\u05E1\u05D7 \u05D0\u05EA \u05D4\u05EA\u05D9\u05D0\u05D5\u05E8 \u05E2\u05D1\u05D5\u05E8 \u05E9\u05DC\u05D5\u05E9 \u05E8\u05DE\u05D5\u05EA \u05D1\u05D9\u05E6\u05D5\u05E2: \u05DE\u05E6\u05D8\u05D9\u05D9\u05DF, \u05E2\u05D5\u05D1\u05E8 (\u05D8\u05D5\u05D1), \u05D5\u05D8\u05E2\u05D5\u05DF \u05E9\u05D9\u05E4\u05D5\u05E8.

    \u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05D8\u05DC\u05D4:
    ${studentInstructions}
    `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            criterion: { type: Type.STRING, description: "\u05E9\u05DD \u05D4\u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05DF" },
            excellent: { type: Type.STRING, description: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D1\u05D9\u05E6\u05D5\u05E2 \u05DE\u05E6\u05D8\u05D9\u05D9\u05DF" },
            good: { type: Type.STRING, description: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D5\u05D1\u05E8/\u05D8\u05D5\u05D1" },
            needsImprovement: { type: Type.STRING, description: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D8\u05E2\u05D5\u05DF \u05E9\u05D9\u05E4\u05D5\u05E8" }
          },
          required: ["criterion", "excellent", "good", "needsImprovement"]
        }
      }
    }
  });
  const cleanedText = response.text.replace(/```json/gi, "").replace(/```/g, "").trim();
  return JSON.parse(cleanedText);
};

// ../REASSESS_github/re-assess/components/StepFinalResult.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var renderMarkdown = (text) => {
  const cleanText = text.replace(/\*/g, "");
  let html = cleanText.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2 text-indigo-900">$1</h3>').replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3 text-indigo-900">$1</h2>').replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4 text-indigo-900">$1</h1>').replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/gim, "<br />");
  if (html.includes("|")) {
    html = html.replace(/\|/g, "");
    html = html.replace(/-{3,}/g, "");
  }
  return { __html: html };
};
var StepFinalResult = ({
  revisedSections,
  practicalTips,
  updateSectionStatus,
  updateSectionContent,
  toggleSectionEdit,
  chatHistory,
  onFollowUp,
  onReset,
  onBack,
  loading
}) => {
  const [followUpQuestion, setFollowUpQuestion] = useState3("");
  const [copySuccess, setCopySuccess] = useState3(false);
  const [rubric, setRubric] = useState3(null);
  const [rubricLoading, setRubricLoading] = useState3(false);
  const [isRubricEditing, setIsRubricEditing] = useState3(false);
  const [rubricCopySuccess, setRubricCopySuccess] = useState3(false);
  const chatEndRef = useRef(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);
  const allSectionsHandled = revisedSections.length > 0 && revisedSections.every((s) => s.status !== "pending");
  const hasApprovedSections = revisedSections.some((s) => s.status === "approved");
  const copyAllToClipboard = () => {
    const text = revisedSections.filter((s) => s.status === "approved").map((s) => `${s.title}

${s.content.replace(/\*/g, "")}`).join("\n\n---\n\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2e3);
    });
  };
  const copyRubricToClipboard = () => {
    if (!rubric)
      return;
    const headers = "| \u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05DF | \u05DE\u05E6\u05D8\u05D9\u05D9\u05DF | \u05D8\u05D5\u05D1 / \u05E2\u05D5\u05D1\u05E8 | \u05D8\u05E2\u05D5\u05DF \u05E9\u05D9\u05E4\u05D5\u05E8 |";
    const separator = "|---|---|---|---|";
    const rows = rubric.map(
      (row) => `| ${row.criterion} | ${row.excellent} | ${row.good} | ${row.needsImprovement} |`
    ).join("\n");
    const tableString = `${headers}
${separator}
${rows}`;
    navigator.clipboard.writeText(tableString).then(() => {
      setRubricCopySuccess(true);
      setTimeout(() => setRubricCopySuccess(false), 2e3);
    });
  };
  const handleSendFollowUp = () => {
    if (!followUpQuestion.trim())
      return;
    onFollowUp(followUpQuestion);
    setFollowUpQuestion("");
  };
  const handleGenerateRubric = async () => {
    setRubricLoading(true);
    try {
      const res = await generateRubric(revisedSections);
      setRubric(res);
    } catch (e) {
      console.error(e);
      alert("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D9\u05E6\u05D9\u05E8\u05EA \u05D4\u05DE\u05D7\u05D5\u05D5\u05DF");
    } finally {
      setRubricLoading(false);
    }
  };
  const handleRubricChange = (index, field, value) => {
    if (!rubric)
      return;
    const newRubric = [...rubric];
    newRubric[index] = { ...newRubric[index], [field]: value };
    setRubric(newRubric);
  };
  return /* @__PURE__ */ jsxs6("div", { className: "space-y-8 pb-20 animate-fade-in", children: [
    /* @__PURE__ */ jsxs6("div", { className: "bg-white p-10 rounded-2xl shadow-xl border-t-8 border-green-600", children: [
      /* @__PURE__ */ jsxs6(InfoBox, { title: "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D5\u05E2\u05E8\u05D9\u05DB\u05EA \u05EA\u05D5\u05E6\u05E8\u05D9 \u05D4\u05DE\u05D8\u05DC\u05D4", variant: "success", children: [
        "\u05DC\u05E4\u05E0\u05D9\u05DA \u05E0\u05D5\u05E1\u05D7 \u05D4\u05DE\u05D8\u05DC\u05D4 \u05D4\u05DE\u05E2\u05D5\u05D3\u05DB\u05DF. ",
        /* @__PURE__ */ jsx6("strong", { children: "\u05E2\u05D1\u05D5\u05E8 \u05E2\u05DC \u05DB\u05DC \u05D7\u05DC\u05E7" }),
        ": \u05EA\u05D5\u05DB\u05DC \u05DC\u05D0\u05E9\u05E8 \u05D0\u05D5\u05EA\u05D5 \u05DB\u05E4\u05D9 \u05E9\u05D4\u05D5\u05D0, \u05DC\u05E2\u05E8\u05D5\u05DA \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D0\u05D5 \u05DC\u05D4\u05E1\u05D9\u05E8 \u05D7\u05DC\u05E7\u05D9\u05DD \u05E9\u05D0\u05D9\u05E0\u05DD \u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD. \u05D1\u05E1\u05D9\u05D5\u05DD, \u05EA\u05D5\u05DB\u05DC \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D7\u05DC\u05E7\u05D9\u05DD \u05E9\u05D0\u05D5\u05E9\u05E8\u05D5 \u05DC\u05DE\u05E1\u05DE\u05DA \u05D4\u05DE\u05D8\u05DC\u05D4 \u05E9\u05DC\u05DA."
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "flex justify-between items-center mb-8 border-b pb-4", children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-3xl font-bold text-indigo-900", children: "\u05DE\u05E9\u05D9\u05DE\u05EA \u05D4\u05E2\u05E8\u05DB\u05D4" }),
        /* @__PURE__ */ jsx6("div", { className: `px-5 py-2 rounded-full font-bold text-sm border shadow-sm transition-colors ${allSectionsHandled ? "bg-green-100 text-green-800 border-green-200" : "bg-amber-100 text-amber-800 border-amber-200"}`, children: allSectionsHandled ? "\u05DB\u05DC \u05D4\u05D7\u05DC\u05E7\u05D9\u05DD \u05D8\u05D5\u05E4\u05DC\u05D5" : "\u05D9\u05E9 \u05DC\u05D0\u05E9\u05E8 \u05D0\u05D5 \u05DC\u05E2\u05E8\u05D5\u05DA \u05D0\u05EA \u05DB\u05DC \u05D4\u05D7\u05DC\u05E7\u05D9\u05DD" })
      ] }),
      practicalTips && /* @__PURE__ */ jsxs6("div", { className: "bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10 shadow-sm", children: [
        /* @__PURE__ */ jsxs6("h4", { className: "flex items-center gap-2 text-xl font-bold text-blue-900 mb-3", children: [
          /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
          "\u05E1\u05D9\u05DB\u05D5\u05DD \u05D4\u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5"
        ] }),
        /* @__PURE__ */ jsx6("p", { className: "text-blue-900/90 leading-relaxed whitespace-pre-wrap text-lg font-sans-normal", children: practicalTips })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx6("h4", { className: "text-2xl font-bold text-indigo-700 mb-6 border-r-4 border-indigo-600 pr-4", children: "\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05DC\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD" }),
          /* @__PURE__ */ jsx6("div", { className: "space-y-6", children: revisedSections.filter((s) => s.audience === "student").map((section, idx) => {
            const originalIdx = revisedSections.indexOf(section);
            return /* @__PURE__ */ jsxs6("div", { className: `p-6 rounded-2xl border-2 transition-all ${section.status === "approved" ? "border-green-400 bg-green-50/30" : section.status === "removed" ? "border-gray-200 bg-gray-50 opacity-50" : "border-indigo-100 bg-white shadow-sm"}`, children: [
              /* @__PURE__ */ jsxs6("div", { className: "flex justify-between items-center mb-4", children: [
                /* @__PURE__ */ jsx6("h5", { className: "text-xl font-bold text-indigo-900", children: section.title }),
                /* @__PURE__ */ jsxs6("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx6("button", { onClick: () => updateSectionStatus(originalIdx, "approved"), className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${section.status === "approved" ? "bg-green-600 text-white" : "bg-white border text-green-600 hover:bg-green-50"}`, children: "\u05D0\u05E9\u05E8" }),
                  /* @__PURE__ */ jsx6("button", { onClick: () => toggleSectionEdit(originalIdx), className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${section.isEditing ? "bg-indigo-600 text-white shadow-inner" : "bg-white border text-indigo-600 hover:bg-indigo-50"}`, children: section.isEditing ? "\u05E9\u05DE\u05D5\u05E8" : "\u05E2\u05E8\u05D5\u05DA" }),
                  /* @__PURE__ */ jsx6("button", { onClick: () => updateSectionStatus(originalIdx, "removed"), className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${section.status === "removed" ? "bg-red-600 text-white" : "bg-white border text-red-600 hover:bg-red-50"}`, children: "\u05D4\u05E1\u05E8" })
                ] })
              ] }),
              section.isEditing ? /* @__PURE__ */ jsx6("textarea", { className: "w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 editor-textarea h-64 bg-white", value: section.content, onChange: (e) => updateSectionContent(originalIdx, e.target.value) }) : /* @__PURE__ */ jsx6("div", { className: "prose prose-indigo max-w-none text-gray-800 leading-relaxed font-sans-normal whitespace-pre-wrap text-lg", dangerouslySetInnerHTML: renderMarkdown(section.content) })
            ] }, originalIdx);
          }) })
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-gray-300", children: [
          /* @__PURE__ */ jsx6("h4", { className: "text-2xl font-bold text-gray-700 mb-6 border-r-4 border-gray-500 pr-4", children: "\u05E9\u05D9\u05E7\u05D5\u05DC\u05D9 \u05D3\u05E2\u05EA \u05D5\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05DC\u05DE\u05E8\u05E6\u05D4" }),
          /* @__PURE__ */ jsx6("div", { className: "space-y-6", children: revisedSections.filter((s) => s.audience === "lecturer").map((section, idx) => {
            const originalIdx = revisedSections.indexOf(section);
            return /* @__PURE__ */ jsxs6("div", { className: `p-6 rounded-2xl border-2 transition-all ${section.status === "approved" ? "border-green-400 bg-green-50/20" : section.status === "removed" ? "border-gray-200 bg-gray-50 opacity-50" : "border-gray-200 bg-white"}`, children: [
              /* @__PURE__ */ jsxs6("div", { className: "flex justify-between items-center mb-4", children: [
                /* @__PURE__ */ jsx6("h5", { className: "text-xl font-bold text-gray-800", children: section.title }),
                /* @__PURE__ */ jsxs6("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx6("button", { onClick: () => updateSectionStatus(originalIdx, "approved"), className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${section.status === "approved" ? "bg-green-600 text-white" : "bg-white border text-green-600 hover:bg-green-50"}`, children: "\u05D0\u05E9\u05E8" }),
                  /* @__PURE__ */ jsx6("button", { onClick: () => toggleSectionEdit(originalIdx), className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${section.isEditing ? "bg-indigo-600 text-white shadow-inner" : "bg-white border text-indigo-600 hover:bg-indigo-50"}`, children: section.isEditing ? "\u05E9\u05DE\u05D5\u05E8" : "\u05E2\u05E8\u05D5\u05DA" }),
                  /* @__PURE__ */ jsx6("button", { onClick: () => updateSectionStatus(originalIdx, "removed"), className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${section.status === "removed" ? "bg-red-600 text-white" : "bg-white border text-red-600 hover:bg-red-50"}`, children: "\u05D4\u05E1\u05E8" })
                ] })
              ] }),
              section.isEditing ? /* @__PURE__ */ jsx6("textarea", { className: "w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 editor-textarea h-64 bg-white", value: section.content, onChange: (e) => updateSectionContent(originalIdx, e.target.value) }) : /* @__PURE__ */ jsx6("div", { className: "prose prose-indigo max-w-none text-gray-700 leading-relaxed font-sans-normal whitespace-pre-wrap text-lg opacity-90 italic", dangerouslySetInnerHTML: renderMarkdown(section.content) })
            ] }, originalIdx);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "mt-10 border-t pt-8", children: [
        /* @__PURE__ */ jsxs6("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ jsx6("h4", { className: "text-2xl font-bold text-indigo-900", children: "\u05DE\u05D7\u05D5\u05D5\u05DF \u05D4\u05E2\u05E8\u05DB\u05D4 (Rubric)" }),
          !rubric && /* @__PURE__ */ jsx6(
            "button",
            {
              onClick: handleGenerateRubric,
              disabled: rubricLoading,
              className: "bg-indigo-50 text-indigo-700 border border-indigo-200 px-6 py-2 rounded-xl font-bold hover:bg-indigo-100 transition-all shadow-sm",
              children: rubricLoading ? "\u05DE\u05D9\u05D9\u05E6\u05E8 \u05DE\u05D7\u05D5\u05D5\u05DF..." : "\u2728 \u05E6\u05D5\u05E8 \u05DE\u05D7\u05D5\u05D5\u05DF \u05D4\u05E2\u05E8\u05DB\u05D4 \u05DC\u05DE\u05D8\u05DC\u05D4"
            }
          )
        ] }),
        rubric && /* @__PURE__ */ jsxs6("div", { className: "bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-sm animate-fade-in", children: [
          /* @__PURE__ */ jsxs6("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsx6("div", { className: "text-sm text-gray-500 italic", children: '\u05E0\u05D9\u05EA\u05DF \u05DC\u05E2\u05E8\u05D5\u05DA \u05D0\u05EA \u05D4\u05D8\u05D1\u05DC\u05D4 \u05E2"\u05D9 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC "\u05E2\u05E8\u05D5\u05DA"' }),
            /* @__PURE__ */ jsxs6("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx6("button", { onClick: () => setIsRubricEditing(!isRubricEditing), className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${isRubricEditing ? "bg-indigo-600 text-white shadow-inner" : "bg-white border text-indigo-600 hover:bg-indigo-50"}`, children: isRubricEditing ? "\u05E9\u05DE\u05D5\u05E8 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD" : "\u05E2\u05E8\u05D5\u05DA \u05D8\u05D1\u05DC\u05D4" }),
              /* @__PURE__ */ jsx6("button", { onClick: copyRubricToClipboard, className: `px-4 py-1.5 rounded-lg font-bold text-xs transition-all border ${rubricCopySuccess ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"}`, children: rubricCopySuccess ? "\u05D4\u05D5\u05E2\u05EA\u05E7!" : "\u05D4\u05E2\u05EA\u05E7 \u05DE\u05D7\u05D5\u05D5\u05DF" })
            ] })
          ] }),
          /* @__PURE__ */ jsx6("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs6("table", { className: "w-full text-right border-collapse min-w-[800px]", children: [
            /* @__PURE__ */ jsx6("thead", { children: /* @__PURE__ */ jsxs6("tr", { className: "bg-indigo-50 text-indigo-900", children: [
              /* @__PURE__ */ jsx6("th", { className: "p-3 border border-indigo-100 w-1/4", children: "\u05E7\u05E8\u05D9\u05D8\u05E8\u05D9\u05D5\u05DF" }),
              /* @__PURE__ */ jsx6("th", { className: "p-3 border border-indigo-100 w-1/4", children: "\u05DE\u05E6\u05D8\u05D9\u05D9\u05DF" }),
              /* @__PURE__ */ jsx6("th", { className: "p-3 border border-indigo-100 w-1/4", children: "\u05D8\u05D5\u05D1 / \u05E2\u05D5\u05D1\u05E8" }),
              /* @__PURE__ */ jsx6("th", { className: "p-3 border border-indigo-100 w-1/4", children: "\u05D8\u05E2\u05D5\u05DF \u05E9\u05D9\u05E4\u05D5\u05E8" })
            ] }) }),
            /* @__PURE__ */ jsx6("tbody", { children: rubric.map((row, idx) => /* @__PURE__ */ jsxs6("tr", { className: "hover:bg-gray-50", children: [
              /* @__PURE__ */ jsx6("td", { className: "p-3 border border-gray-200 align-top font-bold text-gray-800", children: isRubricEditing ? /* @__PURE__ */ jsx6("textarea", { value: row.criterion, onChange: (e) => handleRubricChange(idx, "criterion", e.target.value), className: "w-full h-full p-2 border rounded bg-white text-sm", rows: 3 }) : row.criterion }),
              /* @__PURE__ */ jsx6("td", { className: "p-3 border border-gray-200 align-top text-gray-700 text-sm", children: isRubricEditing ? /* @__PURE__ */ jsx6("textarea", { value: row.excellent, onChange: (e) => handleRubricChange(idx, "excellent", e.target.value), className: "w-full h-full p-2 border rounded bg-white text-sm", rows: 4 }) : row.excellent }),
              /* @__PURE__ */ jsx6("td", { className: "p-3 border border-gray-200 align-top text-gray-700 text-sm", children: isRubricEditing ? /* @__PURE__ */ jsx6("textarea", { value: row.good, onChange: (e) => handleRubricChange(idx, "good", e.target.value), className: "w-full h-full p-2 border rounded bg-white text-sm", rows: 4 }) : row.good }),
              /* @__PURE__ */ jsx6("td", { className: "p-3 border border-gray-200 align-top text-gray-700 text-sm", children: isRubricEditing ? /* @__PURE__ */ jsx6("textarea", { value: row.needsImprovement, onChange: (e) => handleRubricChange(idx, "needsImprovement", e.target.value), className: "w-full h-full p-2 border rounded bg-white text-sm", rows: 4 }) : row.needsImprovement })
            ] }, idx)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx6("div", { className: "mt-12 pt-8 border-t flex flex-wrap gap-4", children: /* @__PURE__ */ jsx6("button", { onClick: copyAllToClipboard, disabled: !hasApprovedSections, className: `flex-1 py-4 rounded-xl font-bold border-2 transition-all ${copySuccess ? "bg-green-600 text-white border-green-600" : "border-indigo-600 text-indigo-600 hover:bg-indigo-50 shadow-md"}`, children: copySuccess ? "\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05D5\u05E2\u05EA\u05E7!" : "\u05D4\u05E2\u05EA\u05E7 \u05D0\u05EA \u05DB\u05DC \u05D7\u05DC\u05E7\u05D9 \u05D4\u05DE\u05D8\u05DC\u05D4 \u05E9\u05D0\u05D5\u05E9\u05E8\u05D5" }) })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "bg-white p-8 rounded-2xl shadow-md border border-gray-200 hide-on-print", children: [
      /* @__PURE__ */ jsxs6("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2 text-indigo-800", children: [
        /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }) }),
        "\u05D3\u05D9\u05D5\u05E7 \u05D5\u05D4\u05EA\u05D9\u05D9\u05E2\u05E6\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05EA"
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "max-h-80 overflow-y-auto mb-6 space-y-4 p-5 bg-gray-50 rounded-xl border shadow-inner", children: [
        chatHistory.length === 0 && /* @__PURE__ */ jsx6("p", { className: "text-gray-400 text-center italic py-4", children: "\u05E9\u05D0\u05DC \u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05D3\u05D9\u05D5\u05E7 \u05D4\u05DE\u05D8\u05DC\u05D4..." }),
        chatHistory.map((msg, i) => /* @__PURE__ */ jsx6("div", { className: `flex ${msg.role === "user" ? "justify-start" : "justify-end"}`, children: /* @__PURE__ */ jsx6("div", { className: `max-w-[85%] p-4 rounded-2xl shadow-sm ${msg.role === "user" ? "bg-indigo-100 text-indigo-900 border border-indigo-200" : "bg-white text-gray-800 border border-gray-200"}`, children: msg.text }) }, i)),
        /* @__PURE__ */ jsx6("div", { ref: chatEndRef })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx6("input", { type: "text", value: followUpQuestion, onChange: (e) => setFollowUpQuestion(e.target.value), onKeyPress: (e) => e.key === "Enter" && handleSendFollowUp(), placeholder: "\u05E9\u05D0\u05DC \u05E9\u05D0\u05DC\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA...", className: "flex-1 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner" }),
        /* @__PURE__ */ jsx6("button", { onClick: handleSendFollowUp, disabled: loading, className: "bg-indigo-600 text-white px-8 py-2 rounded-xl font-bold hover:bg-indigo-700 transition-all", children: "\u05E9\u05DC\u05D7" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "flex gap-4 hide-on-print", children: [
      /* @__PURE__ */ jsx6("button", { onClick: onBack, className: "px-10 py-4 border-2 rounded-xl font-bold hover:bg-gray-100 transition-all", children: "\u05D7\u05D6\u05D5\u05E8" }),
      /* @__PURE__ */ jsx6("button", { onClick: onReset, className: "flex-1 bg-indigo-900 text-white py-4 rounded-xl font-bold hover:bg-black shadow-lg transition-all", children: "\u05E1\u05D9\u05D9\u05DD \u05D5\u05D7\u05D6\u05D5\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA" })
    ] })
  ] });
};
var StepFinalResult_default = StepFinalResult;

// ../REASSESS_github/re-assess/components/Stepper.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var steps = [
  { id: 1, label: "\u05D4\u05D6\u05E0\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD" },
  { id: 2, label: "\u05E0\u05D9\u05EA\u05D5\u05D7 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA" },
  { id: 3, label: "\u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D5\u05EA" },
  { id: 4, label: "\u05EA\u05D5\u05E6\u05E8 \u05E1\u05D5\u05E4\u05D9" }
];
var Stepper = ({ currentStep, onStepClick, maxReachedStep }) => {
  return /* @__PURE__ */ jsx7("div", { className: "w-full max-w-4xl mx-auto mb-10 px-4", children: /* @__PURE__ */ jsxs7("div", { className: "relative flex items-center justify-between w-full", children: [
    /* @__PURE__ */ jsx7("div", { className: "absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 transform -translate-y-1/2 rounded-full" }),
    /* @__PURE__ */ jsx7(
      "div",
      {
        className: "absolute top-1/2 right-0 h-1 bg-indigo-500 -z-10 transform -translate-y-1/2 rounded-full transition-all duration-500",
        style: { width: `${(currentStep - 1) / (steps.length - 1) * 100}%` }
      }
    ),
    steps.map((step) => {
      const isCompleted = step.id < currentStep;
      const isCurrent = step.id === currentStep;
      const isClickable = step.id <= maxReachedStep;
      return /* @__PURE__ */ jsxs7(
        "button",
        {
          onClick: () => isClickable && onStepClick(step.id),
          disabled: !isClickable,
          className: `flex flex-col items-center group focus:outline-none`,
          children: [
            /* @__PURE__ */ jsx7(
              "div",
              {
                className: `w-10 h-10 rounded-full flex items-center justify-center border-4 font-bold text-sm transition-all duration-300 z-10
                ${isCurrent ? "bg-indigo-600 border-indigo-200 text-white scale-110 shadow-lg" : isCompleted ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border-gray-300 text-gray-400"}
                ${isClickable ? "cursor-pointer hover:border-indigo-400" : "cursor-default"}
                `,
                children: isCompleted ? /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx7("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) : step.id
              }
            ),
            /* @__PURE__ */ jsx7("span", { className: `absolute mt-12 text-xs font-bold whitespace-nowrap transition-colors duration-300 ${isCurrent ? "text-indigo-900" : "text-gray-400"}`, children: step.label })
          ]
        },
        step.id
      );
    })
  ] }) });
};
var Stepper_default = Stepper;

// ../REASSESS_github/re-assess/App.tsx
import mammoth from "mammoth";

// ../REASSESS_github/re-assess/services/supabaseService.ts
import { createClient } from "@supabase/supabase-js";
var SUPABASE_URL = "https://vpuxnkudhaflyygpnxvq.supabase.co";
var SUPABASE_KEY = "sb_publishable_ocgrUJbuEg9pXckWm7IivQ_kaMiO-EG";
var supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
var logUsage = async (actionName, eventData = {}) => {
  try {
    const { error } = await supabase.from("usage_logs").insert([
      {
        action: actionName,
        data: eventData,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]);
    if (error) {
      console.error("Error logging to Supabase:", error);
    }
  } catch (err) {
    console.error("Exception logging to Supabase:", err);
  }
};

// ../REASSESS_github/re-assess/App.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var App = () => {
  const [mode, setMode] = useState4("HOME");
  const [loading, setLoading] = useState4(false);
  const [step, setStep] = useState4(1);
  const [maxReachedStep, setMaxReachedStep] = useState4(1);
  const [assignmentText, setAssignmentText] = useState4("");
  const [uploadedFile, setUploadedFile] = useState4(null);
  const [numStudents, setNumStudents] = useState4(30);
  const [bloomAnalysis, setBloomAnalysis] = useState4(null);
  const [customSkills, setCustomSkills] = useState4([]);
  const [selectedSkills, setSelectedSkills] = useState4([]);
  const [strategies, setStrategies] = useState4([]);
  const [revisedSections, setRevisedSections] = useState4([]);
  const [practicalTips, setPracticalTips] = useState4("");
  const [chatHistory, setChatHistory] = useState4([]);
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file)
      return;
    if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      const reader2 = new FileReader();
      reader2.onload = async (evt) => {
        const arrayBuffer = evt.target?.result;
        try {
          const result = await mammoth.extractRawText({ arrayBuffer });
          const text = result.value;
          setAssignmentText((prev) => {
            const newText = prev ? prev + "\n\n" + text : text;
            return newText;
          });
          setUploadedFile(null);
        } catch (error) {
          console.error("Error reading Word file:", error);
          alert("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E7\u05E8\u05D9\u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 Word. \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D9\u05D3\u05E0\u05D9\u05EA.");
        }
      };
      reader2.readAsArrayBuffer(file);
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      const result = evt.target?.result;
      const base64Data = result.split(",")[1];
      setUploadedFile({
        name: file.name,
        data: base64Data,
        mimeType: file.type
      });
    };
    reader.readAsDataURL(file);
  };
  const startRedesign = async (initialText) => {
    const textToAnalyze = initialText || assignmentText;
    if (!textToAnalyze.trim() && !uploadedFile)
      return;
    if (textToAnalyze === assignmentText && bloomAnalysis && step === 1) {
      setMode("REDESIGN");
      setStep(2);
      setMaxReachedStep(Math.max(maxReachedStep, 2));
      return;
    }
    setAssignmentText(textToAnalyze);
    setMode("REDESIGN");
    setLoading(true);
    try {
      const filePayload = uploadedFile ? { data: uploadedFile.data, mimeType: uploadedFile.mimeType } : void 0;
      const analysis = await analyzeBloomTaxonomy(textToAnalyze, filePayload);
      logUsage("start_redesign", {
        hasFile: !!uploadedFile,
        textLength: textToAnalyze.length,
        numStudents
      });
      setBloomAnalysis(analysis);
      setSelectedSkills(analysis.currentSkills);
      setCustomSkills([]);
      setStep(2);
      setMaxReachedStep(Math.max(maxReachedStep, 2));
    } catch (error) {
      console.error(error);
      alert("\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E0\u05D9\u05EA\u05D5\u05D7 \u05D4\u05DE\u05D8\u05DC\u05D4 (\u05E9\u05DC\u05D1 1). \u05E4\u05E8\u05D8\u05D9 \u05E9\u05D2\u05D9\u05D0\u05D4: " + (error instanceof Error ? error.message : JSON.stringify(error)));
    } finally {
      setLoading(false);
    }
  };
  const handleSkillToggle = (skill) => {
    setSelectedSkills(
      (prev) => prev.some((s) => s.name === skill.name) ? prev.filter((s) => s.name !== skill.name) : [...prev, skill]
    );
  };
  const handleAddCustomSkill = (newSkill) => {
    setCustomSkills((prev) => [...prev, newSkill]);
    setSelectedSkills((prev) => [...prev, newSkill]);
  };
  const handleGetInitialStrategies = async () => {
    if (selectedSkills.length === 0)
      return;
    if (strategies.length > 0 && step === 2) {
      const currentSkillNames = selectedSkills.map((s) => s.name).sort().join(",");
      const strategySkillNames = strategies.flatMap((s) => s.skills).sort().join(",");
      if (currentSkillNames === strategySkillNames) {
        setStep(3);
        setMaxReachedStep(Math.max(maxReachedStep, 3));
        return;
      }
    }
    setLoading(true);
    try {
      const res = await generateAssessmentStrategies(selectedSkills, numStudents);
      logUsage("generate_strategies", {
        numSkillsSelected: selectedSkills.length,
        numStudents
      });
      setStrategies(res.map((s) => ({ ...s, userSelectedCategory: s.type, userSelectedMethod: s.method })));
      setStep(3);
      setMaxReachedStep(Math.max(maxReachedStep, 3));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const updateStrategySelection = (index, category, method) => {
    const newStrategies = [...strategies];
    newStrategies[index] = { ...newStrategies[index], userSelectedCategory: category, userSelectedMethod: method || "" };
    setStrategies(newStrategies);
  };
  const moveSkillToGroup = (skillName, targetGroupId) => {
    const newStrategies = strategies.map((s) => {
      const remainingSkills = s.skills.filter((sk) => sk !== skillName);
      if (s.id === targetGroupId)
        return { ...s, skills: [...s.skills.filter((sk) => sk !== skillName), skillName] };
      return { ...s, skills: remainingSkills };
    }).filter((s) => s.skills.length > 0);
    setStrategies(newStrategies);
  };
  const addNewGroup = (skillName, isDefense = false) => {
    const updatedOldGroups = strategies.map((s) => ({ ...s, skills: s.skills.filter((sk) => sk !== skillName) })).filter((s) => s.skills.length > 0);
    const newGroup = {
      id: `group-${Date.now()}`,
      skills: skillName === "\u05DB\u05DC\u05DC\u05D9" ? ["\u05D4\u05D2\u05E0\u05D4 \u05E2\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 (Defense)"] : [skillName],
      method: isDefense ? '\u05D1\u05D7\u05D9\u05E0\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D1\u05E2"\u05E4' : "",
      type: "FaceToFace",
      explanation: isDefense ? "\u05D0\u05D9\u05DE\u05D5\u05EA \u05DC\u05DE\u05D9\u05D3\u05D4 \u05D5\u05D6\u05D4\u05D5\u05EA \u05D4\u05DE\u05D2\u05D9\u05E9 (Defense) - \u05DE\u05D5\u05DE\u05DC\u05E5 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05DE\u05D8\u05DC\u05D5\u05EA \u05D4\u05DE\u05D5\u05EA\u05E8\u05D5\u05EA \u05DC\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05DD AI." : "\u05E7\u05D1\u05D5\u05E6\u05D4 \u05D7\u05D3\u05E9\u05D4.",
      userSelectedCategory: "FaceToFace",
      userSelectedMethod: isDefense ? '\u05D1\u05D7\u05D9\u05E0\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D1\u05E2"\u05E4' : ""
    };
    setStrategies([...updatedOldGroups, newGroup]);
  };
  const handleFinalRephrase = async () => {
    if (!strategies.every((s) => s.userSelectedMethod))
      return;
    if (revisedSections.length > 0 && step === 3) {
      setStep(4);
      setMaxReachedStep(Math.max(maxReachedStep, 4));
      return;
    }
    setLoading(true);
    try {
      const { sections, practicalTips: practicalTips2 } = await rephraseAssignment(assignmentText, selectedSkills, strategies, numStudents);
      logUsage("finish_rephrase", {
        numSections: sections.length,
        numStrategiesSelected: strategies.filter((s) => s.userSelectedMethod).length
      });
      setRevisedSections(sections.map((s) => ({ ...s, status: "pending", isEditing: false })));
      setPracticalTips(practicalTips2);
      setStep(4);
      setMaxReachedStep(Math.max(maxReachedStep, 4));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleFollowUp = async (question) => {
    setChatHistory((prev) => [...prev, { role: "user", text: question }]);
    setLoading(true);
    try {
      const response = await askFollowUpQuestion({ originalText: assignmentText, revisedTask: revisedSections, strategies }, question, chatHistory);
      setChatHistory((prev) => [...prev, { role: "model", text: response || "" }]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const resetToHome = () => {
    setMode("HOME");
    setStep(1);
    setMaxReachedStep(1);
    setAssignmentText("");
    setUploadedFile(null);
    setBloomAnalysis(null);
    setCustomSkills([]);
    setSelectedSkills([]);
    setStrategies([]);
    setRevisedSections([]);
    setPracticalTips("");
    setChatHistory([]);
  };
  const handleGoBack = () => {
    setStep((prev) => prev > 1 ? prev - 1 : prev);
    if (step === 1)
      setMode("HOME");
  };
  const updateSectionStatus = (index, status) => {
    const newSections = [...revisedSections];
    newSections[index].status = status;
    setRevisedSections(newSections);
  };
  const updateSectionContent = (index, content) => {
    const newSections = [...revisedSections];
    newSections[index].content = content;
    setRevisedSections(newSections);
  };
  const toggleSectionEdit = (index) => {
    const newSections = [...revisedSections];
    newSections[index].isEditing = !newSections[index].isEditing;
    setRevisedSections(newSections);
  };
  const goToStep = (targetStep) => {
    if (targetStep <= maxReachedStep) {
      setStep(targetStep);
    }
  };
  return /* @__PURE__ */ jsxs8(Layout_default, { title: mode === "HOME" ? "Re-Assess" : "\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05D3\u05E9", onBack: mode !== "HOME" ? handleGoBack : void 0, children: [
    /* @__PURE__ */ jsx8("style", { children: `
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .skill-btn { transition: all 0.2s; }
        .skill-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
        .font-sans-normal { font-style: normal !important; font-family: 'Assistant', sans-serif; }
        .editor-textarea {
          font-family: 'Assistant', sans-serif;
          line-height: 1.625;
          font-size: 1.125rem;
          color: #1f2937;
        }
      ` }),
    mode === "HOME" && /* @__PURE__ */ jsxs8("div", { className: "flex flex-col items-center gap-8 py-12", children: [
      /* @__PURE__ */ jsxs8("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx8("h2", { className: "text-4xl font-bold text-gray-800", children: "\u05D0\u05D9\u05DA \u05D4\u05DE\u05D8\u05DC\u05D4 \u05E9\u05DC\u05DA \u05E0\u05E8\u05D0\u05D9\u05EA \u05D1\u05E2\u05D9\u05D3\u05DF \u05D4-AI?" }),
        /* @__PURE__ */ jsx8("p", { className: "text-xl text-gray-600 max-w-2xl", children: "\u05E9\u05D9\u05E4\u05D5\u05E8 \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9\u05D4 \u05D5\u05E2\u05D9\u05D3\u05D5\u05D3 \u05DC\u05DE\u05D9\u05D3\u05D4 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05D3\u05E9 \u05E9\u05DC \u05D3\u05E8\u05DB\u05D9 \u05D4\u05E2\u05E8\u05DB\u05D4." })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "bg-amber-50 p-6 rounded-xl border border-amber-200 max-w-3xl w-full text-amber-900 shadow-sm", children: [
        /* @__PURE__ */ jsxs8("h3", { className: "flex items-center gap-2 font-bold text-lg mb-2", children: [
          /* @__PURE__ */ jsx8("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx8("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
          "\u05D8\u05D9\u05E4 \u05D7\u05E9\u05D5\u05D1 \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD"
        ] }),
        /* @__PURE__ */ jsx8("p", { className: "leading-relaxed", children: "\u05DC\u05E4\u05E0\u05D9 \u05E9\u05EA\u05D9\u05D2\u05E9 \u05DC\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05D3\u05E9, \u05D0\u05E0\u05D5 \u05DE\u05DE\u05DC\u05D9\u05E6\u05D9\u05DD \u05DE\u05D0\u05D5\u05D3 \u05DC\u05E7\u05D7\u05EA \u05D0\u05EA \u05D4\u05DE\u05D8\u05DC\u05D4 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9\u05EA \u05E9\u05DC\u05DA \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05DC\u05E4\u05EA\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D4 \u05D1\u05E2\u05E6\u05DE\u05DA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DB\u05DC\u05D9 AI (\u05DB\u05DE\u05D5 ChatGPT, Claude, \u05D0\u05D5 Gemini). \u05D1\u05D3\u05D9\u05E7\u05D4 \u05D6\u05D5 \u05EA\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05E8\u05D0\u05D5\u05EA \u05D1\u05DE\u05D5 \u05E2\u05D9\u05E0\u05D9\u05DA \u05D1\u05D0\u05D9\u05D6\u05D5 \u05DE\u05D9\u05D3\u05D4 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E7\u05D1\u05DC \u05EA\u05E9\u05D5\u05D1\u05D4 \u05D8\u05D5\u05D1\u05D4 \u05D5\u05D1\u05DB\u05DA \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05DC\u05EA\u05DB\u05E0\u05DF \u05D0\u05DD \u05D5\u05D0\u05DC\u05D5 \u05D7\u05DC\u05E7\u05D9\u05DD \u05D3\u05D5\u05E8\u05E9\u05D9\u05DD \u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D7\u05D3\u05E9, \u05D1\u05E0\u05D5\u05E1\u05E3 \u05DB\u05D3\u05D0\u05D9 \u05DC\u05D7\u05E9\u05D5\u05D1 \u05D0\u05D9\u05D6\u05D4 \u05D9\u05D3\u05E2 \u05D5\u05DE\u05D9\u05D5\u05DE\u05E0\u05D9\u05D5\u05EA \u05E0\u05D3\u05E8\u05E9\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E9\u05E4\u05E8 \u05D0\u05EA \u05EA\u05E9\u05D5\u05D1\u05EA \u05D4\u05D1\u05D9\u05E0\u05D4 \u05D5\u05DC\u05E9\u05E7\u05D5\u05DC \u05DC\u05D4\u05DB\u05E0\u05D9\u05E1 \u05D0\u05D5\u05EA\u05DD \u05DC\u05EA\u05D5\u05DA \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05DC\u05D9\u05DE\u05D5\u05D3\u05D9\u05DD." })
      ] }),
      /* @__PURE__ */ jsx8("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsxs8("button", { onClick: () => {
        setMode("REDESIGN");
        setStep(1);
      }, className: "w-full bg-white border-2 border-green-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-green-400 text-center group transition-all", children: [
        /* @__PURE__ */ jsx8("div", { className: "bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-green-600 group-hover:text-white transition-colors", children: /* @__PURE__ */ jsx8("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx8("path", { d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }) }),
        /* @__PURE__ */ jsx8("h3", { className: "text-2xl font-bold text-gray-800 mb-2", children: "\u05D4\u05EA\u05D7\u05DC \u05E2\u05D9\u05E6\u05D5\u05D1 \u05DC\u05DE\u05D9\u05D3\u05D4 \u05DE\u05D7\u05D3\u05E9" }),
        /* @__PURE__ */ jsx8("p", { className: "text-gray-600", children: "\u05E0\u05EA\u05D7 \u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D5\u05E9\u05D3\u05E8\u05D2 \u05D0\u05EA \u05D4\u05DE\u05E2\u05E8\u05DA \u05D4\u05E4\u05D3\u05D2\u05D5\u05D2\u05D9 \u05DC\u05DC\u05D9\u05D5\u05D5\u05D9 \u05DE\u05D9\u05D8\u05D1\u05D9 \u05E9\u05DC \u05D4\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8\u05D9\u05DD." })
      ] }) })
    ] }),
    mode === "REDESIGN" && /* @__PURE__ */ jsxs8("div", { className: "space-y-6 animate-fade-in", children: [
      /* @__PURE__ */ jsx8(Stepper_default, { currentStep: step, onStepClick: goToStep, maxReachedStep }),
      step === 1 && /* @__PURE__ */ jsx8(
        StepInput_default,
        {
          assignmentText,
          setAssignmentText,
          uploadedFile,
          onFileUpload: handleFileUpload,
          numStudents,
          setNumStudents,
          onNext: () => startRedesign(),
          loading
        }
      ),
      step === 2 && bloomAnalysis && /* @__PURE__ */ jsx8(
        StepSkillsAnalysis_default,
        {
          bloomAnalysis,
          selectedSkills,
          handleSkillToggle,
          customSkills,
          onAddCustomSkill: handleAddCustomSkill,
          onNext: handleGetInitialStrategies,
          onBack: handleGoBack,
          loading
        }
      ),
      step === 3 && strategies.length > 0 && /* @__PURE__ */ jsx8(
        StepStrategyBuilder_default,
        {
          strategies,
          numStudents,
          updateStrategySelection,
          moveSkillToGroup,
          addNewGroup,
          onNext: handleFinalRephrase,
          onBack: handleGoBack,
          loading
        }
      ),
      step === 4 && /* @__PURE__ */ jsx8(
        StepFinalResult_default,
        {
          revisedSections,
          practicalTips,
          updateSectionStatus,
          updateSectionContent,
          toggleSectionEdit,
          chatHistory,
          onFollowUp: handleFollowUp,
          onReset: resetToHome,
          onBack: handleGoBack,
          loading
        }
      )
    ] }),
    loading && /* @__PURE__ */ jsx8("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50", children: /* @__PURE__ */ jsxs8("div", { className: "bg-white p-12 rounded-3xl shadow-2xl flex flex-col items-center gap-8 border-2 border-indigo-100 animate-pulse", children: [
      /* @__PURE__ */ jsx8("div", { className: "w-20 h-20 border-8 border-indigo-600 border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ jsx8("div", { className: "text-center", children: /* @__PURE__ */ jsx8("p", { className: "font-bold text-2xl text-indigo-900 mb-2", children: "\u05DE\u05E2\u05D1\u05D3 \u05E4\u05D3\u05D2\u05D5\u05D2\u05D9\u05D4..." }) })
    ] }) })
  ] });
};
var App_default = App;

// ../REASSESS_github/re-assess/index.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
var root = ReactDOM.createRoot(rootElement);
root.render(
  /* @__PURE__ */ jsx9(React5.StrictMode, { children: /* @__PURE__ */ jsx9(App_default, {}) })
);
