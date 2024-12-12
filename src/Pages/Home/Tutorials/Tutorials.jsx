import { useState, useEffect } from "react";
const Tutorials = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        <span className="loading loading-bars loading-lg text-blue-500"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto ">
      <div className="h-[80px]"></div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/rGrBHiuPlT0?si=xwJWmVny7hFObtIx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/bOUqVC4XkOY?si=V_pzNNIws2nm8sIl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/JnoZE51WZg4?si=93i2sLchgqyX0Qua"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/k74yjmfFb_A?si=loAD_6nc1Io1sCDO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/KUIWRsVZZZA?si=IDJp4Pm7S7i3Csdp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/ZGGufccTLso?si=DqV5nWGIhR8_wP0H"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/W0n-ODPwtzA?si=rJHyUNtfWzhcOz4I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/p9PEIsOzJ5E?si=EKZ9jI-0f5hCpHVJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="390"
            height="315"
            src="https://www.youtube.com/embed/Pc86Xg2MX-U?si=91fSFn3b2TnlWGLM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
