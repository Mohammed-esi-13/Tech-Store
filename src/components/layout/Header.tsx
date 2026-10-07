import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  Zap,
} from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";

type HeaderProps = {
  onAdmin: () => void;
  onHome: () => void;
  dark: boolean;
  setDark: () => void;
};

export default function Header({
  onAdmin,
  onHome,
  dark,
  setDark,
}: HeaderProps) {
  return (
    <>
      <div className="announcement">
        <span>Free delivery in Algiers on orders over 20 000 DA</span>
        <span className="announcement-links">Warranty center · Français · DZD</span>
      </div>
      <header className="store-header">
        <button className="brand" type="button" onClick={onHome}>
          <span className="brand-mark">
            <Zap size={20} fill="currentColor" />
          </span>
          <span>NEOTEK</span>
        </button>
        <div className="global-search">
          <Search size={19} />
          <input
            aria-label="Search"
            placeholder="Search products, brands, categories..."
          />
          <kbd>⌘ K</kbd>
        </div>
        <div className="header-actions">
          <IconButton label="Change theme" onClick={setDark}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <IconButton label="Wishlist">
            <Heart size={20} />
          </IconButton>
          <span className="badged-icon">
            <IconButton label="Cart">
              <ShoppingBag size={20} />
            </IconButton>
            <i>3</i>
          </span>
          <Button variant="secondary" size="sm" onClick={onAdmin}>
            <User size={17} /> Account
          </Button>
        </div>
      </header>
      <nav className="category-nav">
        <Button variant="primary" size="sm">
          <Menu size={17} /> All categories
        </Button>
        <span>Deals</span>
        <span>Laptops</span>
        <span>Smartphones</span>
        <span>Components</span>
        <span>Gaming</span>
        <span>Networking</span>
        <span>PC Builder</span>
        <Badge tone="blue">NEW</Badge>
      </nav>
    </>
  );
}
