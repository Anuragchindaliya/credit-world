// import { format } from "date-fns";
import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";
const __dirname = path.resolve() || process.cwd();

export const logEvent = async (message, fileName) => {
  //   const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const dateTime = `${new Date()}`;
  const logItem = `${dateTime}\t${Date.now()}\t${message}`;

  try {
    const logsFolderPath = path.join(__dirname, "logs");
    if (!fs.existsSync(logsFolderPath)) {
      await fsPromise.mkdir(logsFolderPath);
    }
    await fsPromise.appendFile(path.join(__dirname, "logs", fileName), logItem);
  } catch (err) {
    console.log(err);
  }
};

export const logger = (req, res, next) => {
  const message = `${req.method}\t${req.url}\t${req.headers.origin}\n`;
  logEvent(message, "reqLog.log");
  console.log(`${req.method} ${req.path}`);
  next();
};
