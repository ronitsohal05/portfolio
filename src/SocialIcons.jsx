import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SocialIcons = () => {

    return (
        <div
          className="right-5 top-1/2 -translate-y-1/2 flex flex-col space-y-4 "
        >
          <a
            className="text-secondary hover:opacity-80 transition-opacity"
            href="https://www.linkedin.com/in/ronit-sohal-b13857258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            className="text-secondary hover:opacity-80 transition-opacity"
            href="https://github.com/ronitsohal05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            className="text-secondary hover:opacity-80 transition-opacity"
            href="https://www.instagram.com/ronimacaroni05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
    );
}