
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Search, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems, setIsCartOpen } = useCart();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/products' },
    { name: 'Serviços', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">PM</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-2xl gradient-text">PetMimos</h1>
              <p className="text-xs text-gray-500 -mt-1 font-sans">Premium Pet Care</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium font-sans transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-petmimos-primary border-b-2 border-petmimos-primary'
                    : 'text-gray-700 hover:text-petmimos-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:flex relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 mr-2"
                    autoFocus
                  />
                  <Button type="submit" variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <Button variant="ghost" size="icon" onClick={handleSearchClick}>
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-petmimos-primary-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-display font-medium">
                  {getTotalItems()}
                </span>
              )}
            </Button>
            <Button className="btn-primary hidden sm:block font-display text-white" onClick={handleBookingClick}>
              Agendar Consulta
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <span className={`w-5 h-0.5 bg-gray-600 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium font-sans py-2 px-4 rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-petmimos-primary bg-petmimos-secondary/30'
                      : 'text-gray-700 hover:text-petmimos-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="btn-primary mt-4 font-display text-white" onClick={handleBookingClick}>
                Agendar Consulta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
