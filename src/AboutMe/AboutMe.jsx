import { AboutCard } from "./AboutCard";
import { SpotifyCard } from "./SpotifyCard"
import { ExperienceCard } from "./ExperienceCard"
import { aboutData, spotifyData, experienceData} from "./AboutMePageData";


  export function AboutMe() {
    return (
      <div className="max-w-6xl mx-auto space-y-12 px-4">
        {/* Name - Centered */}
        <h1 className="text-secondary text-5xl font-bold text-center font-[customFont]">
          Ronit Sohal
        </h1>
  
        {/* Main Grid Layout*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Column*/}
          <section className="space-y-2 border border-gray-700 bg-zinc-90 rounded-lg p-6 shadow-md">
            <h1 className="text-secondary text-2xl font-bold font-[customFont]">About</h1>
            <div className="space-y-2">
              {aboutData.map((item, index) => (
                <AboutCard key={index} {...item} />
              ))}
            </div>
          </section>
  
          {/* Right Column - Spotify + Experience (Takes Half) */}
          <div className="space-y-2">
            {/* Experience Section */}
            <section className="border border-gray-700 bg-zinc-90 rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm text-gray-400">RECENT EXPERIENCES</h2>
                <a href="../../public/docs/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="text-sm text-gray-400 hover:underline cursor-pointer">
                    VIEW ALL
                  </button>
                </a>
              </div>
              <div className="space-y-6">
                {experienceData.map((item, index) => (
                  <ExperienceCard key={index} {...item} />
                ))}
              </div>
            </section>

            {/* Spotify Grid (2x2 Layout) */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {spotifyData.map((card, index) => (
                <SpotifyCard key={index} {...card} />
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  }
  