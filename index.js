module.exports = serialize

function serialize(vdom) {
  return JSON.stringify(serializeVNode(vdom))
}

function serializeVNode(vnode) {
  if('Thunk' === vnode.type) vnode = vnode.render()
  if(vnode.children) vnode.children = vnode.children.map(serializeVNode)
  vnode.type = vnode.type
  vnode.version = vnode.version
  return vnode
}