import FormColumnRegister from "../organism/FormColumnRegister";
import "../style/Register.css";

function Register(){
    return(
        <>
            <div className="row Register">
                <div className="col-3 CardRegister">
                    <FormColumnRegister/>
                </div>
            </div>
        </>
    )
}

export default Register