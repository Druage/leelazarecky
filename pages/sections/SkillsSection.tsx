import ScrollNextSectionButton from "../components/ScrollNextSectionButton";

export default function SkillsSection() {
  return (
    <div
      id="technical-skills"
      className="flex min-h-screen flex-col justify-center border-b-2 border-gray-100 bg-white"
    >
      <p className="flex items-center justify-center py-12 text-center text-center text-base text-2xl font-extrabold uppercase tracking-wider text-gray-600">
        Technical Skills
      </p>

      <div className={"flex flex-row items-center justify-center gap-12"}>
        <div className={"flex flex-col items-center justify-center gap-16"}>
          <div className={"p-2 text-4xl font-extrabold"}>
            <div className={"text-center"}>5+ Years</div>
            <div className={"text-2xl font-normal"}>Full-Stack Experience</div>
          </div>
          <div className={"p-2 text-4xl font-extrabold"}>
            <div className={"text-center"}>4+ Years</div>
            <div className={"text-2xl font-normal"}>
              C++ Emulation Programming Experience
            </div>
          </div>
          <div className={"p-2 text-4xl font-extrabold"}>
            <div className={"text-center"}>10+ Years</div>
            <div className={"text-2xl font-normal"}>
              Masters League Starcraft II Player
            </div>
          </div>
        </div>
        <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                alt="Next.js"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React.js"
              />
              <span
                className={
                  "ml-2 flex items-center text-4xl font-bold text-cyan-400"
                }
              >
                React
              </span>
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
                alt="Spring Boot"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="Typescript"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png"
                alt="C++"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                alt="Java"
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollNextSectionButton href={"#open-source-projects"} />
    </div>
  );
}
