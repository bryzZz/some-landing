interface TabPanelProps<T> {
  value: T;
  tabValue: T;
  children?: React.ReactNode;
  className?: string;
}

export const TabPanel = <T,>({
  value,
  tabValue,
  children,
  className,
}: TabPanelProps<T>) => {
  return (
    <div className={className} hidden={value !== tabValue}>
      {children}
    </div>
  );
};
