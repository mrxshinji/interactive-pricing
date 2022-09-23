import React, { useEffect, useState } from 'react';
import PricingSlider from './Slider';
import CheckIcon from '../images/icon-check.svg';

// init data
const pricingData = [
    {
        label: "10K",
        value: 1,
        cost: 8,
    },
    {
        label: "50K",
        value: 2,
        cost: 12,
    },
    {
        label: "100K",
        value: 3,
        cost: 16,
    },
    {
        label: "500K",
        value: 4,
        cost: 24,
    },
    {
        label: "1M",
        value: 5,
        cost: 36,
    },
]

export default function Pricing() {
    // init satte
    const [toggle, setToggle] = useState(false)
    const [parentValue, setParentValue] = useState(3)
    const [cost, setCost] = useState(3.00)

    function toggleParentValue(val) {
        setParentValue(val)
    }

    function handleToggle() {
        setToggle(prev => !prev)
    }

    // change value based on discount toggle
    useEffect(() => {
        if (toggle) {
            setCost(pricingData[parentValue-1].cost * 0.75 * 12);
        } else {
            setCost(pricingData[parentValue-1].cost);
        };
    }, [toggle, parentValue])


    return (
        <section id="pricing">
            <div className='card'>
                <div className='page-view'>
                    <h2>{pricingData[parentValue-1].label} PAGEVIEWS</h2>
                </div>
                <div className="prices">
                    <h3>${cost.toFixed(2)}</h3><p>/ {toggle ? `year` : `month`}</p>
                </div>
                <PricingSlider pricingData={pricingData} toggleParentValue={toggleParentValue}/>
                <div className='toggle'>
                    <p>Monthly Billing</p>
                    <div id="toggle-box">
                        <button onClick={handleToggle}></button>
                        <span id="toggler" className={`${toggle ?'active' : ''}`}></span>
                    </div>
                    <div id="discount">
                        <p>Yearly Billing</p>
                        <p>-25%</p>
                    </div>
                </div>
                <hr />
                <div className='benefit'>
                    <div className="benefit-text">
                        <p><img src={CheckIcon} alt="tick" /> Unlimited websites</p>
                        <p><img src={CheckIcon} alt="tick" /> 100% data ownership</p>
                        <p><img src={CheckIcon} alt="tick" /> Email reports</p>
                    </div>
                    <button type="submit" form="pricing-form">Start my trial</button>
                </div>
            </div>
        </section>
    )
}




// https://codesandbox.io/s/rpo47?file=/src/App.js