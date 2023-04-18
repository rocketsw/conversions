import React, { useState, useEffect } from 'react';
import { ConversionTypeProps } from './SelectConversion'

export const Converter = ({ conversion } : ConversionTypeProps) => {

    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)

    useEffect(() => {
        setFrom(0)
        setTo(0)
    }, [conversion])

    const handleChange = (event) => {
        setFrom(event.target.value);
        setTo(0)
    }

    const convert = () => {
        console.log('from: ', from )
        let equation = conversion.value 
        console.log('equation: ', equation )
        const func = convertEquation(equation);
        setTo( func(from) )
        //console.log( func(from) )
    }

    function convertEquation(equation) {
        // Escape the equation string.
        equation = equation.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        //console.log('from: ', from )
        // Create a new Function object.
        const func = new Function('from', 'console.log(from); return ' + equation);
        //console.log(func)
        // Return the Function object.
        return func;
    }

    return (
        <div className='App'>
        <h1>{conversion.labelFrom + (conversion.labelTo && conversion.labelTo.length>0 ? (' To ' + conversion.labelTo) : '')} Converter</h1>
            <input type="number" value={from} onChange={handleChange} />
            <p>{conversion.labelFrom}: {from!==0 && from}</p>
            <p>{conversion.labelTo}: {to && to!==0 && to.toFixed(2)}</p>
            <button onClick={convert}>Convert</button>
        </div>
    )
}

