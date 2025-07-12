
"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null)
  const [activeChildDropdown, setActiveChildDropdown] = useState<string | null>(null)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
        setActiveChildDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleDropdown = (title: string) => {
    setOpenDropdown(prev => (prev === title ? null : title))
    setActiveChildDropdown(null)
  }

  const toggleChildDropdown = (title: string, parentTitle: string) => {
    setOpenDropdown(parentTitle)
    setActiveChildDropdown(prev => (prev === title ? null : title))
  }

  const navigationItems = [
    { title: "Home", href: "/", items: [{ title: "Admissions are Open 🎓", href: "/#highlight" }] },
    {
      title: "About Us", href: "/about", items: [
        { title: "President's Message", href: "/about/president-message" },
        { title: "Chairman's & Secretary Message", href: "/about/chairman-message" },
        { title: "Trustee & Director's Message", href: "/about/director-message" },
        { title: "Principal's Message", href: "/about/principal-message" },
        { title: "Vision & Mission", href: "/about/vision-mission" },
      ]
    },
    {
      title: "Committees", href: "/committees", items: [
        { title: "Anti-Ragging Committee", href: "/committees/anti-ragging" },
        { title: "Internal Complaint Committee", href: "/committees/internal-complaint" },
        { title: "Curriculum Committee", href: "/committees/curriculum" },
        { title: "Ethics Committee", href: "/committees/ethics" },
        { title: "IQAC", href: "/committees/iqac" },
        { title: "SNA", href: "/committees/sna" },
        { title: "Faculty Committee", href: "/committees/faculty" },
      ]
    },
    {
      title: "Faculty", href: "/faculty", items: [
        { title: "Full-Time Teaching Faculty", href: "/faculty/full-time" },
        { title: "Visiting Faculty", href: "/faculty/visiting" },
      ]
    },
    {
      title: "Courses", href: "/courses", items: [
        { title: "B.Sc. Nursing", href: "/courses/bsc-nursing" },
      ]
    },
    {
      title: "Facilities", href: "/facilities", items: [
        { title: "College Campus", href: "/facilities/campus" },
        { title: "Classrooms", href: "/facilities/classrooms" },
        { title: "Laboratories", href: "/facilities/laboratories" },
        { title: "Pre-Clinical Lab", href: "/facilities/pre-clinical-lab" },
        { title: "Community Health Nursing Lab", href: "/facilities/community-health-lab" },
        { title: "Obstetric & Gynecology Lab", href: "/facilities/obstetric-gynecology-lab" },
        { title: "Pediatric Lab", href: "/facilities/pediatric-lab" },
        { title: "Nutrition Lab", href: "/facilities/nutrition-lab" },
        { title: "Computer Lab", href: "/facilities/computer-lab" },
        { title: "Library", href: "/facilities/library" },
        { title: "Auditorium", href: "/facilities/auditorium" },
        { title: "Multipurpose Hall", href: "/facilities/multipurpose-hall" },
        { title: "Common Room", href: "/facilities/common-room" },
        { title: "Hostel Facilities", href: "/facilities/hostel" },
      ]
    },
    {
      title: "Activities", href: "/activities", items: [
        { title: "Curricular Activities", href: "/activities/curricular" },
        { title: "Classroom Activities", href: "/activities/classroom" },
        { title: "Clinical Teaching Methods", href: "/activities/clinical-teaching" },
        { title: "Extracurricular Activities", href: "/activities/extracurricular" },
        { title: "Sports", href: "/activities/sports" },
        { title: "Projects", href: "/activities/projects" },
        { title: "Health Camps", href: "/activities/health-camps" },
        { title: "Entertainment", href: "/activities/entertainment" },
      ]
    },
    {
      title: "Admission", href: "/admission", items: [
        {
          title: "B.Sc. Nursing", href: "#", children: [
            { title: "Eligibility Criteria", href: "/admission/eligibility" },
            { title: "Documents Required", href: "/admission/documents" },
            { title: "Fee Structure", href: "/admission/fee-structure" },
          ]
        }
      ]
    },
    {
      title: "Syllabus", href: "/syllabus", items: [
        {
          title: "B.Sc. Nursing", href: "#", children: Array.from({ length: 8 }, (_, i) => ({
            title: `Semester ${i + 1}`,
            href: `/syllabus/semester-${i + 1}`
          }))
        }
      ]
    },
   {
  title: "MUHS Mandate",
  href: "/muhs-mandate",
  items: [
    {
      title: "A.Y. 2026-27",
      href: "/muhs-mandate/ay-2026-27",
      children: [
        {
          title: "Annexures Overview",
          href: "/muhs-mandate/annexures"
        },
        ...Array.from({ length: 18 }, (_, i) => {
          const romanNumerals = [
            'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
            'XI', 'XII', 'XIII', 'XIII(A)', 'XIII(B)', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII'
          ];
          return {
            title: `Annexure ${romanNumerals[i]}`,
            href: `/muhs-mandate/annexure-${i + 1}`,
          };
        })
      ]
    },
    {
      title: "A.Y. 2027-28",
      href: "/muhs-mandate/ay-2027-28"
    }
  ]
},

    { title: "Gallery", href: "/gallery", items: [] },
    { title: "Sitemap", href: "/sitemap", items: [] },
  ]

  const singleItems = [
    { title: "Placement", href: "/placement" },
    { title: "Careers", href: "/careers" },
    { title: "Alumni Members", href: "/committees/alumni-members" },
    { title: "Contact Us", href: "/contact" },
  ]

  const firstRowItems = navigationItems.slice(0, 9);
  const secondRowItems = navigationItems.slice(9);
const renderMenuItems = (items: any[], parentTitle?: string, isChild = false) => (
  <ul className={`py-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 text-sm ${isChild ? 'absolute right-full top-0 mr-2 max-h-[400px] overflow-y-auto' : ''}`}>
  {items.map((item) => (
    <li key={item.title} className="relative group">
      {item.children ? (
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 rounded cursor-pointer text-gray-800"
            onClick={(e) => {
              e.stopPropagation();
              parentTitle && toggleChildDropdown(item.title, parentTitle);
            }}
          >
            <span className="font-medium">{item.title}</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
          {activeChildDropdown === item.title && renderMenuItems(item.children, parentTitle, true)}
        </div>
      ) : (
        <Link
          href={item.href}
          className="block px-4 py-2.5 rounded text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition"
          onClick={() => {
            setOpenDropdown(null);
            setActiveChildDropdown(null);
            setIsOpen(false);
          }}
        >
          {item.title}
        </Link>
      )}
    </li>
  ))}
</ul>

);


  return (
    <header className="sticky top-0 z-50 w-full shadow-xl" ref={navbarRef} style={{ backgroundColor: '#1C1C1C' }}>
      <div className="bg-white text-black py-2 px-4 overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="whitespace-nowrap animate-marquee">
            <span className="font-medium text-sm">
              🎓 Admissions Open for 2024-25 Academic Year | Limited Seats Available | Apply Now!
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
            <Image 
              src="/images/logo-snbp.png" 
              alt="College Logo" 
              width={120} 
              height={50} 
              className="h-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex flex-col w-full ml-8" >
            {[firstRowItems, secondRowItems].map((rowItems, rowIndex) => (
              <nav key={rowIndex} className={`flex items-center justify-center flex-wrap gap-1 py-2 ${rowIndex === 1 ? '-mt-1' : ''}`}>
                {rowItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => {
                      setHoverDropdown(item.title)
                      setOpenDropdown(item.title)
                      setActiveChildDropdown(null)
                    }}
                    onMouseLeave={() => {
                      setHoverDropdown(null)
                      if (!activeChildDropdown) setOpenDropdown(null)
                    }}
                  >
                    {item.items.length > 0 ? (
                      <>
                     <button
  onClick={() => toggleDropdown(item.title)}
  className={`relative inline-flex items-center gap-1 px-4 py-2 rounded-lg text-[15px] font-semibold transition-all duration-300 ${
    openDropdown === item.title || hoverDropdown === item.title
      ? 'bg-white text-blue-800 shadow-md'
      : 'text-white hover:bg-white hover:bg-opacity-10'
  } group`}
>
  {item.title}
  <ChevronDown
    className={`w-4 h-4 transform transition-transform duration-300 ${
      openDropdown === item.title || hoverDropdown === item.title ? 'rotate-180' : ''
    }`}
  />
</button>


                       
                        {(openDropdown === item.title || hoverDropdown === item.title) && (
  <div className="absolute top-full left-0 mt-1 z-50">
    {renderMenuItems(item.items, item.title)}
  </div>
)}
                      </>
                    ) : (
                     <Link
  href={item.href}
  className="relative inline-flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-white transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-10 rounded-lg group"
>
  <span className="relative z-10">{item.title}</span>
</Link>

                    )}
                  </div>
                ))}
                {rowIndex === 1 && singleItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-[15px] font-semibold text-white hover:bg-white hover:bg-opacity-10 transition-colors"style={{marginTop:'-50px'}}>
                  
                    {item.title}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

          <div className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white hover:bg-opacity-10"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              {/* <SheetContent side="left" className="w-[85%] sm:w-[350px] overflow-y-auto bg-white text-gray-800">
              <SheetHeader>
  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
    <Image
      src="/images/logo-snbp.png"
      alt="College Logo"
      width={120}
      height={40}
      className="h-auto"
    />
  </Link>
</SheetHeader>

                <div className="flex flex-col gap-1 pt-6">
                  {navigationItems.map((item) => (
                    <div key={item.title} className="border-b border-gray-200 last:border-0">
                      {item.items.length > 0 ? (
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-base font-medium hover:text-blue-600">
                            <span>{item.title}</span>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 collapsible-chevron" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 pb-2 space-y-1">
                            {item.items.map((subItem) => (
                              subItem.children ? (
                                <div key={subItem.title} className="pt-2">
                                  <Collapsible>
                                    <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-blue-600">
                                      <span>{subItem.title}</span>
                                      <ChevronDown className="h-4 w-4 transition-transform duration-200 collapsible-chevron" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="pl-4 py-1 space-y-1 max-h-60 overflow-y-auto">
                                      {subItem.children.map((childItem) => (
                                        <Link
                                          key={childItem.title}
                                          href={childItem.href}
                                          className="block py-2 px-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {childItem.title}
                                        </Link>
                                      ))}
                                    </CollapsibleContent>
                                  </Collapsible>
                                </div>
                              ) : (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block py-2 px-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              )
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-3 text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  {singleItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block py-3 text-base font-medium text-gray-800 border-b border-gray-200 last:border-0 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent> */}
              <SheetContent side="left" className="w-[85%] sm:w-[350px] bg-white text-gray-800 px-4 pt-6 space-y-4">
  <SheetHeader className="mb-4">
    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
      <Image
        src="/images/logo-snbp.png"
        alt="College Logo"
        width={120}
        height={40}
        className="h-auto"
      />
    </Link>
  </SheetHeader>
  <div className="space-y-4">
    {navigationItems.map((item) => (
      <div key={item.title} className="border-b border-gray-200 pb-2">
        {item.items.length > 0 ? (
          <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full py-2 font-semibold text-[15px] text-gray-800 hover:text-blue-700">
              <span>{item.title}</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 pt-2 space-y-1">
              {item.items.map((subItem) =>
                subItem.children ? (
                  <Collapsible key={subItem.title}>
                    <CollapsibleTrigger className="flex justify-between items-center w-full py-2 text-sm font-medium hover:text-blue-700">
                      <span>{subItem.title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 pt-1 space-y-1">
                      {subItem.children.map((childItem) => (
                        <Link
                          key={childItem.title}
                          href={childItem.href}
                          className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          {childItem.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                )
              )}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link
            href={item.href}
            className="block py-2 text-[15px] font-semibold text-gray-800 hover:text-blue-700"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        )}
      </div>
    ))}
    {singleItems.map((item) => (
      <Link
        key={item.title}
        href={item.href}
        className="block py-2 text-[15px] font-semibold text-gray-800 hover:text-blue-700 border-b border-gray-100"
        onClick={() => setIsOpen(false)}
      >
        {item.title}
      </Link>
    ))}
  </div>
</SheetContent>

            </Sheet>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
          padding-left: 100%;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .collapsible-chevron[data-state="open"] {
          transform: rotate(180deg);
        }
      `}</style>
    </header>
  )
}
