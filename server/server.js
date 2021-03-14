const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res)=> {
    res.send(PORT+"응답 완료했습니다.")
})


app.listen(PORT,() => {
    console.log("서버가"+PORT+"에서 잘 실행됩니다.")
})