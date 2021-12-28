const treetable = {
    view: "treetable",
    id: "treetable",
    select: "cell",
    columns: [
        {
            id: "id",
            header: "",
            width: 60
        },
        {
            id: "title",
            header: "Title",
            template: "{common.treetable()} #title#",
            editor: "text",
            width: 200
        },
        {
            id: "price",
            header: "Price",
            editor: "text",
            width: 200
        }
    ],
    url: "products.js",
    editable: true,
    rules: {
        title: webix.rules.isNotEmpty,
        price: webix.rules.isNumber
    },
    on: {
        onAfterLoad: function () {
            $$("treetable").openAll();
        }
    },
};