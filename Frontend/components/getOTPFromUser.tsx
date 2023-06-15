import React, { useState } from 'react';

const getOTPFromUser = () => {
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [otp, setOtp] = useState('');

    return new Promise((resolve) => {
        setShowOTPModal(true);
        const intervalId = setInterval(() => {
            if (otp !== '') {
                resolve(otp);
                setOtp('');
                setShowOTPModal(false);
                clearInterval(intervalId);
            }
        }, 100);
    });
};

export default getOTPFromUser;