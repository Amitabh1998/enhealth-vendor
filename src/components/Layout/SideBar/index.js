import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  LogoutIcon,
  PlusIcon,
  UserCircleIcon,
  UsersIcon,
  CurrencyRupeeIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  // {
  //   name: "Staff Management",
  //   href: "/staff-management",
  //   icon: UsersIcon,
  //   current: false,
  // },
  {
    name: "Consultation",
    href: "/consultation",
    icon: CalendarDays,
    current: false,
  },
  // {
  //   name: "Order Management",
  //   href: "/order-management",
  //   icon: CalendarIcon,
  //   current: false,
  // },
  // {
  //   name: "Medicines Inventory",
  //   href: "/medicines",
  //   icon: CalendarIcon,
  //   current: false,
  // },
  // {
  //   name: "Products Inventory",
  //   href: "/products",
  //   icon: CalendarIcon,
  //   current: false,
  // },
  // {
  //   name: "Community",
  //   href: "/community",
  //   icon: CalendarIcon,
  //   current: false,
  // },
  // { name: "Analytics", href: "/analytics", icon: InboxIcon, current: false },
  // {
  //   name: "Wholesale Purchase",
  //   href: "/purchase",
  //   icon: CurrencyRupeeIcon,
  //   current: false,
  // },
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircleIcon,
    current: false,
  },
  // {
  //   name: "Reviews",
  //   href: "/reviews",
  //   icon: UserCircleIcon,
  //   current: false,
  // },
  // {
  //   name: "Support",
  //   href: "/support",
  //   icon: UserCircleIcon,
  //   current: false,
  // },
  { name: "logout", href: "/", icon: LogoutIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SideBar = () => {
  const router = useRouter();
  const [user, setUser] = useState();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("user")));
  //   console.log(
  //     "USER DATA LOCALSTORAGE ----->",
  //     JSON.parse(localStorage.getItem("user"))
  //   );
  // }, []);

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}

      <div className="flex flex-col flex-grow border-r border-gray-200 pt-16 bg-white overflow-y-auto">
        {/* <div className="flex  flex-shrink-0 px-4">
              <img
                className="h-10 w-auto"
                src="/images/logo.svg"
                alt="Workflow"
              />
            </div> */}
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => {
              if (item.name === "Wholesale Purchase") {
                if (user?.vendorType === 1) {
                  return (
                    <Link href={item.href} legacyBehavior>
                      <a
                        key={item.name}
                        onClick={item.name === "logout" ? handleLogout : null}
                        className={classNames(
                          item.href === router.pathname
                            ? "bg-bluePrimary text-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.href === router.pathname
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </Link>
                  );
                }
              } else {
                return (
                  <Link href={item.href} legacyBehavior>
                    <a
                      key={item.name}
                      onClick={item.name === "logout" ? handleLogout : null}
                      className={classNames(
                        item.href === router.pathname
                          ? "bg-bluePrimary text-white"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.href === router.pathname
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                );
              }
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
