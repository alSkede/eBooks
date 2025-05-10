import { useEbook } from "../../hooks/useEbook";

export default function Museum() {
  const { currentScene } = useEbook();
  const exhibits = currentScene?.museum || [];

  if (!exhibits.length) {
    return <p className="text-center text-gray-500">No museum exhibit for this scene.</p>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto text-left space-y-4">
      <h2 className="text-lg font-semibold">Museum der Bedeutungen</h2>
      {exhibits.map((item, index) => (
        <div key={index}>
          <h3 className="font-semibold">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
