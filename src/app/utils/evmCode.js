export const emvCode = {
  payloadFormatIndicator: "00",
  pointOfInitiationMethod: "12",
  merchantAccountInformation: {
    gui: "br.gov.bcb.pix",
    key: "rafael@.com",
    infoAdicional: {
      nome: "rafael",
      telefone: "3333-3333"
    }
  },
  merchantCategoryCode: "0000",
  transactionCurrency: "986",
  countryCode: "BR",
  merchantName: "Rafael",
  merchantCity: "Cidade",
  additionalDataFieldTemplate: {
    referenceLabel: "RF123",
  },
  crc: "63"
};
  
  export function generateBRCode(emvCode) {
    const emvString = `
      00${emvCode.payloadFormatIndicator}
      01${emvCode.pointOfInitiationMethod}
      26${emvCode.merchantAccountInformation.gui.length}${emvCode.merchantAccountInformation.gui}
      2602${emvCode.merchantAccountInformation.key.length}${emvCode.merchantAccountInformation.key}
      5204${emvCode.merchantCategoryCode}
      5303${emvCode.transactionCurrency}
      5802${emvCode.countryCode}
      59${emvCode.merchantName.length}${emvCode.merchantName}
      60${emvCode.merchantCity.length}${emvCode.merchantCity}
      62${emvCode.additionalDataFieldTemplate.referenceLabel.length}${emvCode.additionalDataFieldTemplate.referenceLabel}
      6304${emvCode.crc}
    `.replace(/\s+/g, '');
  
    return emvString;
  }
  

 