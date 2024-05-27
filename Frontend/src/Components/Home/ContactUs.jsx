import Header from "./Header";
import { useForm } from 'react-hook-form';
import axios from "axios";

function ContactUs() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
    try{
      await axios.post("http://localhost:8000/admin/contact",data)
      console.log("Email Sent Successfully!")
    }catch(error){
      console.log("Error Occured while Sending Email",error)
    }
  }

  return (
    <>
    <Header />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="col-12 col-lg-6 col-xl-5 border border-primary p-4 rounded text-center">
          <h2 className="h1 mb-3">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
              {...register('name')} 
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <input
              {...register('email', { required: true })} 
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
              {errors.email && <p className="text-danger">Email is required.</p>}
            </div>
            <div className="mb-3">
              <textarea
              {...register('message', { required: true })} 
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Enter Your Query"
              ></textarea>
              {errors.message && <p className="text-danger">Query is required.</p>}
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;