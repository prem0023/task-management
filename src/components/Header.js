const Title = () => {
  return (
    <img
      className="w-10 h-10 m-5 rounded-md hover:drop-shadow-lg"
      src={
        "https://i.pinimg.com/originals/67/3d/12/673d1297dd7675c1e6f4441de565f4ca.png"
      }
      alt="logo"
    ></img>
  );
};

const Header = ({ onAddNewTodo }) => {
  return (
    <>
      <div className="flex items-center justify-between bg-purple-100 drop-shadow-lg">
        <Title />
        <ul className="flex items-center  px-2 py-1 ">
          <li className="px-2 py-1 rounded-lg hover:bg-purple-200 bg-white mr-5">
            <button onClick={onAddNewTodo}>New Todo</button>
          </li>
          <li className="px-2 py-1 rounded-lg hover:bg-purple-200 bg-white mr-5">
            <button onClick={() => console.log("Button Clicked")}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
