const userList = {
    view: "editlist",
    id: "userList",
    url: "users.js",
    editable: true,
    editor: "text",
    editValue: "name",
    rules: {
        name: webix.rules.isNotEmpty
    },
    scheme: {
        $init: function (obj) {
            if (obj.age > 26) {
                obj.$css = "green"
            }
        }
    },
    template: "#name#, #age#, from #country# <span class='webix_icon wxi-close'></span>",
    select: true,
    onClick: {
        webix_icon: function (e, id) {
            this.remove(id);
            return false;
        }
    },

};

const chart = {
    view: "chart",
    id: "chart",
    type: "bar",
    value: "#age#",
    border: true,
    xAxis: {
        template: "#country#",
        title: "Country"
    },
    yAxis:{
        start:0,
end:10,
step:1
    }
    
};

const filter = {
    view: "toolbar",
    elements: [
        { view: "text", id: "list_input" },
        {
            view: "button", id: "sort_asc", css: "webix_primary", value: "Sort asc", maxWidth: 200, click: function () {
                $$("userList").sort({
                    by: "#name#",
                    dir: "asc",
                    as: "string"
                });
            }
        },
        {
            view: "button", id: "sort_desc", css: "webix_primary", value: "Sort desc", maxWidth: 200, click: function () {
                $$("userList").sort({
                    by: "#name#",
                    dir: "desc",
                    as: "string"
                });
            }
        },
        {
            view: "button", id: "add_new", css: "webix_primary", value: "Add new", maxWidth: 200, click: function () {
                let random = randomNumber(0,5);
                $$("userList").add({
                    name:newUsers[random].name,
                    age:newUsers[random].age,
                    country:newUsers[random].country
                });
            }
        }
    ],
};