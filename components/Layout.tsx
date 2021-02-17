import Header from './Header';
const Layout: React.FC = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

// 1rem == 16px

// px-1 == padding right-left 4px | 0.25rem
// px-4 == padding right-left 16px | 1rem

// mx-auto => margin right-left auto (centraliza a div)

// max-w- 3xl == max-width 768px | 48rem
// max-w- 4xl == max-width 896px | 56rem
// max-w- 5xl == max-width 1024px | 64rem

//breakpoints
// sm:
// md:
