// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "OUT_OF_OFFICE: Human has left the chat - beach mode on, tokens off. Your email is #404 in the queue. I'll reply once my sunscreen update installs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
