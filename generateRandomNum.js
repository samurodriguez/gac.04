import fs from "fs/promises";

(async () => {
  await fs.writeFile("./random.txt", String(Math.random()), "utf-8");
})();
