// Avatar renders the profile photo when portfolioData.personal.profileImage
// is set. Until then it falls back to a styled initials placeholder so the
// UI never shows a broken image.
import "./Avatar.css";

function getInitials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ src, name, size = "md", className = "" }) {
  const initials = getInitials(name);

  return (
    <span className={`avatar avatar--${size} ${className}`}>
      {src ? (
        <img src={src} alt={name} className="avatar__img" />
      ) : (
        <span className="avatar__fallback" aria-label={name}>
          {initials}
        </span>
      )}
    </span>
  );
}

export default Avatar;
