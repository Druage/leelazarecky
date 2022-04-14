export default function SkillsSection() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                    Technical Skills
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                            alt="Next.js"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js" />
                        <span className={"text-cyan-400 flex items-center ml-2 text-4xl font-bold"}>React</span>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg" alt="Spring Boot" />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript" />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png"
                            alt="C++"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                            alt="Java"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Heroku_logo.svg"
                            alt="Heroku"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="https://redis.com/wp-content/uploads/2020/06/Pivotal-CF-FULL-LOGO.png"
                            alt="PCF"
                        />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg"
                            alt="Digital Ocean"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}