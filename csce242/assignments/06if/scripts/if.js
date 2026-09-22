const calcSemester = () => {
    const today = new Date();
    const semesterEnd = new Date(today.getFullYear(), 11, 4);
    let remainingDays = 0;
    let current = new Date(today);
    while (current <= semesterEnd){
        const day = current.getDay();
        if(day == 2 || day == 4){
            remainingDays++;
        }
        current.setDate(current.getDate()+1);
    }

    return remainingDays;
}

const writeSemester = () => {
    const days = document.getElementById("e2-text");
    const dayComment = document.getElementById("e2-comment")
    const daysLeft = calcSemester();

    days.innerHTML = "You have "+daysLeft+" days left in the semester";
    if (daysLeft < 1){
        dayComment.innerHTML = "The semester is over grades are in."
    }
    else if (daysLeft < 10){
        dayComment.innerHTML = "Deadlines are coming up, better buckle down."
    }
    else if (daysLeft < 16){
        dayComment.innerHTML = "Not much time left better work hard."
    }
    else if (daysLeft < 21){
        dayComment.innerHTML = "There's still a good chunk left of class."
    }
    else{
        dayComment.innerHTML = "Not time to start counting down yet."
    }
    

}

const startSemester = () => {
    writeSemester();
    document.getElementById("exercise1").classList.toggle("hidden");
}

const calcAbsences = () => {
    const maxAttendance = 7;
    const daysClass = 25;
    let absentDays = document.getElementById("absences").value;
    const finalPercentage = ((maxAttendance / daysClass) * absentDays).toFixed(2);
    
    return finalPercentage;
}

const writeAbsences = () => {
    const absence = document.getElementById("e1-text");
    const absenceComment = document.getElementById("e1-comment");
    const absencePercentage = calcAbsences();
    const absentDays = document.getElementById("absences").value;

    absence.innerHTML = "You will lose "+absencePercentage+"% for skipping "+ absentDays +" days.";
    absenceComment.innerHTML = "This is not an online class, you are missing valuable learning opportunities";
}

const startAbcenses = () => {
    document.getElementById("exercise2").classList.toggle("hidden");
}

const isBlank = (data, id) => {
    if(data.trim() == "") {
        document.getElementById(id).classList.remove("hidden");
        return true;
    }
    return false;
}

window.onload = () => {
    document.getElementById('exercise1-link').onclick=startSemester;
    document.getElementById('exercise2-link').onclick=startAbcenses;
    document.getElementById('absences').onchange=writeAbsences;
}