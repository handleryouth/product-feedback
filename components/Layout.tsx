export const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-lightgray py-8 min-h-full absolute w-full">
      {children}
    </div>
  );
};
