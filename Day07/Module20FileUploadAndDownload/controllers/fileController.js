
const filePickerForm = (req,res,next)=>{
     res.send(
        `<form class='' action='/file/uploadimage' method='post'>
     <div class=''>
     <label for='image'> Employee Image </label>
      <input type='file' name='image' id='image'></input>
     </div>
     <button class='btn' type='submit'>Upload Image</button>
  </form>`
     )
}

module.exports ={
     filePickerForm,
}