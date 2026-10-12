import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { Heart, Moon, Search, ShoppingBag, Sun, User, Zap } from "lucide-react";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import { useCart } from "../../stores/cart";
import { useTheme } from "../../stores/theme";

/**
 * Customer header. Contains logo, search, theme toggle, wishlist,
 * cart indicator and account — and nothing else.
 * The legacy horizontal "Categories" navigation bar was removed;
 * <BottomNavigation /> is now the single primary navigation.
 */
export default function Header() {
  const navigate = useNavigate();
  const { dark, toggle } = useTheme();
  const { count } = useCart();
  const [query, setQuery] = useState("");

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const q = query.trim();
    navigate(q ? `/catalog?search=${encodeURIComponent(q)}` : "/catalog");
  };

  return (
    <>
      <div className="announcement">
        <span>Free delivery in Algiers on orders over 20 000 DA</span>
        <span className="announcement-links">Warranty center · Français · DZD</span>
      </div>
      <header className="store-header">
        <Link
          to="/"
          className="brand"
          aria-label="NEOTEK home"
          style={{ textDecoration: "none" }}
        >
          <span className="brand-mark">
            <Zap size={20} fill="currentColor" />
          </span>
          <span>NEOTEK</span>
        </Link>
        <form className="global-search" onSubmit={submitSearch} role="search">
          <Search size={19} />
          <input
            aria-label="Search"
            placeholder="Search products, brands, categories..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd>⌘ K</kbd>
        </form>
        <div className="header-actions">
          <IconButton label="Change theme" onClick={toggle}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <IconButton label="Wishlist">
            <Heart size={20} />
          </IconButton>
          <span className="badged-icon">
            <IconButton label="Cart" onClick={() => navigate("/cart")}>
              <ShoppingBag size={20} />
            </IconButton>
            {count > 0 && <i>{count > 99 ? "99+" : count}</i>}
          </span>
          <Button variant="secondary" size="sm" onClick={() => navigate("/account")}>
            <User size={17} /> Account
          </Button>
        </div>
      </header>
    </>
  );
}
