import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SidebarLink({ href = '', text = '', classname = '', ...props }) {
  return (
    <Link href={href} className={classname} {...props}>
      <p>{text}</p>
    </Link>
  );
}

function Sidebar() {
  const inactive = 'felx gpa-1 px-2';
  const active = `${inactive} text-white bg-orange-500 py-1 px-2 rounded-l-2xl`;
  const pathname = usePathname();

  return (
    <aside className="flex flex-col pl-10 w-1/5 border text-gray-400">
      <div className="p-3">
        <p className="p-1 text-orange-500 font-bold">
          Rental<span className="underline">Company</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 font-semibold ">
        <SidebarLink
          href="/dashboard/managecars"
          text="Manage Cars"
          classname={`link ${
            pathname === '/dashboard/managecars' ? active : inactive
          }`}
          data-testid="manageCarsMenuItem"
        />
        <SidebarLink
          href="/dashboard/addcar"
          text="Add Cars"
          classname={pathname === '/dashboard/addcar' ? active : inactive}
          data-testid="addCarMenuItem"
        />
        <SidebarLink
          href="/dashboard/maintenance"
          text="Maintenance"
          classname={pathname === '/dashboard/maintenance' ? active : inactive}
          data-testid="maintenanceMenuItem"
        />
      </div>
    </aside>
  );
}

export default Sidebar;
