export default function Scene01() {
  
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800 p-6 max-w-3xl mx-auto">
      <main className="space-y-6">
        <h1 className="text-3xl font-bold text-center">Scene 1 – The Wiggle of Great Importance</h1>
        <p>It was the kind of day that wiggled. Not danced. Not wandered. Just… wiggled.</p>
        <p>Tryll felt it in the fuzz of her feathers — a tickle, a thrill. Something old and squishy was happening.</p>
        <p>Deep down in a warm puddle of stardust and maybe-soup, a tiny speck spun once… then twice… Then wiggled.</p>
        <p><strong>Tryll:</strong> “Look! A wiggle! A real one!”</p>
        <p><strong>Li Bäh:</strong> “Trude Kühl, that is a protozoan. A self-replicating—”</p>
        <p><strong>Tryll:</strong> “No. It’s obviously a very very early philosopher.”</p>
      </main>

      <footer className="flex justify-between mt-10">
        <button
          onClick={() => navigate("/scene/20")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Zurück
        </button>
        <button
          onClick={() => navigate("/scene/02")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Weiter →
        </button>
      </footer>
    </div>
  );
}
