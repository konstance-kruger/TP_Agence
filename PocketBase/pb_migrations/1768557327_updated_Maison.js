/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool2301871154",
    "name": "favoris",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3384004117")

  // remove field
  collection.fields.removeById("bool2301871154")

  return app.save(collection)
})
