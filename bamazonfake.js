var inquirer = require("inquirer");


inquirer.prompt([
    {
        type: "checkbox",
        name: "operator",
        message: "Select which action you would like to take: ",
        choices: ['Buy an Item', 'Exit']
    },
    {
        type: "list",
        name: "selector",
        message: "Select which product you would like to buy using its ID number: ",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    }

]).then(function (action) {
    console.log(action.operator);
    console.log(action.operator == 'Buy an Item');
    console.log(action.operator === 'Buy an Item');
    if (action.operator == 'Buy an Item') {

        console.log("==============================================");
        console.log("");
        console.log("Welcome");
        console.log("What would you like to buy today?")
        console.log("==============================================");
        console.log("Showing all products offered...\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("ID | Product | Price | Quantity")
                console.log("-------------------------------");
                console.log(" " + res[i].id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
                console.log("-------------------------------");

                console.log("==============================================");
                console.log("");
                console.log(buy.selector);
                console.log("")
                console.log("==============================================");
            } //updateProduct();
        });
    } else {

    console.log("==============================================");
    console.log("");
    console.log("Good Bye!");
    console.log("Hope you come again soon!");
    console.log("");
    console.log("==============================================");
    exit();

};
});

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;

});



function updateProduct() {
    console.log("Updating all quantities...\n");
    var query = connection.query(
        "UPDATE products SET ?",
        [
            {
                stock_quantity: 0
            },
            {
                id: ""
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteProduct();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function deleteProduct() {
    console.log("Buying Product" + res.affectedRows + "...\n");
    connection.query(
        "Deleting Products that were Purchased",
        {
            id: ""
        },
        function (err, res) {
            console.log(res.affectedRows + " products deleted!\n");
            // Call readProducts AFTER the DELETE completes
            readProducts();
            exit();
        });
}

function readProducts() {
    console.log("Showing all products offered...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ID | Product | Price | Quantity")
            console.log("-------------------------------");
            console.log(" " + res[i].id + " | " + res[i].product_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            console.log("-------------------------------");
        }

    })
};

function exit() {
    console.log("Exiting...\n");
    connection.end();
};
