import Rhythm from "../components/MeditationComponents/Rhythm";
import RhythmModal from "../components/MeditationComponents/RhythmModal";
import  { useEffect, useState } from "react";

function Meditation() {

  const [rhythmTime, setRhythmTime] = useState(null);
  const [usingRhythm, setUsingRhythm] = useState(false);
  const [selectedRhythm, setSelectedRhytm] = useState(null);

  const [rhythms, setRhythms] = useState(() => {
      try {
        const savedRhythms = localStorage.getItem("myMeditation");

        return savedRhythms
          ? JSON.parse(savedRhythms) 
          : [
            {
              id: crypto.randomUUID(),
              rhythmTitle: "Respiración Coherente",
              inhale: 5,
              holdIn: 0,
              exhale: 5,
              holdOut:0
            },
            {
              id: crypto.randomUUID(),
              rhythmTitle: "Respiración Cuadrada",
              inhale: 4,
              holdIn: 4,
              exhale: 4,
              holdOut:4
            },
            {
              id: crypto.randomUUID(),
              rhythmTitle: "Respiración para Dormir",
              inhale: 4,
              holdIn: 7,
              exhale: 8,
              holdOut:0
            },
            {
              id: crypto.randomUUID(),
              rhythmTitle: "Respiración de Anclaje",
              inhale: 4,
              holdIn: 2,
              exhale: 6,
              holdOut:2
            }
          ];
      } catch {
        return [];
      }
    });

    useEffect(()=> {
      localStorage.setItem("myMeditation", JSON.stringify(rhythms));
    }, [rhythms]);

  return (
    <>
  <h1>Meditation</h1>
  {usingRhythm && (
    <RhythmModal 

    rhythm={selectedRhythm}
    rhythmTime={rhythmTime}
    setRhythmTime={setRhythmTime}
    setUsingRhythm={setUsingRhythm}

    />
  )}
  <div>
    <div>
      {rhythms.map((rhythm) => (
        <Rhythm
        key={rhythm.id}
        rhythm={rhythm}
        setSelectedRhythm={setSelectedRhytm}
        setUsingRhythm={setUsingRhythm}
        />
      ))}
    </div>
  </div>
    </>
  )
}

export default Meditation