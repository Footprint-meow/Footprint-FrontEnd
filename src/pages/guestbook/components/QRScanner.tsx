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
    <div className="h-full overflow-hidden relative flex items-center justify-center">
      <video ref={videoRef} className="w-screnn h-screen object-cover"></video>
      <div className="h-full w-full absolute top-0 flex justify-center items-center bg-black bg-opacity-40 text-center">
        <div className="w-full h-full flex flex-col items-center justify-center absolute z-10 text-white">
          QR 코드를 읽고 발자국을 남겨 보세요
          {/* @TODO: 하단div bg-transparent 적용안됨 현상 해결하기 */}
          <div className="text-white border-2 border-white h-2/5 w-8/12 mt-4 bg-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
