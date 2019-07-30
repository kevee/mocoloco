const _ = require(`lodash`)
const path = require(`path`)

async function onCreateNode(
  { node, actions, loadNodeContent, createNodeId, createContentDigest },
  pluginOptions
) {
  function transformObject(obj, id, type) {
    const jsonNode = {
      id,
      children: [],
      parent: node.id,
      name: node.name,
      outline: obj,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    }
    createNode(jsonNode)
    createParentChildLink({ parent: node, child: jsonNode })
  }

  const { createNode, createParentChildLink } = actions

  // We only care about JSON content.
  if (node.internal.mediaType !== `application/json`) {
    return
  }

  const content = await loadNodeContent(node)

  transformObject(content, createNodeId(`${node.id} >>> Outline`), 'Outline')
}

exports.onCreateNode = onCreateNode
