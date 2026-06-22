import { useVoice } from '../../hooks/useVoice';
const VoiceAssistant = () => {
  const { isListening, transcript, error, startListening, stopListening } = useVoice();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {isListening && (<div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-md animate-bounce border border-slate-800">Listening... Try <span className="text-sky-400 font-bold">"Go to Projects"</span></div>)}
      {transcript && !isListening && (<div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[11px] font-medium px-3 py-1 rounded-md shadow-sm max-w-xs">Heard: "{transcript}"</div>)}
      {error && error !== 'no-speech' && (<div className="bg-rose-50 text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-md border border-rose-100">{error === 'not-allowed' ? 'Mic access denied' : 'Audio error'}</div>)}
      <button onClick={isListening ? stopListening : startListening} className={`p-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 border ${isListening ? 'bg-rose-500 text-white border-rose-600 ring-4 ring-rose-100 animate-pulse' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-200 hover:text-sky-500'}`} title="Voice navigation">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm0 10a5 5 0 0010 0h-2a3 3 0 01-6 0H7z" clipRule="evenodd" /><path fillRule="evenodd" d="M6 16a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
      </button>
    </div>
  );
};
export default VoiceAssistant;
