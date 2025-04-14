
const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient circles */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-radial from-socl-primary/5 via-transparent to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-radial from-socl-secondary/5 via-transparent to-transparent opacity-30 blur-3xl"></div>
      
      {/* Animated floating elements */}
      <div className="floating-circle w-16 h-16 top-[15%] left-[10%] bg-socl-primary animate-float-slow"></div>
      <div className="floating-square w-20 h-20 top-[40%] right-[5%] bg-socl-secondary animate-float animate-float-delay-2"></div>
      <div className="floating-circle w-24 h-24 bottom-[20%] left-[15%] bg-socl-accent animate-float-fast animate-float-delay-1"></div>
      <div className="floating-square w-12 h-12 top-[60%] left-[40%] bg-socl-highlight rotate-45 animate-float animate-float-delay-3"></div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-socl-background/30 to-socl-darkBackground/50"></div>
      
      {/* Animated glow spots */}
      <div className="absolute top-[30%] left-[20%] w-64 h-64 rounded-full bg-gradient-radial from-socl-primary/5 to-transparent animate-glow-pulse"></div>
      <div className="absolute bottom-[40%] right-[30%] w-48 h-48 rounded-full bg-gradient-radial from-socl-secondary/5 to-transparent animate-glow-pulse animate-float-delay-2"></div>
      
      {/* Rotating element */}
      <div className="absolute top-[15%] right-[15%] w-32 h-32 border border-socl-accent/10 rounded-full animate-rotate-slow"></div>
      <div className="absolute bottom-[25%] left-[25%] w-40 h-40 border border-socl-primary/10 rounded-full animate-rotate-slow animate-float-delay-2"></div>
    </div>
  );
};

export default BackgroundElements;
