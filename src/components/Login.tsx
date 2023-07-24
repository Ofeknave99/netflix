import { useFormik } from "formik";
import { FunctionComponent } from "react";
import* as yup from "yup";
import { Users, findUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

 interface LoginProps {}
const Login: FunctionComponent<LoginProps> = () => {
    let navigate = useNavigate()
 let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (findUser(values)) navigate("home");
      else alert("Wrong email or password");
    },
  });
    return ( <>
    <form onSubmit={formik.handleSubmit} >
    <h3 className="display-3">LOGIN</h3>
    <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
  name="email"
  onChange={formik.handleChange}
  value={formik.values.email}
  onBlur={formik.handleBlur}
  />
  <label htmlFor="floatingInput">Email address</label>
  {formik.touched.email&&formik.errors.email&&<p className="text-danger">{formik.errors.email}</p>}
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
  name="password"
    onChange={formik.handleChange}
    value={formik.values.password}/>
  <label htmlFor="floatingPassword">Password</label>
   {formik.touched.password&&formik.errors.password&&<p className="text-danger">{formik.errors.password}</p>}
</div>
<button type="submit" className="btn btn-success mt-3" disabled={!formik.isValid || !formik.dirty}>LOGIN</button>
    </form>
    </> );
}
 
export default Login;