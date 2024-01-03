import React, { useRef, useEffect, useState } from "react";
import QrScanner from "qr-scanner";

const QRScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // url 타입 정의
  const [moveUrl, setMoveUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleQrCodeScan = (result: string) => {
      console.log("QR Code Result:", result);
      if (result && moveUrl === null) {
        console.log("result: ", result);
        setMoveUrl(result);
        console.log("moveUrl: ", moveUrl);
      }
    };

    if (videoRef.current) {
      const scanner = new QrScanner(videoRef.current, handleQrCodeScan);

      scanner.start();
      return () => {
        scanner.destroy();
      };
    }
  }, []);

  useEffect(() => {
    console.log("moveUrl updated:", moveUrl);
  }, [moveUrl]);

  return (
    <div className="h-full overflow-hidden relative flex items-center justify-center">
      <video ref={videoRef} className="w-screnn h-screen object-cover"></video>
      <div className="h-full w-full absolute top-0 flex justify-center items-center bg-black bg-opacity-40 text-center">
        <div className="w-full h-full flex flex-col items-center justify-center absolute z-10 text-white">
          QR 코드를 읽고 발자국을 남겨 보세요
          {/* @TODO: 하단div bg-transparent 적용안됨 현상 해결하기 */}
          <div className="text-white border-2 border-white h-2/5 w-8/12 mt-4 bg-transparent"></div>
        </div>
        {moveUrl && (
          <button
            onClick={() => window.open(moveUrl as string)}
            className="bg-white shadow-lg self-end h-20 w-9/12 animate-jump-in rounded-[3rem] mb-10 text-black flex flex-col items-center justify-center font-bold text-2xl"
          >
            방명록 이동하기
            <p className="text-sm font-medium">🐾 나의 발자국을 남겨보세요!</p>
          </button>
        )}
        {/* 이승현이 이쁘다한 UI */}
        {/* <div className="bg-white animate-jump-in shadow-lg self-end h-10 w-1/3 rounded-3xl mb-10 text-black flex flex-col items-center justify-center font-semibold text-lg">
          이동하기
        </div> */}
      </div>
    </div>
  );
};

export default QRScanner;
