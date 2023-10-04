// Sidebar.tsx
import Link from 'next/link';

interface SidebarLinkProps {
  // imgSrc:string;
  href: string;
  text: string;
}


function SidebarLink({ href, text }: SidebarLinkProps) {
  return (
    <Link className="flex flex-row" href={href}>
      {/* <img src={imgSrc} alt = "Ikon"></img> */}
      <p>{text}</p>
    </Link>
  );
}
function Sidebar() {
  return (
    <div className="flex flex-col pl-10 w-1/5 border bg-white">
      <div className="p-3">
        <p className="p-1 text-orange-500 font-bold">
          Rental<span className="underline">Company</span>
        </p>
      </div>
      <div className="py-2 font-semibold text-[#cbcedb]">MENU</div>
      <div className="flex flex-col gap-4 font-semibold text-[#cbcedb]">
        <SidebarLink href="/dashboard/managecars" text="Manage Cars" />
        <SidebarLink href="/dashboard/addcar" text="Add Cars" />
        <SidebarLink href="/dashboard/editcar" text="Edit Cars" />
        <SidebarLink href="/dashboard/carinformation" text="Car Information" />
        <SidebarLink href="/dashboard/maintenance" text="Maintenance" />
        <SidebarLink
          href="/dashboard/editmaintenance"
          text="Edit Maintenance"
        />
      </div>
    </div>
  );
};

export default Sidebar;
