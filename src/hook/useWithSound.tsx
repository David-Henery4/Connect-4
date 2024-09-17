import { useEffect, useRef } from "react";

const useWithSound = (audioSrc: string) => {
  const soundRef = useRef<HTMLAudioElement | null>(null);
  //
  const handlePlaySound = () => {
    soundRef.current?.play()
  }
  //
  const handlePauseSound = () => {
    soundRef.current?.pause();
  }
  //
  useEffect(() => {
    soundRef.current = new Audio(audioSrc);
  }, []);
  //
  return {
    handlePauseSound,
    handlePlaySound
  };
};

export default useWithSound;
