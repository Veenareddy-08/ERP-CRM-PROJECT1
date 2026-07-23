import { useState } from "react";

export default function Settings() {


    const [company,setCompany] = useState("Mini ERP CRM");

    const [email,setEmail] = useState("admin@gmail.com");

    const [phone,setPhone] = useState("9876543210");



    function saveSettings(){


        const settings = {

            company,
            email,
            phone

        };


        localStorage.setItem(
            "erp_settings",
            JSON.stringify(settings)
        );


        alert("Settings Saved Successfully");


    }



    return(


        <div className="form-container">


            <h2>
                Application Settings
            </h2>




            <label>
                Company Name
            </label>


            <input

            value={company}

            onChange={(e)=>
                setCompany(e.target.value)
            }

            />





            <label>
                Email
            </label>


            <input

            value={email}

            onChange={(e)=>
                setEmail(e.target.value)
            }

            />





            <label>
                Phone
            </label>


            <input

            value={phone}

            onChange={(e)=>
                setPhone(e.target.value)
            }

            />





            <button

            className="save-btn"

            onClick={saveSettings}

            >

                Save Settings

            </button>



        </div>


    );

}