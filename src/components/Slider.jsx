import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconSlider from '../images/icon-slider.svg';

const StyledSlider = styled(Slider)(({ theme }) => ({
    width: "90%",
    height: 10,
    '& .MuiSlider-rail': {
        color: `hsl(224, 65%, 95%)`,
    },
    '& .MuiSlider-track': {
        color: `hsl(174, 77%, 80%)`,
    },
    '& .MuiSlider-thumb': {
        color: `hsl(174, 86%, 45%)`,
        height: 40,
        width: 40,
        backgroundImage: `url(${IconSlider})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        '&:hover': {
            filter: `opacity(0.8)`,
            color: `hsl(174, 86%, 48%)`,
            boxShadow: `0px 5px 10px 5px hsla(174, 86%, 45%, .3)`
        },
        '&.Mui-focusVisible': {
        color: `hsl(174, 86%, 30%)`,
        boxShadow: `5px 15px 5px 5px hsla(174, 86%, 45%, .2)`,
        },
    },
}));



// RETURN PRICING SLIDER
export default function PricingSlider({ pricingData, toggleParentValue}) {
    const [value, setValue] = useState(3)

    function scale(value) {
        return pricingData[value - 1].cost
    }

    function handleChange(e,v) {
        setValue(v);
        toggleParentValue(value);
    }

    return (
        <form id="pricing-form">
        <div className='price-slider'>
            <StyledSlider
                value={value}
                defaultValue={3}
                arial-label="pricings"
                min={1}
                max={5}
                step={1}
                scale={scale}
                name="pricings"
                // marks={marks}
                // valueLabelDisplay="auto"
                onChange={handleChange}
            />
            
        </div>
    </form>
    )
}