export const ScreenContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center h-screen w-full md:w-xl md:px-0">
      {children}
    </div>
  );
};
