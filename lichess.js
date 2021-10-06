javascript:
document.body.contentEditable = true;
void 0;
let lobbySide = document.querySelector(".lobby__side");

let students = {Kemal : "100",
                Emre: "101",
                Mina: "102",
                Ihsan: "104",
                Hale: "105",
                Ayse: "106",
                Murat: "107",
                Zumra: "108",
                Melike: "109",
                Ahmet: "110"
};

function createStudentList () {
    for (const key in students) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("students");
        lobbySide.appendChild(newDiv);

        let newA = document.createElement("a");
        newA.href = `https://lichess.org/@/Brightstar${students[key]}/playing;`
        newA.innerText = `${key}`;
        newDiv.appendChild(newA);
    }
};

createStudentList();