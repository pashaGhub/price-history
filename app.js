const express = require("express");
const config = require("config");
const ipfilter = require("express-ipfilter").IpFilter;
const compression = require("compression");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(compression());

// rate limit setup
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message:
    "Too many accounts created from this IP, please try again after 15 minutes",
});

app.use(limiter);

// Whitelist the following IPs. Add your IP to the array after comma
const ips = ["::1"];

// Create the server
app.use(ipfilter(ips, { mode: "allow" }));

app.use("/api/getPriceHistory", require("./routes/getPriceHistory.routes"));

const PORT = config.get("port") || 5000;

app.listen(PORT, () => console.log(`App has been started...${PORT}`));
