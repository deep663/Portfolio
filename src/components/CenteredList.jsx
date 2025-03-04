import { useState } from "react";

const items = [
  { id: "a", label: "A", bgColor: "#ed1c24" },
  { id: "b", label: "B", bgColor: "#0072bc" },
  { id: "c", label: "C", bgColor: "#39b54a" },
  { id: "d", label: "D", bgColor: "#f26522" },
  { id: "e", label: "E", bgColor: "#630460" },
  { id: "f", label: "F", bgColor: "#8c6239" },
];

const Carousel = () => {
  const [currDeg, setCurrDeg] = useState(0);

  const rotate = (direction) => {
    setCurrDeg((prev) => (direction === "next" ? prev - 60 : prev + 60));
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="container">
        <div
          className="carousel"
          style={{ transform: `rotateY(${currDeg}deg)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={item.id}
              style={{
                transform: `rotateY(60 * ${index}deg)`,
              }}
            >
              <div className="item" style={{ background: item.bgColor }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 flex gap-4">
        <button onClick={() => rotate("prev")} className="prev">Prev</button>
        <button onClick={() => rotate("next")} className="next">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
