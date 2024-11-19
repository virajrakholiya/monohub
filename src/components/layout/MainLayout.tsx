"use client";
import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { 
  IconHome, 
  IconTools, 
  IconPalette, 
  IconTypography, 
  IconPhoto, 
  IconBrandBlogger,
  IconComponents, 
  IconIcons, 
  IconBooks, 
  IconVideo,
  Icon3dCubeSphere,
  IconBrush,
  IconColorSwatch
} from "@tabler/icons-react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Oops! There's a bug.</h1>
          <p className="mb-4">Please open this website on a PC for the best experience.</p>
          <p className="text-sm text-gray-500">We're working on improving the mobile version.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
        <SidebarBody>
          <SidebarLink link={{ href: "/", label: "Home", icon: <IconHome /> }} />
          <SidebarLink link={{ href: "/pages/tools", label: "Tools", icon: <IconTools /> }} />
          <SidebarLink link={{ href: "/pages/backgraound", label: "Backgrounds", icon: <IconBrush /> }} />
          <SidebarLink link={{ href: "/pages/components", label: "Components", icon: <IconComponents /> }} />
          <SidebarLink link={{ href: "/pages/icons", label: "Icons", icon: <IconIcons /> }} />
          <SidebarLink link={{ href: "/pages/colors", label: "Colors", icon: <IconColorSwatch /> }} />
          <SidebarLink link={{ href: "/pages/inspirations", label: "Inspirations", icon: <IconPalette /> }} />
          <SidebarLink link={{ href: "/pages/typography", label: "Typography", icon: <IconTypography /> }} />
          <SidebarLink link={{ href: "/pages/illustrations", label: "Illustrations", icon: <IconBrush /> }} />
          <SidebarLink link={{ href: "/pages/blogs", label: "Blogs", icon: <IconBrandBlogger /> }} />
          <SidebarLink link={{ href: "/pages/photos", label: "Photos", icon: <IconPhoto /> }} />
          <SidebarLink link={{ href: "/pages/libraries", label: "Libraries", icon: <IconBooks /> }} />
          <SidebarLink link={{ href: "/pages/videos", label: "Videos", icon: <IconVideo /> }} />
          <SidebarLink link={{ href: "/pages/threeD", label: "3D Resources", icon: <Icon3dCubeSphere /> }} />
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
