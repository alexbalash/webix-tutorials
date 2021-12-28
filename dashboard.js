let collectionCategories = new webix.DataCollection({
  url: "categories.js",
});
const userDatatable = {
  view: "datatable",
  id: "userDatatable",
  select: true,
  url: "data.js",
  hover: "myhover",
  scheme: {
    $init: function (obj) {
      if (!obj.categoryID) obj.categoryID = randomNumber(1, 4);
    },
  },
  columns: [
    { id: "id", header: "", width: 50, css: "header-like" },
    {
      id: "title",
      header: ["Film title", { content: "textFilter" }],
      fillspace: true,
      sort: "string",
      minWidth: 400,
    },
    {
      id: "categoryID",
      header: ["Category", { content: "textFilter" }],
      sort: "string",
      collection: collectionCategories,
    },
    { id: "year", header: "Year" },
    {
      id: "votes",
      header: ["Votes", { content: "numberFilter" }],
      sort: "int",
    },
    {
      id: "rating",
      header: ["Rating", { content: "numberFilter" }],
      sort: "int",
    },
    { id: "rank", header: ["Rank", { content: "numberFilter" }], sort: "int" },
    { id: "del", template: "{common.trashIcon()}" },
  ],
  onClick: {
    "wxi-trash": function (e, id) {
      this.remove(id);
      return false;
    },
  },
};
const userForm = {
  view: "form",
  id: "user_form",
  rows: [
    { view: "text", name: "title", id: "user_title", label: "Film Title" },
    { view: "text", name: "year", id: "user_year", label: "Released" },
    { view: "text", name: "votes", id: "user_votes", label: "Votes" },
    {
      view: "richselect",
      name: "categoryID",
      id: "richselectCategory",
      label: "Category",
      options: collectionCategories,
    },
    { view: "button", id: "btn_save", value: "Save", click: saveItem },
    {
      view: "button",
      id: "btn_clear",
      value: "Clear",
      click: function () {
        $$("user_form").clear();
      },
    },
    {},
  ],
  width: 300,
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function saveItem() {
  const form = $$("user_form");
  const table = $$("userDatatable");
  const item_data = form.getValues();
  console.log(item_data);
  if (item_data.id) {
    table.updateItem(item_data.id, item_data);
  } else {
    table.add(item_data);
  }
}

const upperFilter = {
  view: "segmented",
  id: "selector",
  options: [
    { id: 1, value: "All" },
    { id: 2, value: "Old" },
    { id: 3, value: "Modern" },
    { id: 4, value: "New" },
  ],
  on: {
    onChange: function () {
      $$("userDatatable").filterByAll();
    },
  },
};
