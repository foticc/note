import path from "node:path"
import fs from "node:fs"

const BASE_DIR = "/docs"

// 文件根目录
const DIR_PATH = path.resolve()
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ["index.md", ".vitepress", "node_modules", ".idea"]
// 资源文件 图片等
const ASSETS_DIR = ["assets", "img"]

/**
 * 递归遍历文件夹并生成目录结构
 * @param {string} dirPath - 需要遍历的文件夹路径
 * @param {string} baseUrl - 基础 URL，用于生成链接
 * @returns {Array} - 目录结构数组
 */
function generateStructure(dirPath, baseUrl) {
  const result: Array<any> = []

  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      if (ASSETS_DIR.includes(file)) {
        return
      }

      // 递归遍历子目录
      const items = generateStructure(filePath, path.join(baseUrl, file))
      result.push({
        text: file.charAt(0).toUpperCase() + file.slice(1),
        items:
          items.length > 0
            ? items
            : [{ text: "Index", link: `${baseUrl}/${file}/` }],
      })
    } else if (stats.isFile() && file.endsWith(".md")) {
      // 添加文件链接
      const fileName = path.basename(file, ".md")
      result.push({
        text: fileName.charAt(0).toUpperCase() + fileName.slice(1),
        link: `${baseUrl}/${fileName}`,
      })
    }
  })

  return result
}

/**
 * 生成整个目录结构
 * @param {string} rootDir - 根目录路径
 * @returns {Object} - 完整的目录结构对象
 */
export const generateSidebar = (rootDir) => {
  const structure = {}
  rootDir = path.join(DIR_PATH, rootDir)
  const files = fs.readdirSync(rootDir)

  files.forEach((file) => {
    const filePath = path.join(rootDir, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      structure[`/posts/${file}/`] = generateStructure(
        filePath,
        `/posts/${file}`
      )
    }
  })

  return structure
}
