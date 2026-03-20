import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  RotateCw, 
  Info, 
  FunctionSquare, 
  ChevronRight, 
  Zap,
  Layers,
  Box
} from 'lucide-react';
import { SolidVisualizer } from './components/SolidVisualizer';
import { ExerciseGuide } from './components/ExerciseGuide';
import { MathText } from './components/MathText';

const MathBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-6 my-6 shadow-sm flex justify-center items-center overflow-x-auto">
    {children}
  </div>
);

export default function App() {
  const [rotationX, setRotationX] = useState(Math.PI * 2);
  const [rotationY, setRotationY] = useState(Math.PI * 2);
  const [view, setView] = useState<'theory' | 'exercises'>('theory');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <AnimatePresence mode="wait">
        {view === 'theory' ? (
          <motion.div
            key="theory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Matemática V - Escuela Philips
                  </span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight"
                >
                  Sólidos de <span className="text-blue-600 italic">Revolución</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-slate-600 max-w-2xl leading-relaxed"
                >
                  Descubre cómo una simple curva en el plano puede transformarse en un objeto tridimensional mediante el poder de la rotación y el cálculo integral.
                </motion.p>
              </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 -mt-8 pb-24">
              {/* Intuitive Intro */}
              <section className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                    <Zap size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Idea Intuitiva</h2>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Imagina que tienes una figura plana, como un semicírculo o un rectángulo, recortada en cartulina. Ahora, pégala a un palito de brochette y hazlo girar rápidamente entre tus manos. 
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Box size={18} className="text-blue-500" /> El Proceso
                    </h4>
                    <p className="text-sm text-slate-500">
                      Al girar la curva, esta "barre" una región del espacio. El rastro que deja esa curva al completar una vuelta completa es lo que llamamos un <strong>Sólido de Revolución</strong>.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <Layers size={18} className="text-blue-500" /> Aplicaciones
                    </h4>
                    <p className="text-sm text-slate-500">
                      Desde el diseño de piezas mecánicas en un torno hasta la fabricación de botellas, copas y neumáticos. Todo lo que tenga simetría axial es, en esencia, un sólido de revolución.
                    </p>
                  </div>
                </div>
              </section>

              {/* Mathematical Theory */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <BookOpen size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Teoría Matemática</h2>
                </div>

                <div className="space-y-8">
                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">El Método de los Discos</h3>
                    <p className="text-slate-600">
                      Si rotamos una función <MathText text="y = f(x)" /> alrededor del eje X entre los límites <MathText text="a" /> y <MathText text="b" />, podemos imaginar que el sólido está compuesto por infinitos discos delgados de espesor <MathText text="dx" />.
                    </p>
                    <p className="text-slate-600">
                      El radio de cada disco es el valor de la función <MathText text="f(x)" />. El área de la sección transversal es <MathText text="A(x) = \pi \cdot [f(x)]^2" />.
                    </p>
                    
                    <MathBlock>
                      <MathText text="V = \pi \int_{a}^{b} [f(x)]^2 dx" display />
                    </MathBlock>

                    <h3 className="text-xl font-bold text-slate-800 mt-12 mb-4">Rotación sobre el eje Y</h3>
                    <p className="text-slate-600">
                      Cuando la rotación es alrededor del eje Y, la lógica es similar, pero debemos expresar la función en términos de <MathText text="y" />, es decir, <MathText text="x = g(y)" />.
                    </p>
                    
                    <MathBlock>
                      <MathText text="V = \pi \int_{c}^{d} [g(y)]^2 dy" display />
                    </MathBlock>
                  </div>
                </div>
              </section>

              {/* Interactive Visualizers */}
              <section className="space-y-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                    <RotateCw size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Visualización Interactiva</h2>
                </div>

                {/* X Axis Rotation */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">1. Rotación en el Eje X</h3>
                      <p className="text-sm text-slate-500">Función: f(x) = √x | Intervalo: [0, 4]</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <span className="text-xs font-mono text-slate-400 uppercase">Ángulo</span>
                      <input 
                        type="range" 
                        min="0.1" 
                        max={Math.PI * 2} 
                        step="0.1" 
                        value={rotationX}
                        onChange={(e) => setRotationX(parseFloat(e.target.value))}
                        className="w-full md:w-48 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>
                  </div>
                  <SolidVisualizer 
                    title="Rotación alrededor de X"
                    fn={(x) => Math.sqrt(x)} 
                    range={[0, 4]} 
                    axis="x" 
                    rotationAngle={rotationX}
                  />
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 flex gap-3">
                    <Info className="text-blue-500 shrink-0" size={20} />
                    <p className="text-sm text-blue-700">
                      Observa cómo la curva <MathText text="y = \sqrt{x}" /> genera un paraboloide. Al rotar sobre X, el radio de giro en cada punto es el valor de la función.
                    </p>
                  </div>
                </div>

                {/* Y Axis Rotation */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">2. Rotación en el Eje Y</h3>
                      <p className="text-sm text-slate-500">Función: x = y² | Intervalo: [0, 2]</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <span className="text-xs font-mono text-slate-400 uppercase">Ángulo</span>
                      <input 
                        type="range" 
                        min="0.1" 
                        max={Math.PI * 2} 
                        step="0.1" 
                        value={rotationY}
                        onChange={(e) => setRotationY(parseFloat(e.target.value))}
                        className="w-full md:w-48 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                  </div>
                  <SolidVisualizer 
                    title="Rotación alrededor de Y"
                    fn={(y) => y * y} 
                    range={[0, 2]} 
                    axis="y" 
                    rotationAngle={rotationY}
                  />
                  <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex gap-3">
                    <Info className="text-emerald-500 shrink-0" size={20} />
                    <p className="text-sm text-emerald-700">
                      Aquí rotamos sobre el eje vertical. La distancia desde el eje Y hasta la curva es el radio <MathText text="x = g(y)" />.
                    </p>
                  </div>
                </div>
              </section>

              {/* Summary / Conclusion */}
              <section className="mt-20 text-center">
                <div className="inline-block p-4 bg-slate-100 rounded-full mb-6">
                  <FunctionSquare size={32} className="text-slate-400" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">¿Listos para los ejercicios?</h2>
                <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                  Ahora que visualizamos cómo se forman estos cuerpos, pasemos a calcular sus volúmenes exactos usando integrales definidas.
                </p>
                <button 
                  onClick={() => setView('exercises')}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 mx-auto"
                >
                  Ver Guía de Ejercicios <ChevronRight size={20} />
                </button>
              </section>
            </main>
          </motion.div>
        ) : (
          <ExerciseGuide key="exercises" onBack={() => setView('theory')} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 text-center text-slate-400 text-sm">
        <p>© 2026 Escuela Philips - Departamento de Matemática</p>
        <p className="mt-2">Profesor Ariel Cardozo - Desarrollado para 5to Año</p>
      </footer>
    </div>
  );
}
