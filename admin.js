const adminCategories = {
  view: "datatable",
  id: "adminCategories",
  select: true,
  hover: "myhover",
  columns: [
    { id: "id", header: "ID", width: 50, css: "header-like" },
    {
      id: "value",
      header: ["Value", { content: "textFilter" }],
      fillspace: true,
      sort: "string",
      minWidth: 200,
    },
  ],
};
let addItem = function () {
  let data = $$("admin_form").getValues();
  if (data.id) {
    collectionCategories.updateItem(data.id, data);
  } else {
    collectionCategories.add(data);
  }
};
let adminForm = {
  view: "form",
  id: "admin_form",
  rows: [
    { view: "text", name: "value", id: "category_value", label: "Category" },
    { view: "button", id: "save_ctg_btn", value: "Save", click: addItem },
    {
      view: "button",
      id: "delete_ctg_btn",
      value: "Delete",
      click: function () {
        let sel = $$("adminCategories").getSelectedId();
        if (sel) collectionCategories.remove(sel);
      },
    },
    {
      view: "button",
      id: "btn_clear_adm",
      value: "Clear",
      click: function () {
        $$("admin_form").clear();
      },
    },
    {},
  ],
  width: 400,
};
