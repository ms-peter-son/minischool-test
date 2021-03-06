import { convertQueryParams } from "../Utils/UrlUtils";

const BASEURL = "https://api.github.com/search";
const HEADERS = { Accept: "application/vnd.github.v3+json" };

export const searchRepo = async (entity: string, queryObj: any) => {
  let url: string = `${BASEURL}/${entity}?${convertQueryParams(queryObj)}`;
  let response = await fetch(url, { method: "GET", headers: HEADERS });
  let result = await response.json();
  return result;
};
