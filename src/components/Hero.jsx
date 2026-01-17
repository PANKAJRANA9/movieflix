export default function Hero() {
  return (
    <div className="hero">
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        muted
        loop
      />
      <div className="hero-overlay">
        <h2>Featured Movie</h2>
        <p>Watch the latest blockbuster now</p>
      </div>
    </div>
  );
}
