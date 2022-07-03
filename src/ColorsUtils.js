const colors = [
    'white',
    'blue',
    'black',
    'red',
    'green'
];

export function randomColor () {
    return colors[Math.floor(Math.random() * (colors.length - 1))];
}

export function nextColor (currentColor) {
    const colorIndex = colors.findIndex((color) => color === currentColor);
    let newColorIndex = colorIndex + 1;

    if (colorIndex === colors.length - 1) {
        newColorIndex = 0;
    }

    return colors[newColorIndex];
}
