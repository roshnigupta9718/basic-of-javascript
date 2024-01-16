// const user={
//     username:"roshni",
//     price:9999,
//     welcomemessage:function(){
//       console.log(  `${this.username}welcome to website`)
//     }
// }
// user.welcomemessage()
// user.username="ragini"
// user.welcomemessage()
// again practice .....................
// const user={
    // username:"sarvesh",
    // wel:function(){
        // console.log(`hello ,${this.username}`)
        // console.log(this)
    // }

// user.username="ragini"
// user.wel()
// console.log(this)
// .........this is a function we are checkimg the" this " in the function
// function chai(){
//     let username="hello roshni"
//     console.log(this.username);
// }
// chai()
// above code give the undefined
// function chai (){
    // console.log(this)
    
// }
// chai()
// this give different things kept in this
/*  .............................................      */ 
// const chaipi=function ()
// {let username="roshni",
// console.log(this.username)}
// error
function chaipi(){
    console.log(this)
}
chaipi()
// const chaipi=()=>{
//     console.log(this)
// }
// chaipi()