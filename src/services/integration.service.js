import { getFormXml } from "./dynamicForms.service.js";
import { parseXml } from "../utils/xmlParser.js";
import { sendToSAP } from "./sap.service.js";
import { logIntegration } from "./integrationLog.service.js";

export async function processSavedForm(documentId) {
  const xml = await getFormXml(documentId);

  const json = parseXml(xml);

  const payload = {
    documentId,
    data: json
  };

  const sapResponse = await sendToSAP(payload);

  logIntegration({
    documentId,
    status: "SUCCESS",
    sapResponse
  });

  return {
    success: true,
    sapResponse
  };
}