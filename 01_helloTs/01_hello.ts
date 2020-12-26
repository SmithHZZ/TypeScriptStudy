(()=>{
    function sayHi(str) {
        return "Hello"+str;
    }

    let hi = "World";
    console.log(sayHi(hi));
})()
//使用下面的命令编译ts文件
//tsc ./01_hello.ts