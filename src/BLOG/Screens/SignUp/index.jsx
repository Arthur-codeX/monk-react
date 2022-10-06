const SignIn = () => {
  return (
    <div className=" p-4 flex flex-col gap-y-2">
      <div>
        <input className=" bg-slate-300"></input>
        <label>Enter Email</label>
      </div>
      <div>
        <input className="bg-slate-300"></input>
        <label>Enter Password</label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default SignIn;
