"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const scenes = [
  {
    title: "Scene 1: The Wiggle of Great Importance",
    text: "Tryll gasps. A wiggle! A real one! Li Bäh blinks: 'Trude Kühl, it's protozoan drift.' Tryll: 'No, it's a philosopher in soup.'",
    audio: "/audio/scene1.mp3"
  },
  {
    title: "Scene 2: The March of Misunderstanding",
    text: "Tryll follows the wiggle. 'It's going somewhere important!' Li Bäh: 'It's heading toward a rock.' Tryll: 'Maybe the rock is wise.'",
    audio: "/audio/scene2.mp3"
  },
  {
    title: "Scene 3: The Great Divide",
    text: "The wiggle splits. Tryll: 'It divided into emotional states!' Li Bäh: 'That is mitosis.' Tryll collects the moment in a jar.",
    audio: "/audio/scene3.mp3"
  },
  {
    title: "Scene 4: Wiggle Grows Legs",
    text: "Tryll: 'He stepped out of water! That is an opera.' Li Bäh: 'Amphibian transition. Predictable.' Tryll spins. 'It means forward.'",
    audio: "/audio/scene4.mp3"
  },
  {
    title: "Scene 5: Shell of Memory",
    text: "Man grows a shell. Tryll: 'He wears fossils like feelings!' Li Bäh: 'Exoskeleton. Decorative calcium.' Tryll collects a memory spiral.",
    audio: "/audio/scene5.mp3"
  },
  {
    title: "Scene 20: Wiggle. Again.",
    text: "Tryll: 'It's back.' Li Bäh: 'Yes.' Tryll doesn't follow this time. She smiles. The wiggle begins again.",
    audio: "/audio/scene20.mp3"
  }
];

export default function TryllWebApp() {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const audio = new Audio(scenes[sceneIndex].audio);
    audio.play();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [sceneIndex]);

  const nextScene = () => {
    setSceneIndex((prev) => (prev + 1) % scenes.length);
  };

  const goToScene = (index) => {
    setSceneIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-rose-700 mb-2">
          TRYLL & The Wiggle of Great Importance
        </h1>
        <nav className="flex flex-wrap justify-center gap-2">
          {scenes.map((scene, idx) => (
            <Button
              key={idx}
              onClick={() => goToScene(idx)}
              className={`text-sm px-3 py-1 rounded-full ${
                sceneIndex === idx
                  ? 'bg-rose-500 text-white'
                  : 'bg-white text-rose-700 border border-rose-300'
              }`}
            >
              {idx + 1}
            </Button>
          ))}
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image src="/img/tryll.png" alt="Tryll" width={64} height={64} className="rounded-full shadow-md" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image src="/img/libaeh.png" alt="Li Bäh" width={64} height={64} className="rounded-full shadow-md" />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={sceneIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl"
          >
            <Card className="w-full mb-4 shadow-xl">
              <CardContent>
                <h2 className="text-xl font-bold mb-2">{scenes[sceneIndex].title}</h2>
                <p className="text-md leading-relaxed text-gray-700">
                  {scenes[sceneIndex].text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <Button onClick={nextScene} className="text-base px-6 py-2 rounded-full">
          Wiggle to Next Scene
        </Button>
      </main>
    </div>
  );
}
