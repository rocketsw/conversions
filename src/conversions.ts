export type ConversionType = {
    labelFrom: string;
    labelTo: string;
    value: string;
}

export const DistanceConversions: Array<ConversionType> = [
    { labelFrom: 'none', labelTo: '', value: '' },
    { labelFrom: 'Miles', labelTo: 'Kilometers', value: 'from * 1.609' },
    { labelFrom: 'Kilometers', labelTo: 'Miles', value: 'from / 1.609' },
    { labelFrom: 'Miles', labelTo: 'Feet', value: 'from * 5280' },
    { labelFrom: 'Feet', labelTo: 'Miles', value: 'from / 5280' },
    { labelFrom: 'Miles', labelTo: 'Yards', value: 'from * 1760' },
    { labelFrom: 'Yards', labelTo: 'Miles', value: 'from / 1760' },
    { labelFrom: 'Yards', labelTo: 'Feet', value: 'from * 3' },
    { labelFrom: 'Feet', labelTo: 'Yards', value: 'from / 3' },
    { labelFrom: 'Yards', labelTo: 'Inches', value: 'from * 36' },
    { labelFrom: 'Inches', labelTo: 'Yards', value: 'from / 36' },
    { labelFrom: 'Feet', labelTo: 'Inches', value: 'from * 12' },
    { labelFrom: 'Inches', labelTo: 'Feet', value: 'from / 12' },
    { labelFrom: 'Yards', labelTo: 'Centimeters', value: 'from * 91.44' },
    { labelFrom: 'Centimeters', labelTo: 'Yards', value: 'from / 91.44' },
    { labelFrom: 'Feet', labelTo: 'Centimeters', value: 'from * 30.48' },
    { labelFrom: 'Centimeters', labelTo: 'Feet', value: 'from / 30.48' },
    { labelFrom: 'Inches', labelTo: 'Centimeters', value: 'from * 2.54' },
    { labelFrom: 'Centimeters', labelTo: 'Inches', value: 'from / 2.54' }
]

export const WeightConversions: Array<ConversionType> = [
    { labelFrom: 'none', labelTo: '', value: '' },
    { labelFrom: 'Kilograms', labelTo: 'Pounds', value: 'from * 2.2046226218' },
    { labelFrom: 'Pounds', labelTo: 'Kilograms', value: 'from / 2.2046226218' },
    { labelFrom: 'Grams', labelTo: 'Ounces', value: 'from * 0.0352739619' },
    { labelFrom: 'Ounces', labelTo: 'Grams', value: 'from / 0.0352739619' },
    { labelFrom: 'Pounds', labelTo: 'Ounces', value: 'from * 16' },
    { labelFrom: 'Ounces', labelTo: 'Pounds', value: 'from / 16' },
    { labelFrom: 'Tons', labelTo: 'Pounds', value: 'from * 2000' },
    { labelFrom: 'Pounds', labelTo: 'Tons', value: 'from / 2000' }
]

export const TempConversions: Array<ConversionType> = [
    { labelFrom: 'none', labelTo: '', value: '' },
    { labelFrom: 'Fahrenheit', labelTo: 'Celsius', value: '(5 / 9) * (from - 32)' },
    { labelFrom: 'Celsius', labelTo: 'Fahrenheit', value: '(9 * from  / 5) + 32' },
    { labelFrom: 'Kelvin', labelTo: 'Celsius', value: 'from / 274.15' },
    { labelFrom: 'Celsius', labelTo: 'Kelvin', value: 'from * 274.15' },
    { labelFrom: 'Fahrenheit', labelTo: 'Kelvin', value: '(5 / 9) * (1*from + 459.67)' },
    { labelFrom: 'Kelvin', labelTo: 'Fahrenheit', value: '(9 * from  / 5) - 459.67' }
]

export const TimeConversions: Array<ConversionType> = [
    { labelFrom: 'none', labelTo: '', value: '' },
    { labelFrom: 'Days', labelTo: 'Hours', value: 'from * 24' },
    { labelFrom: 'Hours', labelTo: 'Days', value: 'from / 24' },
    { labelFrom: 'Hours', labelTo: 'Minutes', value: 'from * 60' },
    { labelFrom: 'Minutes', labelTo: 'Hours', value: 'from / 60' },
    { labelFrom: 'Minutes', labelTo: 'Seconds', value: 'from * 60' },
    { labelFrom: 'Seconds', labelTo: 'Minutes', value: 'from / 60' },
    { labelFrom: 'Weeks', labelTo: 'Days', value: 'from * 7' },
    { labelFrom: 'Days', labelTo: 'Weeks', value: 'from / 7' }
]

export const VolumeConversions: Array<ConversionType> = [
    { labelFrom: 'none', labelTo: '', value: '' },
    { labelFrom: 'Gallons', labelTo: 'Quarts', value: 'from * 4' },
    { labelFrom: 'Quarts', labelTo: 'Gallons', value: 'from / 4' },
    { labelFrom: 'Quarts', labelTo: 'Pints', value: 'from * 2' },
    { labelFrom: 'Pints', labelTo: 'Quarts', value: 'from / 2' },
    { labelFrom: 'Pints', labelTo: 'Cups', value: 'from * 2' },
    { labelFrom: 'Cups', labelTo: 'Pints', value: 'from / 2' },
    { labelFrom: 'Tablespoons', labelTo: 'Teaspoons', value: 'from * 3' },
    { labelFrom: 'Teaspoons', labelTo: 'Tablespoons', value: 'from / 3' }
]

export type CategoryType = {
    category: string;
    conversions: Array<ConversionType>;
}


export const Categories: Array<CategoryType> = [
    { category: 'Distance', conversions: DistanceConversions },
    { category: 'Weight', conversions: WeightConversions },
    { category: 'Temperature', conversions: TempConversions },
    { category: 'Time', conversions: TimeConversions },
    { category: 'Volume', conversions: VolumeConversions }
]