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
  
        {/* Main Grid Layout (50% About - 50% Other Sections) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - About Section (Takes Half) */}
          <section className="space-y-8 border border-gray-700 bg-gray-900/50 rounded-lg p-6 shadow-md">
            <h1 className="text-secondary text-4xl font-bold">About</h1>
            <div className="space-y-6">
              {aboutData.map((item, index) => (
                <AboutCard key={index} {...item} />
              ))}
            </div>
          </section>
  
          {/* Right Column - Spotify + Experience (Takes Half) */}
          <div className="space-y-8">
            {/* Spotify Grid (2x2 Layout) */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {spotifyData.map((card, index) => (
                <SpotifyCard key={index} {...card} />
              ))}
            </section>
  
            {/* Experience Section (Below Spotify Cards) */}
            <section className="border border-gray-700 bg-zinc-90 rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm text-gray-400">RECENT EXPERIENCES</h2>
                <button className="text-sm text-gray-400 hover:text-white transition-colors">
                  VIEW ALL
                </button>
              </div>
              <div className="space-y-6">
                {experienceData.map((item, index) => (
                  <ExperienceCard key={index} {...item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
  