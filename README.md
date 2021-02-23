## Description

This app shows history of Bitcoin Price Index as USD.<br/>
App runs on port 5000 and contains get route "/api/getPriceHistory/:startDate/:endDate".<br/>

## IPs Whitelist

Also, app contains IPs whitelist which can be extended via adding IP to the "ips" array located in app.js file. Please notice, that IP's in array MUST BE SEPARATED via comma.

## Rate Limit

App contains rate limit which can be changed in app.js file. Current setup: limit each IP to 5 requests per 15 min.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs app in the production mode.

### `npm run server`

Runs app in the development mode.
