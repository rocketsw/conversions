import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { ConversionType } from './conversions'
import { Converter } from './Converter'
import { Categories } from './conversions'

export type ConversionTypeProps = {
    conversion: ConversionType;
}

export const SelectConversion = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [selectedConversionIndex, setSelectedConversionIndex] = useState(0);
    const [category, setCategory] = useState(Categories[0])

    const handleSelectCategoryChange = (event) => {  //: React.ChangeEvent<HTMLSelectElement>
        console.log(event.target.value);
        setSelectedCategoryIndex(event.target.value);
        setCategory(Categories[event.target.value]);
        setSelectedConversionIndex(0)
        //console.log(Categories[event.target.value].category);
    };

    const handleSelectConversionChange = (event) => {  //: React.ChangeEvent<HTMLSelectElement>
        console.log(event.target.value);
        setSelectedConversionIndex(event.target.value);
        //console.log(category.conversions[event.target.value].labelFrom + (category.conversions[event.target.value].labelTo.length>0 ? (' To ' + category.conversions[event.target.value].labelTo) : ''));
    };

    return (
        <div className='App'>
            <h1>Select Category</h1>
            <div className='select'>
                <FormControl fullWidth>
                    <InputLabel id="category-label-id">Category Type</InputLabel>
                    <Select
                        labelId="category-label-id"
                        id="category-input-id"
                        value={selectedCategoryIndex}
                        label="Category"
                        onChange={handleSelectCategoryChange}
                    >
                        {Categories.map((obj, index) => (
                            <MenuItem key={index} value={index} >{obj.category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <h1>Select Conversion Type</h1>
            <div className='select'>
                <FormControl fullWidth>
                    <InputLabel id="select-label-id">Conversion Type</InputLabel>
                    <Select
                        labelId="select-label-id"
                        id="select-input-id"
                        value={selectedConversionIndex}
                        label="Conversion Type"
                        onChange={handleSelectConversionChange}
                    >
                        {category.conversions.map((obj, index) => (
                            <MenuItem key={index} value={index} >{obj.labelFrom + (obj.labelTo.length>0 ? (' To ' + obj.labelTo) : '')}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            {selectedConversionIndex > 0 && <Converter conversion={category.conversions[selectedConversionIndex]} />}
        </div>
    )
}