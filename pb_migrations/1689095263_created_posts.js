migrate((db) => {
  const collection = new Collection({
    "id": "he5gdp02v9efnv6",
    "created": "2023-07-11 17:07:43.455Z",
    "updated": "2023-07-11 17:07:43.455Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c31meckv",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("he5gdp02v9efnv6");

  return dao.deleteCollection(collection);
})
