#!/usr/bin/env node

import { showCommandsHelper } from "./helpers.js";

const startCLI = async () => {
  await showCommandsHelper();
};

startCLI();
