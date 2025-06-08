import AuthLayoutChild from "@/app/components/pages/auth/layout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayoutChild>{children}</AuthLayoutChild>;
}
