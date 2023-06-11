interface TabPanelProps<T> {
  value: T;
  tabValue: T;
  children?: JSX.Element[] | JSX.Element | null;
}

export const TabPanel = <T,>({
  value,
  tabValue,
  children,
}: TabPanelProps<T>): JSX.Element | null => {
  return <div hidden={value !== tabValue}>{children}</div>;
};
