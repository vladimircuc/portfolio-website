"use client";

export function BrandHome() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-lg font-semibold tracking-[0.2em] text-white transition duration-300 md:hover:text-[#FF6A00]"
    >
      <span className="bg-gradient-to-r from-white via-[#FF6A00] to-white bg-clip-text text-transparent">
        Vladimir Cuc
      </span>
    </button>
  );
}

