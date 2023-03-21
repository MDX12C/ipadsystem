import dotenv from "dotenv";
import { transporter } from "./mail.js";

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

function mailing() {
  const numberList = [
    "356",
    "181",
    "174",
    "308",
    "494",
    "066",
    "275",
    "393",
    "109",
    "462",
    "341",
    "153",
    "328",
    "171",
    "084",
    "502",
    "383",
    "415",
    "405",
    "124",
    "272",
    "213",
    "303",
    "357",
    "056",
    "332",
    "447",
    "229",
    "489",
    "476",
    "359",
    "192",
    "382",
    "438",
    "048",
    "034",
    "125",
    "505",
    "057",
    "485",
    "014",
    "142",
    "242",
    "095",
    "067",
  ];
  dotenv.config();
  const keys = numberList.map((element) => keyGen("11s" + element));
  for (let i = 0; i < 45; i++) {
    transporter.sendMail(
      {
        from: "lazpytb@gmail.com",
        to: `11s${numberList.at(i)}@ms.mingdao.edu.tw`,
        subject: "X112 iPad Register System User Key and Usage Information",
        html: `<h1>超TM重要郵件</h1><p>這是你的金鑰 ${keys.at(
          i
        )} 務必保存或記起來，系統網址連結</p><a target="_blank" href="https://reurl.cc/gZ4rOb/">https://reurl.cc/gZ4rOb/</a>`,
      },
      (err, info) => {
        if (err) {
          console.error("Send email error: ", err);
        } else {
          console.log(info.accepted);
        }
      }
    );
  }
}

if (process.env.MODE != "PRODUCTION") {
  // mailing();
  // console.log(keyGen("11S505".toLowerCase()));
}
