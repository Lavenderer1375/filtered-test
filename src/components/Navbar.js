const Navbar = () => {
  return (
    <div className="flex items-center">
      <div
        data-testid="dash"
        className="flex items-center font-semibold text-2xl"
      >
        <span>
          <ion-icon name="globe"></ion-icon>
        </span>
        <h1>Dashboard</h1>
      </div>
      <div>
        <ion-icon name="closed"></ion-icon>
      </div>
    </div>
  );
};

export default Navbar;
