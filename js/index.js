let gitHubform=document.getElementById("github-form")
let searchInput=document.getElementById("search")


gitHubform.addEventListener("submit", function(e){
  e.preventDefault();
  let inputValue=searchInput.value;
  console.log(inputValue);
})