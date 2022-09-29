const express = require('express');
const router = express.Router();
const Database = require('nedb');
const movie = new Database({filename: 'database/movie.db', autoload:true})


router.post('/add', async (req,res)=> {
    try
    { 
      await movie.insert(req.body);
      res.send("Data has been Added Successfully");
      console.log("Received User Data From Port:3000")
    }
    catch(Error)
    {
       res.status(500).json({message:'Server Side Error: ' + Error});
    }
})

router.get('/view', async  (req,res) => {
    try
    {   
       await movie.find({}).exec ( (err,data) => {
        if(err)
        {
          res.status(500).json({message:'Server Side Error'});
        }

        if(data!=null)
        {
          res.status(200).send(data);
        }

        else
        {
          res.status(200).json({message: ('Users Data doesnt Found!')})
        }
        })
       
    }

    catch
    {
      res.status(500).json({message:'Server Side Error'});
    }
})



router.get('/:id', async  (req,res) => {
  try
  {   
     await movie.findOne({_id: req.params.id} , (err,data) => {
      if(err)
      {
        res.status(500).json({message:'Server Side Error'});
      }

      if(data!=null)
      {
        res.status(200).send(data);
      }

      else
      {
        res.status(200).json({message: ('User Data doesnt Found!')})
      }
      })
     
  }

  catch
  {
    res.status(500).json({message:'Server Side Error'});
  }
})


router.post('/:id', async (req,res)=> {
  try
  { 
    await movie.update({_id: req.params.id}, req.body);
    res.status(200).json(req.body);
    console.log("Updated User ID Data into Database")
  }
  catch(Error)
  {
     res.status(500).json({message:'Server Side Error: ' + Error});
  }
})

router.delete('/:id', async (req,res)=> {
  try
  {
    await movie.remove({_id: req.params.id}); 
    res.status(200).json({message: `${req.params.id} Data Deleted SuccessFully`});   
  }
  catch(Error)
  {
     res.status(500).json({message:'Server Side Error: ' + Error});
  }
  
})




module.exports=router;
