export default function Home(){

    return(
        <>
        <div className="min-h-screen bg-[#0f172a] text-slate-200 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Декоративни светлинни ефекти в бекграунда */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]" />

      <main className="max-w-4xl w-full relative z-10">
        
        {/* Бадж за статус */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full animate-pulse">
            
          </span>
        </div>

        {/* Основно заглавие */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
            Пътят към първата ми <br/>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              React роля
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Здравейте! Аз съм младши разработчик и това е моето портфолио от практически задачи. 
            Всяка секция тук е стъпка към усъвършенстването на уменията ми в 
            <span className="text-blue-400 font-medium"> React hooks</span>, 
            <span className="text-emerald-400 font-medium"> състояние</span> и 
            <span className="text-indigo-400 font-medium"> Tailwind архитектура</span>.
          </p>
        </div>

        {/* Секция с фокус точки за интервю */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Логика</h3>
            <p className="text-slate-500 text-sm">Фокус върху чист код и правилно управление на масиви и обекти.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2">Дизайн</h3>
            <p className="text-slate-500 text-sm">Използване на Utility-first CSS за бързо и модерно стилизиране.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
            <h3 className="text-xl font-bold text-white mb-2">React State</h3>
            <p className="text-slate-500 text-sm">Дълбоко разбиране на useState, props и жизнения цикъл на компонентите.</p>
          </div>
        </div>

        {/* Футър съобщение */}
        <footer className="text-center border-t border-white/5 pt-10">
          <p className="text-slate-500 italic mb-4">
            "Кодът е само инструмент, решаването на проблеми е изкуството."
          </p>
          <div className="flex justify-center gap-6 text-slate-400 font-semibold uppercase text-[10px] tracking-[0.2em]">
            <span>Todo App</span>
            <span className="text-slate-700">•</span>
            <span>Name Filter</span>
            <span className="text-slate-700">•</span>
            <span>Tabs Component</span>
          </div>
        </footer>

      </main>
    </div>
        </>
    )
}