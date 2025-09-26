// functions/fetchData.js
const { exec } = require("child_process");

exports.handler = async (event) => {
  const number = event.queryStringParameters.number;

    if (!number) {
        return {
              statusCode: 400,
                    body: JSON.stringify({ error: "Missing ?number= parameter" }),
                        };
                          }

                            return new Promise((resolve) => {
                                const curlCmd = `curl -s "https://osintx.info/API/aetherdemo.php?key=SANJ33T&type=mobile&term={number}"`;

                                    exec(curlCmd, (error, stdout, stderr) => {
                                          if (error) {
                                                  resolve({
                                                            statusCode: 500,
                                                                      body: JSON.stringify({ error: error.message }),
                                                                              });
                                                                                    } else if (stderr) {
                                                                                            resolve({
                                                                                                      statusCode: 500,
                                                                                                                body: JSON.stringify({ error: stderr }),
                                                                                                                        });
                                                                                                                              } else {
                                                                                                                                      resolve({
                                                                                                                                                statusCode: 200,
                                                                                                                                                          headers: { "Content-Type": "application/json" },
                                                                                                                                                                    body: stdout, // raw API JSON from curl
                                                                                                                                                                            });
                                                                                                                                                                                  }
                                                                                                                                                                                      });
                                                                                                                                                                                        });
                                                                                                                                                                                        };