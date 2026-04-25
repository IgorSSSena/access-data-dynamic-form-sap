import { sendToSAP } from "../services/sap.service.js";
import { parseXml } from "../utils/xmlParser.js";
export async function handleFormSaved(req, res) {
  try {
    const { documentId } = req.body;

    console.log("Documento recebido:", documentId);

    return res.status(200).json({
      success: true,
      message: "Form saved recebido"
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}

export async function handleFormPayload(req, res) {
  try {
    const payload = req.body;

    console.log("Payload recebido:", payload);

    return res.status(200).json({
      success: true,
      message: "Payload recebido"
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}