import dotenv from "dotenv";

export const keyGen = (schoolNumber) => {
  dotenv.config();
  const globalKey = process.env.CLASS_12_KEY;
  let key = "";
  for (let i = 0; i < 6; i++) {
    key =
      key +
      String.fromCodePoint(
        (
          (schoolNumber[i].codePointAt(0) + globalKey[i].codePointAt(0)) /
          2
        ).toFixed()
      );
  }
  return key;
};

dotenv.config();
if (process.env.MODE != "PRODUCTION") {
  console.log(keyGen("11s242"));
}
