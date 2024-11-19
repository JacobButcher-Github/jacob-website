import { exec } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

type dictInfo = {
  count: number;
  time: number;
};

// Store request counts and timestamps for each IP
let requestCount: { [key: string]: dictInfo } = {};

// Throttle settings
const MAX_REQUESTS = 5;
const TIME_WINDOW = 60 * 1000;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if "x-forwarded-for" is an array, and get the first IP if it is
  const reqIp: string = Array.isArray(req.headers["x-forwarded-for"])
    ? (req.headers["x-forwarded-for"][0] as string) || "unknown"
    : (req.headers["x-forwarded-for"] as string) || "unknown";

  const now = Date.now();

  if (!requestCount[reqIp]) {
    requestCount[reqIp] = { count: 0, time: now };
  }

  const { count, time } = requestCount[reqIp];

  if (now - time > TIME_WINDOW) {
    requestCount[reqIp] = { count: 1, time: now };
  } else if (count < MAX_REQUESTS) {
    requestCount[reqIp].count++;
  } else {
    return res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
  }

  const serverIP = "108.250.31.41";

  exec(`ping -c 1 ${serverIP}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ping error: ${stderr}`);
      return res.status(500).json({ message: "Server is down" });
    }

    // If the ping succeeds, return a success message
    res.status(200).json({ message: "Server is up" });
  });
}
