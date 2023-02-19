import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

function PaymentForm() {
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      const match = data.match(/^bitcoin:([a-zA-Z0-9]+)\?amount=(\d+(\.\d+)?)$/);
      if (match) {
        const walletAddress = match[1];
        const amount = parseFloat(match[2]);
        setResult({ walletAddress, amount });
      }
    }
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && (
        <div>
          <p>Wallet Address: {result.walletAddress}</p>
          <p>Amount to be paid: {result.amount}</p>
        </div>
      )}
    </div>
  );
}

export default PaymentForm;
