const testUserController = (req,res)=>{
    try{
        res.status(200).send({
            success: true,
            message: "Test user created successfully"
        })
    }catch(error){
        console.log(error);
    }

}
module.exports = { testUserController};