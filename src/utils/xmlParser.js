import { XMLParser } from "fast-xml-parser";

export function parseXml(xml) {
  const parser = new XMLParser({
    ignoreAttributes: false
  });

  return parser.parse(xml);
}