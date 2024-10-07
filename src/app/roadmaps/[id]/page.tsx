import { notFound } from "next/navigation";

const roadmaps = [
  {
    id: 1,
    title: "Software Developer",
    steps: [
      "Learn a programming language",
      "Study data structures and algorithms",
      "Build projects",
      "Learn version control",
      "Understand databases",
    ],
  },
  // Add other roadmaps here
];

export default function RoadmapDetail({ params }: { params: { id: string } }) {
  const roadmap = roadmaps.find((r) => r.id === parseInt(params.id));

  if (!roadmap) notFound();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{roadmap.title} Roadmap</h1>
      <ol>
        {roadmap.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
