"use client";

import useMenuActive from "@/src/hooks/useMenuActive";
import { siteSettings } from "@/src/staticData/siteSettings";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoShareSocialOutline } from "react-icons/io5";

const RightNav = ({ midContainer }) => {
  const activeMenuItem = useMenuActive(
    midContainer,
    ".minfo__nav__items > li > a"
  );
  const pathname = usePathname();

  return (
    <div className='minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4'>
      <div className='flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center'>
        <Link href={siteSettings?.logo?.url}>
          <Image
            width={"0"}
            height={"0"}
            className='w-full h-auto'
            src={siteSettings?.logo?.image}
            alt={siteSettings?.logo?.alt}
          />
        </Link>
      </div>

      <div className='my-4 menu'>
        <ul className='space-y-2 text-center minfo__nav__items'>
          {siteSettings?.headersMenu?.map((menu, i) => (
            <li
              key={menu?.id}
              data-scroll-nav={i.toString()}
              className='relative group'
            >
              <Link
                href={pathname === "/" ? menu?.selector : `/${menu?.selector}`}
                className={`w-9 h-9 rounded-full flex-center ${
                  activeMenuItem === menu?.selector &&
                  "bg-white dark:bg-metalBlack"
                } group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100`}
                data-title={menu?.title}
                data-section={menu?.selector}
              >
                <span
                  className={`${
                    activeMenuItem === menu?.selector
                      ? "text-theme"
                      : "text-black dark:text-white group-hover:text-theme group"
                  }`}
                >
                  {menu?.Icon}
                </span>
              </Link>

              {menu.subMenu && (
                <ul className='absolute top-1/2 -translate-y-1/2 right-14 z-20 w-max bg-white dark:bg-metalBlack border border-platinum dark:border-metalBlack rounded-lg shadow-lg p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300'>
                  {menu.subMenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.selector}
                        className='block whitespace-nowrap text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-theme/10 dark:hover:text-theme rounded-md transition-colors'
                        data-section={subItem.selector}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className='relative share group'>
        <button
          className='w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white'
          aria-label='Share'
        >
          <IoShareSocialOutline size={18} />
        </button>

        <div className='absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1'>
          {siteSettings?.socialMedias?.map((item) => (
            <Link
              key={item?.id}
              href={item?.url}
              className='flex transition duration-200 hover:text-theme'
              title={item?.tooltip}
            >
              {item?.Icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightNav;
