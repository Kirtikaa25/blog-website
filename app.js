const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let posts=[];
const homeStartingContent = "I woke up at 6 oclock in the morning. We had breakfast and dressed up. Today we all went to Fantasize Amusement park near Pune. We started from home at 7 oclock. As soon as we reached there, we bought our tickets and went inside. I was so excited seeing the rides. My parents and brother liked the Thunderfall ride. My favorite rides were Water Splash, Caterpillar Ride, Wave Pool and Pirate Ship. After a couple of hours, we had our lunch. In the afternoon we had the scariest ride that is the Space Gun. We got back to our home in the evening. It was a great day and I enjoyed a lot.";

const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home",{homeContent:homeStartingContent,body:posts});
   
 })
app.get("/about",(req,res)=>{
    res.render("about",{abtContent:aboutContent})
    
})

app.get("/contact",(req,res)=>{
    res.render("contact",{conContent:contactContent})
})

app.get("/compose",(req,res)=>{
    res.render("compose");
})

app.post("/compose",(req,res)=>{
    const message=
        {
          title:req.body.journal,
          content:req.body.content
        }
    
    posts.push(message);
    res.redirect("/");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
