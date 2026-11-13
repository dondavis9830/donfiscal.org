import React, { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center">
        <h1
          onMouseMove={handleMouseMove}
          style={{
            "--mouse-x": `${position.x}%`,
            "--mouse-y": `${position.y}%`,
          }}
          className="text-[18vw] font-extrabold font-serif
        bg-clip-text text-transparent mouse-gradient cursor-pointer"
        >
          DonFiscal
        </h1>
      </div>
      <nav className=""></nav>
    </div>
  );
}
