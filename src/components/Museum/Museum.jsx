import { Card, CardContent } from "../../ui/card";
import { useEbook } from "../../hooks/useEbook";
import { museumData } from "./museumData";

export default function Museum() {
  const { currentSceneIndex } = useEbook();
  const item = museumData[currentSceneIndex];

  if (!item) return <p className="text-center text-gray-500">No museum item for this scene.</p>;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Tryll’s Museum of Accidental Brilliance</h1>
      <hr className="my-4 border-t border-gray-300" />
      <Card className="shadow-xl border-l-4 border-rose-400">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-sm text-muted-foreground italic">{item.scene}</p>
          <div className="mt-3">
            <p><strong>Tryll’s Label:</strong> {item.tryll}</p>
            <p className="text-sm text-gray-600"><strong>Li Bäh’s Note:</strong> {item.libaeh}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
