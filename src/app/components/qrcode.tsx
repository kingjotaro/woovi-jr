import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import jsQR from 'jsqr';
import Image from 'next/image';

const Qrcode = () => {

  const mock = {
    name: "rafael",
    email: "rafael@.com",
    phone: "3333-3333",
  };
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDecode = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const context = canvas.getContext('2d');
        if (context) {
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {

            copyToClipboard(code.data);
          }
        }
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('QRCODE copiado para a área de transferência!');
    }).catch(err => {
      console.error('Falha ao copiar: ', err);
    });
  };

  const paymentData = JSON.stringify(mock);

  return (
    <div>

      <div>
        <div ref={qrRef}>
          <QRCode value={paymentData} size={332}  />
        </div>
      </div>

      <div 
    className='flex justify-center border bg-blue-900 text-white  rounded-md  mt-2 border-black'>
        <button onClick={handleDecode}>Copiar QR Code</button>
        <div className=''>
        <Image
        priority
        src="/copy.svg"
        height={20}
        width={20}
        alt="copy"
      />
      </div>
      </div>
    </div>
  );
};

export default Qrcode;
