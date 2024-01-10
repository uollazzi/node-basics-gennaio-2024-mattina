import { URL, URLSearchParams } from "node:url";

export default () => {
    const urlString = "https://www.example.com/cucina/2023/9?query=123&sort=ascending&nome=mario&anno=2024";
    const parsedUrl = new URL(urlString);

    console.log("host:", parsedUrl.hostname);
    console.log("path:", parsedUrl.pathname);
    console.log("query:", parsedUrl.searchParams.get("query"));
    console.log("anno:", parsedUrl.searchParams.get("anno"));

    const baseUrl = "https://www.amazon.com";
    const path = "/products";
    const queryString = { category: "electronics", page: "1", limit: "20" };
    const constructedUrl = new URL(path, baseUrl);
    constructedUrl.search = new URLSearchParams(queryString).toString();
    console.log(constructedUrl.href);

}