const projects = [
  {
    name: "AuthQuest",
  },
  {
    name: "RetroQuest",
  },
  {
    name: "Smash ELO Tracker",
  },
];

export function OpenSourceProjects() {
  return (
    <div id={"open-source-projects"}>
      <h1 className={"text-4xl"}>Open Source Projects</h1>

      <div className={"mt-8 flex flex-col gap-12"}>
        {projects.map((it) => (
          <div key={it.name} className={"h-64 w-full bg-gray-600"}>
            {it.name}
          </div>
        ))}
      </div>
    </div>
  );
}
