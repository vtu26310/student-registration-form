function submitForm() {

    const studentData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        student_id: document.getElementById("S_id").value,
        phone: document.getElementById("p_num").value,
        department: document.getElementById("dept").value
    };

    fetch("http://localhost:5000/add-student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById("fomr").reset();
    })
    .catch(error => {
        console.error(error);
        alert("Error submitting form");
    });
}
