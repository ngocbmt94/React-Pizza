import CreateUser from '../features/users/CreateUser';
function Home() {
  return (
    <div className="text-center">
      <h1 className="my-8 uppercase text-slate-900">
        The best pizza.
        <br />
        <span className="text-teals-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
