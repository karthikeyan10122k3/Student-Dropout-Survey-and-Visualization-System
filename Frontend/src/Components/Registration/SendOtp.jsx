


// function SendOtp({ setShowRegister }) {
//   const [otp, setOTP] = useState("");
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     setOTP(value);
//   };

//   const handleSubmit = () => {
//     setUser("login");
//   };

//   return (
//     <div className="registration form bg-white p-4 rounded border border-primary ">
//       <h2 className="text-center mb-4">Enter OTP</h2>
//       <p className="text-center text-muted mb-4">
//         An OTP has been sent to the entered Email.
//       </p>
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter 6-digit OTP"
//           value={otp}
//           onChange={handleInputChange}
//         />
//         {error && <div className="text-danger mt-1">{error}</div>}
//       </div>
//       <div className="text-center">
//         <button
//           className="btn btn-primary"
//           type="button"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }