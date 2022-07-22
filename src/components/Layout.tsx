type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => {
  return <div {...props}> {children} </div>;
};
