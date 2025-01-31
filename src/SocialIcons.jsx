import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SocialIcons = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gap: '24px',
        alignItems: 'center',
      }}
    >
      <a
        className="text-secondary hover-effect"
        href="https://www.linkedin.com/in/ronit-sohal-b13857258/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
      <a
        className="text-secondary hover-effect"
        href="https://github.com/ronitsohal05"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
      <a
        className="text-secondary hover-effect"
        href="https://www.instagram.com/ronimacaroni05/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon fontSize="large" />
      </a>
    </div>
  );
};