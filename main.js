const search = ()=>{
    const searchbox = document.getElementById("search-item").value.toUpperCase()
    // console.log(searchbox) 
    const storeitems = document.getElementById("product-list")
  const product = document.querySelectorAll(".product")
    const pname = document.getElementsByTagName("h2")
    for(var i = 0;i<pname.length;i++){
        var match = product[i].getElementsByTagName("h2")[0]
        if(match){
            var textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display = ""
            }
            else{
                product[i].style.display = "none"
            }
        }
    }





}