import { endpoint } from "./endpoint";

export default {
  method: "GET",
  handler: endpoint,
  url: "/ping",
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          ping: { type: "string" },
        },
      },
    },
  },
};
