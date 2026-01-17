export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="intro-logo">
      <p className="footer flix">&copy; MoviesFlix.com {currentYear}</p>
    </div>
  );
}
