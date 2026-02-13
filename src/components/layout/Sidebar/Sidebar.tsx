import { SidebarProps, SidebarItemProps } from "./types";

export const SidebarItem = ({
  icon,
  label,
  active,
  onClick,
  className = "",
}: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium
      ${
        active
          ? "bg-blue-50 text-blue-700"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }
      ${className}`}
  >
    {icon && <span className="size-5">{icon}</span>}
    {label}
  </button>
);

export const Sidebar = ({
  children,
  isOpen = true,
  onClose,
  className = "",
}: SidebarProps) => {
  return (
    <>
      {/* Sidebar mobile */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar content */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200
          p-4 flex flex-col gap-2 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
          ${className}
          `}
      >
        <div className="flex items-center justify-between mb-6 px-2">
          <span className="text-xl font-bold text-gray-800">Menu</span>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              X
            </button>
          )}
        </div>
        <nav className="flex-1 flex flex-col gap-1">{children}</nav>
      </aside>
    </>
  );
};
