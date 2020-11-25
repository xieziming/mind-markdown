function deepTraverse(d: Array<Data>, m: string, md: string, flag: string) {
  for (let index = 0; index < d?.length; index += 1) {
    const dChild = d[index]
    if (m.length > 3 && m[0] === '#') { // #### 替换成 -
      md += `- ${dChild.name}\n`
      if (dChild.children) {
        md = deepTraverse(dChild.children, '  -', md, '  ')
      }
    } else {
      md += `${m} ${dChild.name}\n`
      if (dChild.children) {
        md = deepTraverse(dChild.children, `${flag}${m}`, md, flag)
      }
    }
  }
  return md
}

function toMarkdown(data: Data) {
  const d = Array.isArray(data) ? data : [data]
  return deepTraverse(d, '#', '', '#')
}

export default toMarkdown
