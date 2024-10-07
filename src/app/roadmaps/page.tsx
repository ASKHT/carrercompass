import Link from "next/link";

const roadmaps = [
  { id: 1, title: "Software Developer" },
  { id: 2, title: "Data Scientist" },
  { id: 3, title: "UX Designer" },
];

export default function Roadmaps() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Career Roadmaps</h1>
      <ul>
        {roadmaps.map((roadmap) => (
          <li key={roadmap.id}>
            <Link href={`/roadmaps/${roadmap.id}`}>{roadmap.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
