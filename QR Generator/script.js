document.getElementById('generateBtn').addEventListener('click', function () {
  const text = document.getElementById('textInput').value;
  const qrcodeContainer = document.getElementById('qrcode');

  // Clear previous QR code
  qrcodeContainer.innerHTML = "";

  if (text.trim() === "") {
    alert("Please enter some text or URL.");
    return;
  }

  // Generate QR Code
  const qrCanvas = document.createElement('canvas');
  qrcodeContainer.appendChild(qrCanvas);

  QRCode.toCanvas(qrCanvas, text, { width: 200 }, function (error) {
    if (error) {
      console.error("Error generating QR Code: ", error);
    } else {
      console.log("QR Code generated successfully!");
    }
  });
});
