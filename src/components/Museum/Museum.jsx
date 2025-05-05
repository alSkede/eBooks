import { Card, CardContent } from "../ui/card";

const museumItems = [
  {
    title: "The Cracked Rock",
    scene: "Scene 10 – Tool Fool",
    tryll: "The First ‘Why Not?’ Ever Thrown.",
    libaeh: "Granite. Not sapient."
  },
  {
    title: "Fossil Brooch of Memory",
    scene: "Scene 5",
    tryll: "A wearable past.",
    libaeh: "Abandoned exoskeletal fragment."
  },
  {
    title: "The Breath of Thought",
    scene: "Scene 6",
    tryll: "An idea becoming airborne.",
    libaeh: "Vacuum-sealed air. Possibly mucus vapor."
  },
  {
    title: "The Fruit of Ambiguity",
    scene: "Scene 8",
    tryll: "He meant to throw it, or mean something with it.",
    libaeh: "Projectile. Not a philosophy."
  },
  {
    title: "The Puddle of Potential",
    scene: "Scene 1",
    tryll: "Origin. Soup. Soul bath.",
    libaeh: "Organic amino-acid fluid. Recommend containment."
  }
];

export default function Museum() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Tryll’s Museum of Accidental Brilliance</h1>
      <hr className="my-4 border-t border-gray-300" />
      {museumItems.map((item, index) => (
        <Card key={index} className="shadow-xl border-l-4 border-rose-400">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-muted-foreground italic">{item.scene}</p>
            <div className="mt-3">
              <p><strong>Tryll’s Label:</strong> {item.tryll}</p>
              <p className="text-sm text-gray-600"><strong>Li Bäh’s Note:</strong> {item.libaeh}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
