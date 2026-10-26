const photos = [
  { src: "/images/cre-ser-banner-20261026-04.jpg", position: "center 40%" },
  { src: "/images/cre-ser-banner-20261026-01.jpg", position: "center 40%" },
  { src: "/images/cre-ser-banner-20261026-02.jpg", position: "center 35%" },
  { src: "/images/cre-ser-banner-20261026-03.jpg", position: "center 30%" },
  { src: "/images/cre-ser-banner-20261026-05.jpg", position: "center 45%" },
  { src: "/images/cre-ser-banner-20261026-06.jpg", position: "center 45%" },
  { src: "/images/cre-ser-banner-20261026-07.jpg", position: "center 40%" },
];

export function ProgramHeroPhotos() {
  const duration = photos.length * 8;
  return (
    <div className="cre-hero-photos" aria-hidden="true">
      {photos.map((photo, index) => <img key={photo.src} src={photo.src} alt="" className="cre-hero-photo" style={{ animationDuration: `${duration}s`, animationDelay: `${index === 0 ? 0 : index * 8 - duration}s`, objectPosition: photo.position }} fetchPriority={index === 0 ? "high" : "low"} />)}
      <div className="cre-hero-photo-overlay" />
    </div>
  );
}
