// Importa a biblioteca de geração de QR codes (exemplo usando a biblioteca 'qrcode')
const QRCode = require('qrcode');

// Função para obter as coordenadas atuais
function obterCoordenadasAtuais() {
  // Verifica se o navegador suporta geolocalização
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Obtém as coordenadas atuais (latitude e longitude)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Gera o QR code com as coordenadas atuais
        const qrCodeData = JSON.stringify({ latitude, longitude });
        console.log(qrCodeData)
        QRCode.toDataURL(qrCodeData, (err, url) => {
          if (err) {
            console.error(err); 
          } else {
            // Exibe o QR code gerado (por exemplo, em uma imagem HTML)
            const imgElement = document.createElement('img');
            imgElement.src = url;
            document.body.appendChild(imgElement);
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    console.error("Geolocalização não suportada no navegador.");
  }
}

// Chama a função para obter as coordenadas atuais e gerar o QR code
obterCoordenadasAtuais();
