// Q1
document.getElementById("change-text").addEventListener("click", () => {
    document.getElementById("intro").textContent = "Welcome, Azad!"
})

// Q2
document.querySelector("#change-bg").addEventListener("click", function() {
    document.querySelector("#cngBG").style.backgroundColor = "lime";
})

// Q3
document.getElementById("hide-toggle").onclick = function(){
    document.getElementById("hideMe").classList.toggle("hidden");
    document.getElementById("hide-toggle").textContent = document.getElementById("hideMe").classList.contains("hidden") ? "Show" : "Hide";
}

// Q4
document.getElementById("add-item").onclick = () => {
    let list = document.getElementById("item-list")
    let item = document.createElement("li")
    item.classList.add("list-item")
    item.textContent = "Item " + (list.children.length + 1)
    list.appendChild(item)
}

// Q5
document.getElementById("remove-item").addEventListener("click", () => {
    let list = document.getElementById("item-list")
    if (list.children.length > 0) {
        list.removeChild(list.lastChild)
        console.log("last child removed")
    } else {
        console.log("no child to remove")
    }   
})

// Q6

document.getElementById("change-image").addEventListener("click", () => {
    let img = document.getElementById("myImage")
    img.src = img.src.includes("1741160479622") ? "https://images.unsplash.com/photo-1735845928886-680a6b530e07?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : "https://images.unsplash.com/photo-1741160479622-c011b9a25325?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.placeholder = img.placeholder === "Indian Woman" ? "Vegetable Man" : "Indian Woman";
})