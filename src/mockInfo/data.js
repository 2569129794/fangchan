import Mock from "mockjs";
var fangyuan=Mock.mock({
    'list|5-8':[{
        "describe":"@cparagraph(1)",
        "area":"@cparagraph(1)",
        "address":"@city()",
        "price":"@integer(500,2000)",
        "hpicture":"@image(102X70)"
    }]
})
Mock.mock("http://www.fangwu.com/fangyuan",fangyuan);