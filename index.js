const bip39 = require('bip39');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    mnemonic = bip39.generateMnemonic(128); 
    res.json({mnemonic: mnemonic})
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
