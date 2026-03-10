interface VialtoLogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
}

/**
 * Logo Vialto según manual de marca
 * - variant "dark": fondos oscuros (VIALTO blanco, punto naranja)
 * - variant "light": fondos claros (VIALTO oscuro, punto naranja)
 */
const VialtoLogo = ({ variant = "dark", showTagline = false, className = "" }: VialtoLogoProps) => {
  const isDarkBg = variant === "dark";

  return (
    <div className={`flex flex-col gap-0 ${className}`}>
      <span className="font-display text-xl md:text-2xl font-normal tracking-tight leading-none">
        <span className={isDarkBg ? "text-white" : "text-[#1A1A1A]"}>VIAL</span>
        <span className="text-[#E8470A]">TO</span>
        <span className="text-[#E8470A]">.</span>
      </span>
      {showTagline && (
        <span className={`text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase font-sans ${
          isDarkBg ? "text-white/90" : "text-[#4A4A4A]"
        }`}>
          GESTIÓN DE FLOTAS
        </span>
      )}
    </div>
  );
};

export default VialtoLogo;
