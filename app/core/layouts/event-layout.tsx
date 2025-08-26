import HeaderApp from '../components/header-app';
export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderApp />
      {children}
    </>
  );
}
