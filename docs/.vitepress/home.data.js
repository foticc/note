import { generateSidebar } from "./siderBar.mjs"

export default {
  load() {
    return generateSidebar("/docs/posts")
  },
}
