import Link from "next/link";

const Login = () => {
  return (
    <div className=" flex min-h-screen flex-col justify-center items-center ">
      <h1 className="font-bold  ">Login Here</h1>
      <div
        className=" flex  border shadow-xl bg-white m-2 p-8 "
        style={{ height: "350px", width: "400px" }}
      >
        <form id="loginForm">
          <div className="form-group">
            <label for="name" className=" ">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 "
              required
            />
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 "
              required
            />
          </div>

          <div className="form-group">
            <label for="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 "
              required
            />
          </div>
          <Link href="/.">
            <button
              className=" flex justify-center items-center border border-black p-2 px-28 rounded-lg bg-white text-black m-6 ml-16 w-24 transition-shadow duration-700 ease-in-out delay-100 hover:shadow-lg hover:shadow-black hover:bg-black hover:text-white  "
              type="button"
              onclick="submitForm()"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;



//click on the login to go the main page and data will be saved and 