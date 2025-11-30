process.nextTick(()=>console.log("this is process.nextTick1"));
process.nextTick(
    ()=>{
        console.log("this is process.nextTick2");
        process.nextTick(
            ()=>{
                console.log("this is process.nextTick3");
            }
        )
    }
)

