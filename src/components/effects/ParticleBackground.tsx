const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* CSS-based particle effect */}
      <div className="particles-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleBackground;