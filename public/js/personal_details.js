
async function main(){
    const res = await fetch("/personal_info",{
        method: "GET",
    })
    const data = await res.json();
    console.log("data =", data);
    for(const key in data){
        console.log("key =", key);
        console.log("data[key] =", data[key]);
        if(key == "id" || key == "user_id" || key == "created_at" || key == "updated_at" || key == "user" || data[key] == null|| data[key] == ""){ continue }
        else{
            document.getElementById(key).value = data[key];
        }
    }
}
main();

async function personal_details() {
    console.log("personal_details called");
    const first_name = document.getElementById("first_name").value;
    const middle_name = document.getElementById("middle_name").value;
    const last_name = document.getElementById("last_name").value;
    const gender = document.getElementById("gender").value;
    const date_of_birth = document.getElementById("date_of_birth").value;
    const age = document.getElementById("age").value;
    const marital_status = document.getElementById("marital_status").value;
    let phone_no_1 = document.getElementById("phone_no_1").value;
    let phone_no_2 = document.getElementById("phone_no_2").value;
    if(phone_no_2 == ""){ phone_no_2 = null};
    const qualification = document.getElementById("qualification").value;
    const home_address_1 = document.getElementById("home_address_1").value;
    const home_address_2 = document.getElementById("home_address_2").value;
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const employment_status = document.getElementById("employment_status").value;
    const aadhar_card_no = document.getElementById("aadhar_card_no").value;
    const pan_card_no = document.getElementById("pan_card_no").value;
    const passport_no = document.getElementById("passport_no").value;

    console.log("personal_details called");
    console.log("first_name =", first_name);
    console.log("middle_name =", middle_name);
    console.log("last_name =", last_name);
    console.log("gender =", gender);
    console.log("date_of_birth =", date_of_birth);
    console.log("age =", age);
    console.log("marital_status =", marital_status);
    console.log("phone_no_1 =", phone_no_1);
    console.log("phone_no_2 =", phone_no_2);
    console.log("qualification =", qualification);
    console.log("home_address_1 =", home_address_1);
    console.log("home_address_2 =", home_address_2);
    console.log("country =", country);
    console.log("state =", state);
    console.log("city =", city);
    console.log("employment_status =", employment_status);
    console.log("aadhar_card_no =", aadhar_card_no);
    console.log("pan_card_no =", pan_card_no);
    console.log("passport_no =", passport_no);

    await fetch("/details/personal_details", {
        method: "POST",
        body: JSON.stringify({
            first_name: first_name,
            middle_name: middle_name,
            last_name: last_name,
            gender: gender,
            date_of_birth: date_of_birth,
            age: age,
            marital_status: marital_status,
            phone_no_1: phone_no_1,
            phone_no_2: phone_no_2,
            qualification: qualification,
            home_address_1: home_address_1,
            home_address_2: home_address_2,
            country: country,
            state: state,
            city: city,
            employment_status: employment_status,
            aadhar_card_no: aadhar_card_no,
            pan_card_no: pan_card_no,
            passport_no: passport_no,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}