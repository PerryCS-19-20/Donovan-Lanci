/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function buildMap(elemid){
    var area = document.getElementById(elemid);
    var list = document.createElement("ul");
    var subList = document.createElement("ul");
    var projects = document.createElement("li");
    projects.textContent = "Projects";
    list.appendChild(item("Home", "index.html"));
    list.appendChild(item("About Me", "bio.html"));
    list.appendChild(item("Games","games.html"));
    subList.appendChild(item("Breakout", "breakout.html"));
    subList.appendChild(item("CSGO SIM", "CSGO.html"));
    subList.appendChild(item("TIC-TAC-TOE","tictactoe.html"));
    subList.appendChild(item("Chalkboard","chalkboard.html"));
    subList.appendChild(item("HTML FunSpace","htmltest.html"));
    subList.appendChild(item("To Do List","todolist.html"));
    subList.appendChild(item("Multiplication Table","timestable.html"));
    subList.appendChild(item("Slider Multiplication","slidertable.html"));
    list.appendChild(projects);
    list.appendChild(subList);
    area.appendChild(list);
}
function item(name,link){
    var elem = document.createElement("a");
    var li = document.createElement("li");
    elem.href = link;
    elem.textContent = name;
    li.appendChild(elem);
    return li;
}