import { exec } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

interface Dictionary<T> {
  [key: string]: T;
}

// Store request counts and timestamps for each IP
let requestCount: Dictionary<{ count: number; time: number }> = {};

// Throttle settings
const MAX_REQUESTS = 5;
const TIME_WINDOW = 60 * 1000; // 60 seconds (1 minute)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if "x-forwarded-for" is an array, and get the first IP if it is
  const reqIp: String = Array.isArray(req.headers["x-forwarded-for"])
    ? req.headers["x-forwarded-for"][0]
    : req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const now = Date.now();

  // If the IP doesn't exist in the record, initialize it
  if (!requestCount[reqIp]) {
    requestCount[reqIp] = { count: 0, time: now };
  }

  // Throttle logic
  const { count, time } = requestCount[reqIp];

  // Check if the time window has expired
  if (now - time > TIME_WINDOW) {
    // Reset the count and time if the window has expired
    requestCount[reqIp] = { count: 1, time: now };
  } else if (count < MAX_REQUESTS) {
    // Increment the count if within the limit
    requestCount[reqIp].count++;
  } else {
    // Throttle if the limit has been reached
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
