export async function sendToSAP(payload) {
  return {
    success: true,
    message: "Mock SAP OK",
    receivedAt: new Date().toISOString(),
    payloadPreview: Object.keys(payload)
  };
}