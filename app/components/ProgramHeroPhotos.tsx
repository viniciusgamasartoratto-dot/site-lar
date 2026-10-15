const photos = [
  "/images/cre-ser-atividade-convivencia.jpg",
  "/images/cre-ser-atividade-oficina.jpg",
  "/images/cre-ser-atividade-grupo.jpg",
  "/images/cre-ser-atividade-externa.jpg",
];

export function ProgramHeroPhotos() {
  return (
    <>
      <div className="cre-hero-photos" aria-hidden="true">
        {photos.map((photo, index) => <img key={photo} src={photo} alt="" className="cre-hero-photo" style={{ animationDelay: `${index === 0 ? 0 : index * 8 - 32}s` }} fetchPriority={index === 0 ? "high" : "low"} />)}
        <div className="cre-hero-photo-overlay" />
      </div>
    </>
  );
}