const cheerio = require("cheerio");
const url = "http://rate.am/en/armenian-dram-exchange-rates/banks/non-cash";
const got = require("got");

const TABLE_ROW_IDS = [
  "69460818-02ec-456e-8d09-8eeff6494bce",
  "0fffdcc4-8e36-49f3-9863-93ad02ce6541",
  "65351947-217c-4593-9011-941b88ee7baf",
  "8e9bd4c8-6f4a-4663-ae86-b8fbaf295030",
  "ebd241ce-4a38-45a4-9bcd-c6e607079706",
  "466fe84c-197f-4174-bc97-e1dc7960edc7",
  "5ee70183-87fe-4799-802e-ef7f5e7323db",
  "f3ffb6cf-dbb6-4d43-b49c-f6d71350d7fb",
  "b5bb13d2-8a79-43a8-a538-ffd1e2e21009",
  "db08ff22-add9-45ea-a450-1fe5b1993704",
  "2119a3f1-b233-4254-a450-304a2a5bff19",
  "989ba942-a5cf-4fc2-b62e-3248c4edfbbc",
  "e1a68c2e-bc47-4f58-afd2-3b80a8465b14",
  "332c7078-97ad-4bf7-b8ee-44d85a9c88d1",
  "133240fd-5910-421d-b417-5a9cedd5f5f7",
];

const rateScrapper = () => {
  let start = Date.now();

  return got(url)
    .then((response) => {
      let resultsArr = [];
      const $ = cheerio.load(response.body);
      $("#rb > tbody > tr")
        .filter((i, el) => TABLE_ROW_IDS.includes(el.attribs.id))
        .each((i, elem) => {
          const cells = $(elem).find("td");
          resultsArr.push({
            bankName: cells.eq(1).text(),
            usd: { buy: cells.eq(5).text(), sell: cells.eq(6).text() },
            eur: { buy: cells.eq(7).text(), sell: cells.eq(8).text() },
            rub: { buy: cells.eq(9).text(), sell: cells.eq(10).text() },
            gbp: { buy: cells.eq(11).text(), sell: cells.eq(12).text() },
          });
        });
      let end = Date.now();
      console.log("time", end - start);
      return resultsArr;
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = rateScrapper;
