const fs = require("fs");
const path = require("path");

const name = (process.env.SIG_NAME || "").trim();
const linkedin = (process.env.SIG_LINKEDIN || "").trim();
const message = (process.env.SIG_MESSAGE || "").trim();
const issueNumber = Number(process.env.SIG_ISSUE);

if (!name || !linkedin) {
  console.error("Missing name or LinkedIn URL");
  process.exit(1);
}

if (!/^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/in\//i.test(linkedin)) {
  console.error(`Rejected LinkedIn URL (does not match linkedin.com/in/...): ${linkedin}`);
  process.exit(1);
}

const filePath = path.join(__dirname, "..", "..", "docs", "data", "signatories.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

if (data.some((entry) => entry.linkedin.toLowerCase() === linkedin.toLowerCase())) {
  console.log("Signatory already present, skipping");
  process.exit(0);
}

data.push({
  name,
  linkedin,
  message,
  issue: issueNumber,
  signedAt: new Date().toISOString().slice(0, 10),
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
console.log(`Added signatory: ${name}`);
