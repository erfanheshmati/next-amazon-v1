import UserButton from "./user-button";
import CartButton from "./cart-button";

const Menu = () => {
  return (
    <>
      <div className="flex justify-end">
        <nav className="flex gap-2">
          <CartButton />
          <UserButton />
        </nav>
      </div>
    </>
  );
};

export default Menu;
