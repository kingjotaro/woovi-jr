import React from 'react';
import QRCode from 'qrcode.react';


function qrcode() {
    const qrValue = "https://example.com";

    return (
      <div>
        <h1>Gerador de QR Code</h1>
        <QRCode value={qrValue} />
      </div>
    );
  };

export default qrcode