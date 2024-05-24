import Header from "@/components/Header";

const layout = ({ children }: any) => {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      {children}
    </div>
  );
};

export default layout;
