

const getAllEmployees = async (req,res)=>{

}

const getFormForAddEmployee = (req,res)=>{
    res.send(`<h2>Submit Form</h2>

    <form action="/employee/add" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    
    <label for="company">Company:</label><br>
    <input type="text" id="company" name="company"><br>
    
    <label for="location">Location:</label><br>
    <input type="text" id="location" name="location"><br><br>
    
    <input type="submit" value="Submit">
  </form>`)
}



module.exports = {
    getAllEmployees,
    getFormForAddEmployee
}