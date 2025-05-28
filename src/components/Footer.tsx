
import { Link } from 'react-router-dom';
import { Contact } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-petmimos-primary-dark to-petmimos-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-petmimos-primary-dark font-serif font-bold text-lg">PM</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">PetMimos</h3>
                <p className="text-xs text-gray-200">Premium Pet Care</p>
              </div>
            </div>
            <p className="text-gray-100 mb-4 max-w-md">
              Dedicados ao bem-estar e felicidade do seu animal de estimação com produtos premium e serviços especializados.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm text-white">f</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm text-white">ig</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm text-white">tw</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/products" className="text-gray-200 hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
            <div className="space-y-2 text-gray-200">
              <p>📧 contato@petmimos.com.br</p>
              <p>📞 (11) 9999-9999</p>
              <p>📍 Rua Premium, 123<br />São Paulo - SP</p>
              <p>🕒 Seg-Sáb: 8h às 18h<br />Dom: 9h às 17h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-200">
            &copy; 2024 PetMimos. Todos os direitos reservados. Feito com ❤️ para seu pet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
