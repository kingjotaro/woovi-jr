function getTransactionId64() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const formattedTimestamp = `${year}${month}${day}T${hours}${minutes}${seconds}`;
    const transactionId = `${formattedTimestamp}`;
    const transactionIdCredit64 = Buffer.from(transactionId).toString('base64');
  
    return transactionIdCredit64;
  }
  

  
  export default getTransactionId64;
  