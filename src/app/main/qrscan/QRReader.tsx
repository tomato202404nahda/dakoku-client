import { useEffect, useRef, useState } from "react";

import QrScanner from "qr-scanner";
import QrFrame from "../../../assets/qr-frame.svg";

const QRReader = () => {
  // QR States
  const scanner = useRef<QrScanner>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const qrBoxEl = useRef<HTMLDivElement>(null);
  const [qrOn, setQrOn] = useState<boolean>(true);

  // Result
  const [scannedResult, setScannedResult] = useState<string | undefined>("");

  // Success
  const onScanSuccess = (result: QrScanner.ScanResult) => {
    console.log(result);

    setScannedResult(result?.data);
  };

  // Fail
  const onScanFail = (err: string | Error) => {
    // 🖨 Print the "err" to browser console.
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,

        preferredCamera: "environment",

        highlightScanRegion: true,

        highlightCodeOutline: true,

        overlay: qrBoxEl?.current || undefined,
      });

      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  return (
    <div className='w-full md:w-288 h-full relative'>
      {/* QR */}
      <video className='w-full h-full object-cover' ref={videoEl}></video>
      <div ref={qrBoxEl} className='w-full'>
        <img
          src={QrFrame}
          alt='Qr Frame'
          width={256}
          height={256}
          className='absolute fill-none left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'
        />
      </div>

      {/* Show Data Result if scan is success */}
      {scannedResult && (
        <p
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 99999,
            color: "white",
          }}
        >
          Scanned Result: {scannedResult}
        </p>
      )}
    </div>
  );
};

export default QRReader;
