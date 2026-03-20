import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, Calculator, Ruler, Download, FileText, X } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  function: string;
  interval: string;
  axis: 'X' | 'Y';
  hint: string;
  solution: string[];
  result: string;
}

import { MathText } from './MathText';

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Paraboloide Simple",
    function: "f(x) = x^2",
    interval: "[0, 2]",
    axis: 'X',
    hint: "Recuerda que el volumen es $\\pi \\int [f(x)]^2 dx$. Aquí $f(x)^2$ será $x^4$.",
    solution: [
      "Planteamos la integral: $V = \\pi \\int_{0}^{2} (x^2)^2 dx$",
      "Simplificamos el integrando: $V = \\pi \\int_{0}^{2} x^4 dx$",
      "Calculamos la primitiva: $V = \\pi \\left[ \\frac{x^5}{5} \\right]_{0}^{2}$",
      "Evaluamos en los límites: $V = \\pi \\left( \\frac{2^5}{5} - \\frac{0^5}{5} \\right)$"
    ],
    result: "V = \\frac{32\\pi}{5} \\approx 20.11 u^3"
  },
  {
    id: 2,
    title: "Sólido de Raíz",
    function: "f(x) = \\sqrt{x}",
    interval: "[0, 4]",
    axis: 'X',
    hint: "Al elevar $\\sqrt{x}$ al cuadrado, la integral se simplifica notablemente.",
    solution: [
      "Planteamos la integral: $V = \\pi \\int_{0}^{4} (\\sqrt{x})^2 dx$",
      "Simplificamos: $V = \\pi \\int_{0}^{4} x dx$",
      "Calculamos la primitiva: $V = \\pi \\left[ \\frac{x^2}{2} \\right]_{0}^{4}$",
      "Evaluamos: $V = \\pi \\left( \\frac{4^2}{2} - \\frac{0^2}{2} \\right) = \\pi \\left( \\frac{16}{2} \\right)$"
    ],
    result: "V = 8\\pi \\approx 25.13 u^3"
  },
  {
    id: 3,
    title: "Cono Truncado",
    function: "f(x) = 2x + 1",
    interval: "[1, 3]",
    axis: 'X',
    hint: "Este sólido es un cono truncado. ¡Verifica el resultado usando la fórmula geométrica del cono!",
    solution: [
      "Planteamos: $V = \\pi \\int_{1}^{3} (2x + 1)^2 dx$",
      "Desarrollamos el binomio: $V = \\pi \\int_{1}^{3} (4x^2 + 4x + 1) dx$",
      "Primitiva: $V = \\pi \\left[ \\frac{4x^3}{3} + 2x^2 + x \\right]_{1}^{3}$",
      "Evaluamos en 3: $\\pi \\left( \\frac{4(27)}{3} + 2(9) + 3 \\right) = \\pi (36 + 18 + 3) = 57\\pi$",
      "Evaluamos en 1: $\\pi \\left( \\frac{4}{3} + 2 + 1 \\right) = \\pi \\left( \\frac{4}{3} + 3 \\right) = \\frac{13\\pi}{3}$",
      "Restamos: $57\\pi - \\frac{13\\pi}{3} = \\frac{171\\pi - 13\\pi}{3}$"
    ],
    result: "V = \\frac{158\\pi}{3} \\approx 165.46 u^3"
  },
  {
    id: 4,
    title: "Cono Recto",
    function: "g(y) = y",
    interval: "[0, 3]",
    axis: 'Y',
    hint: "Al rotar la recta $x = y$ sobre el eje Y, obtienes un cono de radio 3 y altura 3.",
    solution: [
      "Planteamos la integral in Y: $V = \\pi \\int_{0}^{3} (y)^2 dy$",
      "Calculamos la primitiva: $V = \\pi \\left[ \\frac{y^3}{3} \\right]_{0}^{3}$",
      "Evaluamos: $V = \\pi \\left( \\frac{3^3}{3} - \\frac{0^3}{3} \\right) = \\pi \\left( \\frac{27}{3} \\right)$"
    ],
    result: "V = 9\\pi \\approx 28.27 u^3"
  },
  {
    id: 5,
    title: "Rotación de Raíz en Y",
    function: "g(y) = \\sqrt{y}",
    interval: "[0, 4]",
    axis: 'Y',
    hint: "La integral será sobre la variable 'y'. El radio en cada altura es $\\sqrt{y}$.",
    solution: [
      "Planteamos: $V = \\pi \\int_{0}^{4} (\\sqrt{y})^2 dy$",
      "Simplificamos: $V = \\pi \\int_{0}^{4} y dy$",
      "Calculamos la primitiva: $V = \\pi \\left[ \\frac{y^2}{2} \\right]_{0}^{4}$",
      "Evaluamos: $V = \\pi \\left( \\frac{4^2}{2} - \\frac{0^2}{2} \\right)$"
    ],
    result: "V = 8\\pi \\approx 25.13 u^3"
  },
  {
    id: 6,
    title: "Copa Parabólica",
    function: "g(y) = y^2",
    interval: "[0, 1]",
    axis: 'Y',
    hint: "Cuidado al elevar al cuadrado: $(y^2)^2 = y^4$. Evalúa cuidadosamente los límites 0 y 1.",
    solution: [
      "Planteamos: $V = \\pi \\int_{0}^{1} (y^2)^2 dy$",
      "Simplificamos: $V = \\pi \\int_{0}^{1} y^4 dy$",
      "Calculamos la primitiva: $V = \\pi \\left[ \\frac{y^5}{5} \\right]_{0}^{1}$",
      "Evaluamos: $V = \\pi \\left( \\frac{1^5}{5} - \\frac{0^5}{5} \\right)$"
    ],
    result: "V = \\frac{\\pi}{5} \\approx 0.63 u^3"
  }
];

export const ExerciseGuide: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedEx, setSelectedEx] = React.useState<Exercise | null>(null);
  const [showTable, setShowTable] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group no-print"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Volver a la Teoría
      </button>

      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Guía de Ejercicios</h2>
        <p className="text-slate-600 text-lg">
          Aplica el método de los discos para calcular el volumen de los siguientes sólidos de revolución.
        </p>
      </div>

      <div className="grid gap-6">
        {exercises.map((ex) => (
          <div 
            key={ex.id} 
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${ex.axis === 'X' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
              <span className="font-bold text-lg">{ex.axis}</span>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-slate-800">{ex.id}. {ex.title}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wider">
                  Eje {ex.axis}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-slate-600 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calculator size={16} className="text-slate-400" />
                  <MathText text={ex.function} display />
                </span>
                <span className="flex items-center gap-1.5">
                  <Ruler size={16} className="text-slate-400" />
                  Intervalo: <MathText text={ex.interval} />
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex gap-2 italic text-sm text-slate-500">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <MathText text={ex.hint} />
              </div>
            </div>

            <div className="w-full md:w-auto no-print">
              <button 
                onClick={() => setSelectedEx(ex)}
                className="w-full md:w-auto px-6 py-2 border-2 border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-colors"
              >
                Ver Solución
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-blue-900 text-white rounded-3xl relative overflow-hidden no-print">
        <div className="relative z-10">
          <h4 className="text-2xl font-bold mb-2">¿Necesitas ayuda?</h4>
          <p className="text-blue-200 mb-6">
            Si tienes dudas con las integrales, recuerda revisar la tabla de integrales inmediatas o consulta con tu profesor.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setShowTable(true)}
              className="bg-white text-blue-900 px-6 py-2 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <FileText size={18} />
              Ver Tabla de Integrales
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Integrals Table Modal */}
      <AnimatePresence>
        {showTable && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-2">
                  <FileText className="text-blue-600" size={20} />
                  <h3 className="text-xl font-bold text-slate-800">Tabla de Integrales Inmediatas</h3>
                </div>
                <button 
                  onClick={() => setShowTable(false)}
                  className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <div className="grid gap-4">
                  {[
                    { f: "\\int k \\, dx", r: "kx + C" },
                    { f: "\\int x^n \\, dx", r: "\\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)" },
                    { f: "\\int \\frac{1}{x} \\, dx", r: "\\ln|x| + C" },
                    { f: "\\int e^x \\, dx", r: "e^x + C" },
                    { f: "\\int \\sin(x) \\, dx", r: "-\\cos(x) + C" },
                    { f: "\\int \\cos(x) \\, dx", r: "\\sin(x) + C" },
                    { f: "\\int \\sec^2(x) \\, dx", r: "\\tan(x) + C" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-lg font-mono text-slate-700">
                        <MathText text={item.f} display />
                      </div>
                      <div className="text-slate-400">=</div>
                      <div className="text-lg font-mono text-blue-600 font-bold">
                        <MathText text={item.r} display />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 text-sm italic">
                  Nota: Estas son las formas básicas necesarias para resolver los ejercicios de sólidos de revolución propuestos.
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                <button 
                  onClick={() => setShowTable(false)}
                  className="bg-slate-900 text-white px-8 py-2 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Cerrar Tabla
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Solution Modal */}
      <AnimatePresence>
        {selectedEx && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-800">Resolución Paso a Paso</h3>
                <button 
                  onClick={() => setSelectedEx(null)}
                  className="text-slate-400 hover:text-slate-600 p-2"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <p className="text-sm text-slate-400 uppercase font-bold tracking-widest mb-1">Ejercicio {selectedEx.id}</p>
                  <h4 className="text-2xl font-display font-bold text-blue-600">{selectedEx.title}</h4>
                </div>
                
                <div className="space-y-4 mb-8">
                  {selectedEx.solution.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 text-xs font-bold flex items-center justify-center shrink-0 mt-1">
                        {i + 1}
                      </div>
                      <div className="text-slate-600">
                        <MathText text={step} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-2xl text-center">
                  <p className="text-slate-400 text-xs uppercase font-bold mb-2">Resultado Final</p>
                  <div className="text-2xl font-mono font-bold">
                    <MathText text={selectedEx.result} display />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                <button 
                  onClick={() => setSelectedEx(null)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Entendido, cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
