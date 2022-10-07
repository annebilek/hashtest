import { sha256 as nobleSha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";
import sha256 from "crypto-js/sha256";

const str = "my name is peaches";
const nobleHash = nobleSha256(str);
const cryptoHash = sha256(str);

document.getElementById("app").innerHTML = `
<h1>Hello Hash Test!</h1>
<p>
  My string is <b>${str}</b>
</p>
<p>
  My hashed string according to @noble/hashes is <b>${bytesToHex(nobleHash)}</b>
</p>
<p>
  My hashed string according to crypto-js is <b>${cryptoHash}</b>
</p>
`;
