const node_for_click = document.getElementById("for_click_surname")

function find_edit() {

     document.getElementsByClassName('block4')[0].innerHTML='Bobova'

}

node_for_click.addEventListener("click",find_edit)

const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
      document.getElementsByClassName('block5')[0].innerText='Alina'
}
node_for_click_name.addEventListener("click",find_edit_name)



const node_for_click_third_name = document.getElementById("for_click_third_name")
function find_edit_third_name(){
      document.getElementsByClassName('block6')[0].innerText='Andreevna'
}
node_for_click_third_name.addEventListener("click",find_edit_third_name)