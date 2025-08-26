"use client";
import { siteSettings } from "@/src/staticData/siteSettings";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import { LiaTimesSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const MobileNav = ({ isOpen, toggleDrawer }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(1);
  const [openSubMenuId, setOpenSubMenuId] = useState(null);

  const handleSubMenuToggle = (id) => {
    setOpenSubMenuId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Drawer
      customIdSuffix
      open={isOpen}
      onClose={toggleDrawer}
      direction='right'
      overlayOpacity='0.6'
    >
      <div className='mobile-menu fixed top-0 w-full bg-flashWhite dark:bg-nightBlack z-999 h-full xl:hidden transition-all duration-300 [&.is-menu-open]:right-0 py-12 px-8 overflow-y-scroll'>
        <button
          className='absolute flex items-center justify-center w-9 h-9 text-sm text-white rounded-full close-menu top-4 right-4 bg-greyBlack'
          aria-label='Close Menu'
          onClick={toggleDrawer}
        >
          <LiaTimesSolid size={18} />
        </button>
        <div className='mb-6 text-lg font-medium text-black dark:text-white menu-title'>
          Menu
        </div>
        <ul className='space-y-3 font-normal main-menu'>
          {siteSettings?.headersMenu?.map((menu) => (
            <li className='relative' key={menu?.id}>
              {menu.subMenu ? (
                <>
                  <Link
                    href={
                      pathname === "/" ? menu?.selector : `/${menu?.selector}`
                    }
                    onClick={() => {
                      handleSubMenuToggle(menu.id);
                      toggleDrawer();
                      setActive(menu?.id);
                    }}
                    className='flex items-center justify-between w-full group'
                  >
                    <div className='flex items-center space-x-2'>
                      <span
                        className={`w-5 text-black dark:text-white ${
                          active === menu?.id
                            ? "text-theme dark:text-theme"
                            : ""
                        }`}
                      >
                        {menu?.Icon}
                      </span>
                      <span
                        className={`group-hover:text-theme transition-colors ${
                          active === menu?.id
                            ? "text-theme dark:text-white"
                            : ""
                        }`}
                      >
                        {menu?.title}
                      </span>
                    </div>
                    <IoChevronDown
                      className={`transition-transform duration-300 text-black dark:text-white ${
                        openSubMenuId === menu.id ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  {openSubMenuId === menu.id && (
                    <ul className='pt-3 pl-8 pr-2 space-y-4'>
                      {menu.subMenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.selector}
                            onClick={toggleDrawer}
                            className='block text-sm text-black transition-colors dark:text-white/80 hover:text-theme'
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={
                    pathname === "/" ? menu?.selector : `/${menu?.selector}`
                  }
                  className='flex items-center space-x-2 group'
                  onClick={() => {
                    toggleDrawer();
                    setActive(menu?.id);
                  }}
                >
                  <span
                    className={`w-5 text-black dark:text-white ${
                      active === menu?.id ? "text-theme dark:text-theme" : ""
                    }`}
                  >
                    {menu?.Icon}
                  </span>
                  <span
                    className={`group-hover:text-theme transition-colors ${
                      active === menu?.id ? "text-theme dark:text-white" : ""
                    }`}
                  >
                    {menu?.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <br />
        <div className='mb-4 font-medium text-black dark:text-white menu-title text-md'>
          Get in Touch
        </div>
        <div className='flex items-center space-x-4 social-icons'>
          {siteSettings?.socialMedias?.map((item, i) => (
            <Link
              href={item?.url}
              className='flex transition duration-200 hover:text-white'
              title={item?.tooltip}
              key={i}
            >
              {item?.Icon}
            </Link>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileNav;
