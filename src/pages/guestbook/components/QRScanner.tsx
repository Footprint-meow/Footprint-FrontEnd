import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner";

const QRScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const scanner = new QrScanner(videoRef.current, (result: string) => {
        console.log("QR Code Result:", result);
        // 결과를 원하는 방식으로 처리할 수 있습니다.
      });

      // 스캐너를 시작합니다.
      scanner.start();
    }

    // 컴포넌트가 언마운트될 때 스캐너를 정지합니다.
    // return () => {
    //   scanner.stop();
    // };
  }, []);

  return (
    <div className=" overflow-hidden">
      <video
        ref={videoRef}
        className="w-screnn h-screen object-cover"
      ></video>
    </div>
  );
};

export default QRScanner;
