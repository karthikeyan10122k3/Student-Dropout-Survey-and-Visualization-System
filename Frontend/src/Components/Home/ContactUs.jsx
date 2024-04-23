import Header from "./Header";


function ContactUs() {
  return (
    <>
    <Header />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="col-12 col-lg-6 col-xl-5 border border-primary p-4 rounded text-center">
          <h2 className="h1 mb-3">Contact Us</h2>
          <form >
            <div className="mb-3">
              <input
                type="text"
                className="form-control bgGray"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bgGray"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control bgGray"
                id="message"
                name="message"
                rows="5"
                placeholder="Enter Your Query"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;