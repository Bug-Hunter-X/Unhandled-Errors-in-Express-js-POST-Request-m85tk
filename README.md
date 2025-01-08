# Unhandled Errors in Express.js POST Request
This repository demonstrates a common error in Express.js applications: insufficient error handling for POST requests.  The `bug.js` file shows a vulnerable server. The `bugSolution.js` offers a corrected version.

## Bug Description
The vulnerable server lacks proper input validation and error handling for incoming POST requests. This can lead to application crashes or data corruption if the request body is malformed, incomplete, or contains unexpected data.

## How to Reproduce
1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to start the server.
5. Send a malformed POST request to `/users` (e.g., missing required fields or with invalid data types).  Observe the server's response (or lack thereof).

## Solution
The `bugSolution.js` file demonstrates how to correctly handle potential errors, validate input, and provide informative error responses.