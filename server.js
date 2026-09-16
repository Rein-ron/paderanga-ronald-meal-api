const express = require("express");

const app = express();

const PORT = 3000;

const foods = [
    {
        id: 1,
        name: "Chicken Adobo",
        price: "₱85"
    },
    {
        id: 2,
        name: "Pancit Canton",
        price: "₱50"
    },
    {
        id: 3,
        name: "Beef Tapa",
        price: "₱95"
    },
     {
        id: 4,
        name: "Burger Steak",
        price: "₱90"
    }
];

   
    app.get("/api/foods", (req, res) => {
        res.json(foods);        
    });


    app.get("/api/foods/:id", (req, res)=>{
        const id = Number(req.params.id);
        const food = foods.find(foods => 
            food.id == id
        );

        if(!food){
            return res.status(404).json({
                message:"food not found"
                });
        }

        res.json(foood);

    });

    
   app.use(express.static(__dirname));
   app.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);

   }); 



