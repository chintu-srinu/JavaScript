// // task-1   You are simulating an online food ordering system like UberEats or Zomato. The process
// includes:

function orderrecived(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
             resolve("order recived")
        },1000)
       
    });
}

function preparingfood(){
     return new Promise((resolve,reject) => {
           setTimeout(()=>{
            resolve("prepared food")
        },3000)
    })
}
function packing(){
     return new Promise((resolve,reject) => {
    
        setTimeout(()=>{
        resolve("f00d packed")
    },2000)
    })
}
function assigned(){
     return new Promise((resolve,reject) => {
            setTimeout(()=>{
            resolve("assigned person")
        },2000)
    })
}
function delivery(){
     return new Promise((resolve,reject) => {
            setTimeout(()=>{
            resolve("delivery successful")
        },1000 )
    })
}
orderrecived()
.then(res=>{console.log(res)
return preparingfood()
})
.then(res=>{console.log(res)
    return packing()
})
.then(res=>{console.log(res)
    return assigned()
})
.then(res=>{console.log(res)
    return delivery()
})
.then(res=>{console.log(res)
})
.catch (err=>console.log(res))


// task-2 You are simulating a movie ticket booking system like BookMyShow. The booking process
// includes

function Selecting (){
     return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("selected seats")
        },2000)
    })
    
}
function processingPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payment in processing")
        },3000)
    })
}
function GeneratingTicket(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket is generating")
        },1000)
    })
}
function Sending(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sending a mail")
        },2000)
    })
}

Selecting()
.then(res=>{console.log(res)
    return  processingPayment()
})
.then(res=>{console.log(res)
    return  GeneratingTicket()
})
.then (res=>{console.log(res)
    return Sending()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))

// task-3 You are simulating a car servicing system. The servicing process includes
function car (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("car checking")
        },1000)
    })
}
function oil (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("oil changed")
        },2000)
    })
}
function Engine(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("engine checked")
        },3000)
    })
}
function wash (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve ("engine washed")
        },2000)
    })
}
function quality (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("quality is good")
        },1000)
    })
}
car()
.then(res=>{console.log(res)
    return oil ()
})
.then(res=>{console.log(res)
    return   Engine()
})
.then(res=>{console.log(res)
    return wash()
})
.then(res=>{console.log(res)
    return quality()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))

// task-4 Laptop Repair Service

function damage (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("damage checking")
        },3000)
    })
}
function replacing (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("replacing parts")
        },4000)
    })
}
function updating(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("updating software")
        },3000)
    })
}
function final (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve ("final testing")
        },2000)
    })
}
function Returning (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("returning to customer")
        },1000)
    })
}
damage()
.then(res=>{console.log(res)
    return replacing ()
})
.then(res=>{console.log(res)
    return   updating()
})
.then(res=>{console.log(res)
    return final()
})
.then(res=>{console.log(res)
    return Returning()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))

// task-5 Online Course Enrollment

function checking (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" checking course")
        },1000)
    })
}
function processing (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("processing payment")
        },3000)
    })
}
function generating(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("generating enrollement")
        },1000)
    })
}
function sending (){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve ("sending course")
        },2000)
    })
}
function Granting (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("granting for live")
        },1000)
    })
}
checking()
.then(res=>{console.log(res)
    return processing ()
})
.then(res=>{console.log(res)
    return   generating()
})
.then(res=>{console.log(res)
    return sending()
})
.then(res=>{console.log(res)
    return Granting()
})
.then(res=>console.log(res))
.catch(err=>console.error(err))