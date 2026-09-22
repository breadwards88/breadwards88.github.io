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
    

    days.innerHTML = "You have <strong>" +daysLeft+"</strong> days left in the semester";
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
    document.getElementById("exercise2").classList.toggle("hidden");
    writeSemester();

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
    if(absentDays <1) {
        absenceComment.innerHTML = "Smart of you, every day we learn something new so it's wise not to skip.";    
    }
    else if (absentDays < 4) {
        absenceComment.innerHTML = "This is not encouraged, but atleast you aren't missing out on a large portion.";
    }
    else if (absentDays < 10) {
        absenceComment.innerHTML = "It won't be easy to get an A in this class and this definitly isn't helping.";
    }
    else if (absentDays < 15) {
        absenceComment.innerHTML = "Sure, its not like we don't have holidays why not take half the class off at that point.";
    }
    else {
        absenceComment.innerHTML = "This is not an online class, you are missing valuable learning opportunities";
    }

}

const startAbcenses = () => {
    document.getElementById("exercise1").classList.toggle("hidden");
}

const isBlank = (data, id) => {
    if(data.trim() == "") {
        document.getElementById(id).classList.remove("hidden");
        return true;
    }
    return false;
}

window.onload = () => {
    document.getElementById('exercise2-link').onclick=startSemester;
    document.getElementById('exercise1-link').onclick=startAbcenses;
    document.getElementById('absences').onchange=writeAbsences;
}