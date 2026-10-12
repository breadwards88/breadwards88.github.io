const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult(1000);
    if (response.status == 200)
    {
        result.innerHTML = "Your Email has been Successfuly Sent";
    }
    else {
        result.innerHTML = "There was an Error and Your Email was not Sent";
    }
    result.classList("hidden").toggle();
}

const getEmailResult = async (e) => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Loading...";

    try {
        const response = await fetch ("https://api.web3forms.com/submit", {method: "POST", headers: {"Content-Type": "application/json", Accept: "application/json",},
        body: json,
    });
    return response;
    }
    catch(error) {
        console.log(error);
        document.getElementById("result").innerHTML = "There was an Error and Your Email was not Sent";
    }
};

document.getElementById("form").onsubmit = showEmailResult;