import db from "./lib/db"
import { stringifyResponse } from "./lib/utils"

Bun.serve({
  port: 3000,
  routes: {
    "/user": {
      GET: async () => {
        const users = await db.query.user.findMany()
        return stringifyResponse({ users })
      }
    }
  },
  fetch(request) {
    return stringifyResponse("Hello, Drizzle with Bun! 🚀. Please go to /user")
  }
})

console.log("Server is running on http://localhost:3000")
