import HeaderApp from '../components/header-app';

export default function ChildUserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderApp />
      {children}
    </>
  );
}
