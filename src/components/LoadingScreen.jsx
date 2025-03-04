import { useEffect, useState } from "react";

function LoadingScreen({onComplete}) {
  const [text, setText] = useState("");
  const fullText = "Deep Senchowa";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center">
      <div className="mb-4 text-4xl text-red-500 font-bold">
       &lt; <span className="agustina-font">{text}</span> /&gt;
      </div>

    </div>
  );
}

export default LoadingScreen;
