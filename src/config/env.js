import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  dfBaseUrl: process.env.DF_BASE_URL,
  dfAppName: process.env.DF_APP_NAME,
  dfFormName: process.env.DF_FORM_NAME,
  dfUser: process.env.DF_USER,
  dfPass: process.env.DF_PASS,
  sapEndpoint: process.env.SAP_ENDPOINT,
  sapToken: process.env.SAP_TOKEN
};