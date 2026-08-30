const fs = require("fs");

const original = fs.readFileSync("./src/data/items_rebirth.json", "utf8");
const items = JSON.parse(original);

let quoteCount = 0;
items.forEach(item => {
  if (!item.quote) item.quote = item.description;
  else quoteCount++;
});

const jsonString = JSON.stringify(items, null, 2);

console.log("Updated " + quoteCount + " items with quote field.");
fs.writeFileSync("./src/data/items_rebirth.json", jsonString);
