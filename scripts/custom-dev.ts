import chalk from "chalk";
import figlet from "figlet";
import { spawn } from "child_process";

console.clear();

console.log(
  chalk.cyan(figlet.textSync("Loka-Loka", { horizontalLayout: "default" }))
);

const now = new Date();
const time = now.toLocaleTimeString();

console.log("");
console.log(`${chalk.green("🚀  Loka-Loka Dev Server is Live!")}`);
console.log(
  `${chalk.blue("📍  Environment :")} ${chalk.white(
    process.env.NODE_ENV || "development"
  )}`
);
console.log(
  `${chalk.yellow("🌐  Localhost   :")} ${chalk.white("http://localhost:3000")}`
);
console.log(
  `${chalk.magenta("📡  Network     :")} ${chalk.white(
    "http://192.168.1.61:3000"
  )}`
);
console.log(`${chalk.gray("🕒  Started at  :")} ${chalk.white(time)}\n`);

const isWin = process.platform === "win32";
const cmd = isWin ? "npx.cmd" : "npx";

const dev = spawn(cmd, ["next", "dev", "--turbo"], {
  stdio: "inherit",
  shell: true,
});
