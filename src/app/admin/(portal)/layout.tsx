import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef2f6_0%,#f7f9fb_40%,#e8eef4_100%)] lg:flex">
      <AdminSidebar />
      <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
    </div>
  );
}
