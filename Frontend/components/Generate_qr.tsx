import React from 'react';
import QRCode from 'qrcode.react';

const Generate_QR = () => 
{
    const botUsername = "sunshine005_bot";
    const botURL = `https://t.me/${botUsername}`;

    return (
        <div>
            <QRCode value={botURL} />
        </div>
    );
};

export default Generate_QR;
