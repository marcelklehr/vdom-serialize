# vdom-serialize
If you want to send your [virtual dom](https://github.com/matt-esch/virtual-dom) over the wire and still be able to use it, this is for you!

## Usage

```js
var serializeVDom = require('vdom-serialize')

// ...
  stream.send(serializeVDom(render()))

// --

// on the other side, you can savely use JSON.parse

  var html = vdomToHtml(JSON.parse(stream.read()))
```

## API

### serialize(vtree):String

## How?
The problem is that virtual-dom's objects have the crucial property, their `type` in their prototype only, and if you `JSON.stringify` them you'll lose this property.
So, to fix this, vdom-serialize traverses the VTree and adds those properties explcitly (Thunks are rendered beforehand, of course). That's all.

## Drawbacks
Hooks can be serialized, sadly, since they require the hook method to be set on their prototype, not directly.

## Legal
(c) 2016 by Marcel Klehr

MIT-License