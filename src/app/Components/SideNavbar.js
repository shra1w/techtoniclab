// components/Sidebar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const SideNavBar = ({isOpen, setIsOpen}) => {
  const [windowWidth, setWindowWidth] = useState(0);



  useEffect(() => {
    // Set window width on component mount and handle resize
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Define animation variants
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/techtonic_lab?igsh=cWJzNzJhaWlqa2p0" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61570667766428" },
  ];

  const menuLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/aboutus" },
    { name: "Courses", url: "/#courses" },
    { name: "Career", url: "/career" },
    { name: "Hire From Us", url: "/hire-from-us" },
    { name: "Contacts", url: "/connect-with-us" }
  ];

  return (
    <>
      {/* Toggle button */}
      {/* <button
        onClick={toggleSidebar}
        className="fixed top-6 right-6 z-50 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 45 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 90, y: 0 },
              closed: { rotate: 0, y: 0 }
            }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </motion.div>
        </motion.div>
      </button> */}

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 bg-opacity-50 z-40"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full bg-white z-50 shadow-xl overflow-x-hidden overflow-y-auto "
            style={{ width: windowWidth > 768 ? '600px' : '100%' }}
          >
            <div className="flex flex-col h-full pt-[7%]  ">
              {/* Social media column */}
              

              {/* Menu column */}
              <motion.div className="w-full p-8">
                <motion.h2 
                  className="text-emerald-600 text-[1.5rem] md:text-[2rem] xl:text-[3rem] mb-4"
                  variants={menuItemVariants}
                >
                  Menu
                </motion.h2>
                <nav className=' pl-10 w-full '>
                  <ul className=' w-full'>
                    {menuLinks.map((link, index) => (
                      <motion.li key={index} className="mb-2 relative group w-[90%] cursor-pointer hover:bg-emerald-300/20 py-2 duration-150" variants={menuItemVariants}>
                        <Link href={link.url} className="text-zinc-600 group-hover:text-zinc-950 text-nowrap hover:text-gray-700 text-2xl font-medium transition-colors duration-200">
                          {link.name}
                        </Link>
                        <span className=' absolute left-0 group-hover:w-[100%] w-0 -bottom-1 group-hover:opacity-100 opacity-0 duration-300 h-0 border border-emerald-600'></span>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                
                {/* Contact info */}
                <div className="mt-10">
                  <motion.h3 
                    className="text-emerald-600 text-[1.5rem] md:text-[2rem] xl:text-[3rem] mb-4"
                    variants={menuItemVariants}
                  >
                    Get in touch
                  </motion.h3>
                  <motion.div variants={menuItemVariants} className=' pl-[10%] group'>
                    <Link href="mailto:admin@techtoniccorporate.com" className="text-black hover:text-gray-700 text-lg font-medium transition-colors duration-200 block mb-6 border-b border-gray-300 group-hover:border-emerald-700 pb-2">
                    admin@techtoniccorporate.com
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants} className=' pl-[10%] group'>
                    <Link href="/connect-with-us" className="text-black hover:text-gray-700 text-lg font-medium transition-colors duration-200 block border-b border-gray-300 group-hover:border-emerald-700 pb-2">
                      Book a Free Career Consulation
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div className="w-full p-2 pl-9 border-r border-gray-100">
                <motion.h2 
                  className="text-emerald-600 text-[1.5rem] md:text-[2rem] xl:text-[3rem] mb-4"
                  variants={menuItemVariants}
                >
                  Social media
                </motion.h2>
                <nav>
                  <ul className=' flex pl-[10%] flex-col gap-2 '>
                    {socialLinks.map((link, index) => (
                      <motion.li key={index} className="mb-2" variants={menuItemVariants}>
                        <Link href={link.url} target='__blank' className="text-black hover:text-gray-700 text-lg font-medium transition-colors duration-200">
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNavBar;