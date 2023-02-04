import React from 'react';

const SharedColor = () => {
    const colors = {
        primary: { color: " #0FCFEC" },
        secondary: { color: "#3A4256" },
        cyan: { color: 'rgb(103 232 249)' },
        green: { color: '#19D3AE' }
    };

    const background = {
        bg1: { background: 'linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)' },
        b2: { backgroundColor: 'rgb(52 211 153)' }
    };

    return { colors, background };
};

export default SharedColor;