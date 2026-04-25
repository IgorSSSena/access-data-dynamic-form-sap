import axios from "axios";
import { env } from "../config/env.js";

export async function getFormXml(documentId) {
  const url = `${env.dfBaseUrl}/orbeon/fr/service/persistence/crud/${env.dfAppName}/data/${documentId}/data.xml`;

  const response = await axios.get(url, {
    auth: {
      username: env.dfUser,
      password: env.dfPass
    },
    headers: {
      Accept: "application/xml"
    }
  });

  return response.data;
}