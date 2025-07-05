const express = require('express');
const app=express();
// const Middleware= require('./Middleware/middleware');
app.use(express.json());
// app.use(Middlewareware);



// let logs=[
//     {
//         stack:'backend',
//         level:'error',
//         package:'db',
//         message:'Critical database connection failure.'
//     }
// ]

// app.get('/logs',(req,res)=>{
//     res.json(logs);
// });
// app.post('/logs',(req,res)=>{
//     const newLog=
// });


let urls=[
    {
        id:1,
        url:'https://www.google.com/search?q=a+long+website+url&oq=a+long+website+url+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgIGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyCggEEAAYgAQYogQyCggFEAAYgAQYogTSAQg5NTQ0ajBqN6gCCLACAfEFqiXBfJzorlA&sourceid=chrome&ie=UTF-8',
        validity:30,
        shortcode:'abcd'
    },
    {
        id:2,
        url:'https://www.meesho.com/?srsltid=AfmBOoqg6AvDtota2_-BixFXtec79oIjsfhro3GAoJ_kxf1j0fd_PWyt',
        validity:20,
        shortcode:'meesho'   
    }
];

const shortLink=[];

app.get('/urls',(req,res)=>{
    res.json(urls);
});
app.post('/urls',(req,res)=>{
    const newUrl=req.body;
    newUrl.id=urls.length+1;
    urls.push(newUrl);
    res.json({message:'Url added successfully!',url:newUrl});
});

app.get('/shorturls/:shortcode',(req,res)=>{
    const shortcode=req.params.shortcode;
    const item=urls.find(s=> s.shortcode===shortcode);
    if(!item){
        return res.status(404).json({message:'Item is not found'});
    }
    const short='http://localhost:3000/'+shortcode;
    shortLink.push(short);
    res.json({message:'Shortend url',shortend:shortLink});

});




app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});