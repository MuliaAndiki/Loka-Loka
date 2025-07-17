import BlankLayout from "@/app/core/layouts/blank.layout";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <BlankLayout>{children}</BlankLayout>
    </main>
  );
}
