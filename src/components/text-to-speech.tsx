import React, { useEffect, useState } from 'react'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { PokemonDetails, PokemonDetailsAPI } from '../lib/types/PokemonAPI';

type TextToSpeechProps = {
    pokemon: PokemonDetails
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({pokemon}) => {

    const text = `${pokemon.name}, a ${pokemon.type} Pokemon. ${pokemon.description}`
  
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | undefined>();
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  
    useEffect(() => {
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(text);
      const voices = synth.getVoices();
        
      setUtterance(u);
      setVoice(voices[6]);
  
      return () => {
        synth.cancel();
      };
    }, [text]);
  
    const handlePlay = () => {
      const synth = window.speechSynthesis;
  
      if (isPaused) {
        synth.resume();
      } else {
        utterance!.voice = voice;
        utterance!.pitch = 1.2;
        utterance!.rate = 1.1;
        synth.speak(utterance!);
      }
  
      setIsPaused(false);
    };      
    
    
      return (
        <div>
          <button onClick={handlePlay}><RecordVoiceOverIcon className='text-gray-800' fontSize='large' /></button>
          {/* <button onClick={handlePause}>Pause</button>
          <button onClick={handleStop}>Stop</button> */}
        </div>
      ); 
}

export default TextToSpeech