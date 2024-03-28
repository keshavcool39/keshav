const express=require("express");
const { Organization, Item, Pricing } = require("./bd");
const app=express();
app.use(express.json());





app.get("/",(req,res)=>{
    const zone=req.query.zone;
    const organization_id=req.query.organization_id;
    const total_distance=req.query.total_distance;
    const item_type=req.query.item_type;
     if (!zone || !organization_id || !total_distance || !item_type) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    if(total_distance<5){
        res.json({total_price:10})

    }
    if(total_distance>5 && item_type=="perishable")
    {
        let more=total_distance-5;
        let calc=1.5*more;
        let ans=calc+10;
        res.json({total_price:ans})
    }
    
    if(item_type=="non-perishable")
    {
        let more=total_distance-5;
        let calc=more;
        let ans=calc+10
        res.json({total_price:ans})
    }
})


app.listen(3000)