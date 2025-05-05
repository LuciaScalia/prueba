const Footer = () => {
    return (
      <footer className="bg-white text-black text-center py-6 mt-auto shadow-md border-t border-gray-300">
        <div className="flex justify-center gap-6 mb-4">
  
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3V9.5c0-3 1.8-4.5 4.4-4.5 1.2 0 2.4.2 2.4.2v2.6H15c-1.5 0-2 1-2 2v2h3l-.5 3h-2.5v7A10 10 0 0 0 22 12Z"/>
            </svg>
          </a>
    
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.1 3H21l-7.5 9.2L22 21h-4l-5.6-6.9L6.8 21H3l7.6-9.2L2 3h4l5.2 6.5L17.1 3Z"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5Zm0 2C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7Zm5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6-2h-2V5h2v1Z"/>
            </svg>
          </a>
        </div>
  
        <p className="text-sm">© {new Date().getFullYear()} Mi Aplicación - Todos los derechos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;