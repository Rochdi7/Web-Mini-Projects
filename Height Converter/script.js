document.getElementById('convertButton').addEventListener('click', () => {
    const height = parseFloat(document.getElementById('heightInput').value);
    const firOpt = document.getElementById('firOpt').value;
    const secOpt = document.getElementById('secOpt').value;

    if (!height || firOpt === "Select an Option" || secOpt === "Convert To") {
        alert("Please fill all fields correctly.");
        return;
    }

    document.getElementById('output').classList.remove('d-none');
    document.getElementById('resetButton').classList.remove('d-none');

    document.getElementById('heightName').innerHTML = firOpt;
    document.getElementById('heightOutput').innerHTML = height;

    let convertedHeight = 0;

    if (firOpt === "Miles" && secOpt === "Centimeters") convertedHeight = height * 160934;
    else if (firOpt === "Miles" && secOpt === "Kilometers") convertedHeight = height * 1.60934;
    else if (firOpt === "Miles" && secOpt === "Meters") convertedHeight = height * 1609.34;
    else if (firOpt === "Miles" && secOpt === "Inches") convertedHeight = height * 63360;
    else if (firOpt === "Centimeters" && secOpt === "Miles") convertedHeight = height / 160934;
    else if (firOpt === "Centimeters" && secOpt === "Kilometers") convertedHeight = height / 100000;
    else if (firOpt === "Centimeters" && secOpt === "Meters") convertedHeight = height * 0.01;
    else if (firOpt === "Centimeters" && secOpt === "Inches") convertedHeight = height * 0.3937;
    else if (firOpt === "Kilometers" && secOpt === "Centimeters") convertedHeight = height * 100000;
    else if (firOpt === "Kilometers" && secOpt === "Miles") convertedHeight = height / 1.609;
    else if (firOpt === "Kilometers" && secOpt === "Meters") convertedHeight = height * 1000;
    else if (firOpt === "Kilometers" && secOpt === "Inches") convertedHeight = height * 39370;
    else if (firOpt === "Meters" && secOpt === "Miles") convertedHeight = height / 1609;
    else if (firOpt === "Meters" && secOpt === "Kilometers") convertedHeight = height / 1000;
    else if (firOpt === "Meters" && secOpt === "Centimeters") convertedHeight = height * 100;
    else if (firOpt === "Meters" && secOpt === "Inches") convertedHeight = height * 39.37;
    else if (firOpt === "Inches" && secOpt === "Miles") convertedHeight = height / 63360;
    else if (firOpt === "Inches" && secOpt === "Kilometers") convertedHeight = height / 39370;
    else if (firOpt === "Inches" && secOpt === "Meters") convertedHeight = height / 39.37;
    else if (firOpt === "Inches" && secOpt === "Centimeters") convertedHeight = height * 2.54;
    else convertedHeight = height;

    document.getElementById('convertedHeightName').innerHTML = secOpt;
    document.getElementById('finalOutput').innerHTML = convertedHeight.toFixed(2);
});

document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('mainForm').reset();
    document.getElementById('output').classList.add('d-none');
    document.getElementById('resetButton').classList.add('d-none');
});
