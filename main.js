import React from "react"

// let heading = document.createElement("h1")
// heading.innerHTML = "hello react"

// let root =document.getElementById("root")
// root.appendChild(heading)


let heading1 = React.createElement("h1",{id:id1},"I am react")
// console.log(heading1)

let wrapper = React.createElement("div",{},
React.createElement("div",{},
React.createElement("h1",{},"I am a senior development"),
React.createElement("p",{},"i am also dev")))

let root1 = ReactDom.createRoot(document.getElementById("root1"))
root1.render(wrapper)

// [create-react-app,vite,parcel,webpack]:tools

