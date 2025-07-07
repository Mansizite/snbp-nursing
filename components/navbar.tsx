
// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { ChevronDown, Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// const navigationItems = [
//   {
//     title: "Home",
//     href: "/",
//     items: [{ title: "Admissions are Open", href: "/admissions-open" }],
//   },
//   {
//     title: "About Us",
//     href: "/about",
//     items: [
//       { title: "Our Parent Society", href: "/about/parent-society" },
//       { title: "Principal's Message", href: "/about/principal-message" },
//       { title: "Vision & Mission", href: "/about/vision-mission" },
//       { title: "Governing Body", href: "/about/governing-body" },
//       { title: "Chairman's Message", href: "/about/chairman-message" },
//       { title: "Secretary's Message", href: "/about/secretary-message" },
//     ],
//   },
//   {
//     title: "Committees",
//     href: "/committees",
//     items: [
//       { title: "Anti-Ragging Committee", href: "/committees/anti-ragging" },
//       { title: "Internal Complaint Committee", href: "/committees/internal-complaint" },
//       { title: "Curriculum Committee", href: "/committees/curriculum" },
//       { title: "Grievance & Redressal Committee", href: "/committees/grievance-redressal" },
//       { title: "Ethics Committee", href: "/committees/ethics" },
//       { title: "IQAC", href: "/committees/iqac" },
//       { title: "SNA", href: "/committees/sna" },
//       { title: "Faculty Committee", href: "/committees/faculty" },
//     ],
//   },
//   {
//     title: "Faculty",
//     href: "/faculty",
//     items: [
//       { title: "Full-Time Teaching Faculty", href: "/faculty/full-time" },
//       { title: "Visiting Faculty", href: "/faculty/visiting" },
//     ],
//   },
//   {
//     title: "Courses",
//     href: "/courses",
//     items: [
//       { title: "B.Sc. Nursing", href: "/courses/bsc-nursing" },
//       // { title: "P.B. B.Sc. (Proposed)", href: "/courses/pb-bsc-proposed" },
//       // { title: "G.N.M. (Proposed)", href: "/courses/gnm-proposed" },
//     ],
//   },
//   {
//     title: "Facilities",
//     href: "/facilities",
//     items: [
//       { title: "College Campus", href: "/facilities/campus" },
//       { title: "Classrooms", href: "/facilities/classrooms" },
//       { title: "Laboratories", href: "/facilities/laboratories" },
//       { title: "Pre-Clinical Lab", href: "/facilities/pre-clinical-lab" },
//       { title: "Community Health Nursing Lab", href: "/facilities/community-health-lab" },
//       { title: "Obstetric & Gynecology Lab", href: "/facilities/obstetric-gynecology-lab" },
//       { title: "Pediatric Lab", href: "/facilities/pediatric-lab" },
//       { title: "Nutrition Lab", href: "/facilities/nutrition-lab" },
//       { title: "Computer Lab", href: "/facilities/computer-lab" },
//       { title: "Library", href: "/facilities/library" },
//       { title: "Auditorium", href: "/facilities/auditorium" },
//       { title: "Multipurpose Hall", href: "/facilities/multipurpose-hall" },
//       { title: "Common Room", href: "/facilities/common-room" },
//       { title: "Hostel Facilities", href: "/facilities/hostel" },
//     ],
//   },
//   {
//     title: "Activities",
//     href: "/activities",
//     items: [
//       { title: "Curricular Activities", href: "/activities/curricular" },
//       { title: "Classroom Activities", href: "/activities/classroom" },
//       { title: "Clinical Teaching Methods", href: "/activities/clinical-teaching" },
//       { title: "Extracurricular Activities", href: "/activities/extracurricular" },
//       { title: "Sports", href: "/activities/sports" },
//       { title: "Projects", href: "/activities/projects" },
//       { title: "Health Camps", href: "/activities/health-camps" },
//       { title: "Entertainment", href: "/activities/entertainment" },
//     ],
//   },
//   {
//     title: "Admission",
//     href: "/admission",
//     items: [
//       { title: "B.Sc. Nursing", href: "/admission/bsc-nursing" },
//       { title: "Eligibility Criteria", href: "/admission/eligibility" },
//       { title: "Documents Required", href: "/admission/documents" },
//       { title: "Fee Structure", href: "/admission/fee-structure" },
//     ],
//   },
//   {
//     title: "Syllabus",
//     href: "/syllabus",
//     items: [
//       { title: "B.Sc. Nursing", href: "/syllabus/bsc-nursing" },
//       ...Array.from({ length: 8 }, (_, i) => ({
//         title: `Semester ${i + 1}`,
//         href: `/syllabus/semester-${i + 1}`,
//       })),
//     ],
//   },
//   {
//     title: "MUHS Mandate",
//     href: "/muhs-mandate",
//     items: [
//       { title: "A.Y. 2026-27", href: "/muhs-mandate/ay-2026-27" },
//       { title: "A.Y. 2027-28", href: "/muhs-mandate/ay-2027-28" },
//       { title: "Annexures", href: "/muhs-mandate/annexures" },
//       ...Array.from({ length: 18 }, (_, i) => ({
//         title: `Annexure ${i + 1}`,
//         href: `/muhs-mandate/annexure-${i + 1}`,
//       })),
//       { title: "Annexure XIII (A)", href: "/muhs-mandate/annexure-13-a" },
//       { title: "Annexure XIII (B)", href: "/muhs-mandate/annexure-13-b" },
//     ],
//   },
//   { title: "Gallery", href: "/gallery", items: [] },
//   { title: "Sitemap", href: "/sitemap", items: [] },
// ]

// const singleItems = [
//   { title: "Placement", href: "/placement" },
//   { title: "Careers", href: "/careers" },
//   { title: "Alumni Members", href: "/committees/alumni-members" },
//   { title: "Contact Us", href: "/contact" },
// ]

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white shadow-md">
//       <div className="container flex h-16 items-center justify-between px-4">
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="relative h-10 w-28">
//             <Image
//               src="/logo-image.png"
//               alt="Logo"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-2 ml-6">
        
// <NavigationMenu>
//   <NavigationMenuList
//     className="flex items-center gap-0.5 text-[13px] font-medium whitespace-nowrap"
//     style={{
//       flexWrap: "nowrap",
//       justifyContent: "space-between",
//       maxWidth: "calc(100vw - 160px)", 
      
//       marginRight:'80px'
//     }}
//   >
//     {navigationItems.map((item) => (
//       <NavigationMenuItem key={item.title} className="relative">
//         {item.items.length > 0 ? (
//           <>
//             <NavigationMenuTrigger className="text-[12px] px-1.5 py-1 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors">
//               {item.title}
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <div className="grid w-[250px] gap-0 p-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
//                 {item.items.map((subItem) => (
//                   <NavigationMenuLink key={subItem.title} asChild>
//                     <Link
//                       href={subItem.href}
//                       className="block text-xs p-2 rounded hover:bg-blue-50 hover:text-blue-600"
//                     >
//                       {subItem.title}
//                     </Link>
//                   </NavigationMenuLink>
//                 ))}
//               </div>
//             </NavigationMenuContent>
//           </>
//         ) : (
//           <NavigationMenuLink asChild>
//             <Link
//               href={item.href}
//               className="px-1.5 py-1 text-[12px] rounded hover:bg-blue-50 hover:text-blue-600"
//             >
//               {item.title}
//             </Link>
//           </NavigationMenuLink>
//         )}
//       </NavigationMenuItem>
//     ))}

//     {singleItems.map((item) => (
//       <NavigationMenuItem key={item.title}>
//         <NavigationMenuLink asChild>
//           <Link
//             href={item.href}
//             className="px-1.5 py-1 text-[12px] rounded hover:bg-blue-50 hover:text-blue-600"
//           >
//             {item.title}
//           </Link>
//         </NavigationMenuLink>
//       </NavigationMenuItem>
//     ))}
//   </NavigationMenuList>
// </NavigationMenu>


//         </div>

//         {/* Mobile Navigation */}
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Button variant="ghost" className="lg:hidden" size="icon">
//               {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
//             <nav className="flex flex-col space-y-3 mt-4">
//               <div className="flex items-center space-x-3 pb-4 border-b">
//                 <div className="relative h-10 w-28">
//                   <Image
//               src="/logo-image.png"
//               alt="Logo"
//               fill
//               className="object-contain"
//             />
//                 </div>
               
//               </div>

//               {navigationItems.map((item) => (
//                 <Collapsible key={item.title}>
//                   <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-gray-700 hover:text-blue-600">
//                     {item.title}
//                     {item.items.length > 0 && <ChevronDown className="h-4 w-4" />}
//                   </CollapsibleTrigger>
//                   {item.items.length > 0 && (
//                     <CollapsibleContent className="space-y-1 pl-4 border-l-2 border-blue-100">
//                       {item.items.map((subItem) => (
//                         <Link
//                           key={subItem.title}
//                           href={subItem.href}
//                           className="block py-1.5 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {subItem.title}
//                         </Link>
//                       ))}
//                     </CollapsibleContent>
//                   )}
//                 </Collapsible>
//               ))}
//               {singleItems.map((item) => (
//                 <Link
//                   key={item.title}
//                   href={item.href}
//                   className="py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </nav>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const navigationItems = [
  {
    title: "Home",
    href: "/",
    items: [{ title: "Admissions are Open", href: "/admissions-open" }],
  },
  {
    title: "About Us",
    href: "/about",
    items: [
      { title: "Our Parent Society", href: "/about/parent-society" },
      { title: "Principal's Message", href: "/about/principal-message" },
      { title: "Vision & Mission", href: "/about/vision-mission" },
      { title: "Governing Body", href: "/about/governing-body" },
      { title: "Chairman's Message", href: "/about/chairman-message" },
      { title: "Secretary's Message", href: "/about/secretary-message" },
    ],
  },
  {
    title: "Committees",
    href: "/committees",
    items: [
      { title: "Anti-Ragging Committee", href: "/committees/anti-ragging" },
      { title: "Internal Complaint Committee", href: "/committees/internal-complaint" },
      { title: "Curriculum Committee", href: "/committees/curriculum" },
      { title: "Grievance & Redressal Committee", href: "/committees/grievance-redressal" },
      { title: "Ethics Committee", href: "/committees/ethics" },
      { title: "IQAC", href: "/committees/iqac" },
      { title: "SNA", href: "/committees/sna" },
      { title: "Faculty Committee", href: "/committees/faculty" },
    ],
  },
  {
    title: "Faculty",
    href: "/faculty",
    items: [
      { title: "Full-Time Teaching Faculty", href: "/faculty/full-time" },
      { title: "Visiting Faculty", href: "/faculty/visiting" },
    ],
  },
  {
    title: "Courses",
    href: "/courses",
    items: [
      { title: "B.Sc. Nursing", href: "/courses/bsc-nursing" },
      // { title: "P.B. B.Sc. (Proposed)", href: "/courses/pb-bsc-proposed" },
      // { title: "G.N.M. (Proposed)", href: "/courses/gnm-proposed" },
    ],
  },
  {
    title: "Facilities",
    href: "/facilities",
    items: [
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
    ],
  },
  {
    title: "Activities",
    href: "/activities",
    items: [
      { title: "Curricular Activities", href: "/activities/curricular" },
      { title: "Classroom Activities", href: "/activities/classroom" },
      { title: "Clinical Teaching Methods", href: "/activities/clinical-teaching" },
      { title: "Extracurricular Activities", href: "/activities/extracurricular" },
      { title: "Sports", href: "/activities/sports" },
      { title: "Projects", href: "/activities/projects" },
      { title: "Health Camps", href: "/activities/health-camps" },
      { title: "Entertainment", href: "/activities/entertainment" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    items: [
      { title: "B.Sc. Nursing", href: "/admission/bsc-nursing" },
      { title: "Eligibility Criteria", href: "/admission/eligibility" },
      { title: "Documents Required", href: "/admission/documents" },
      { title: "Fee Structure", href: "/admission/fee-structure" },
    ],
  },
  {
    title: "Syllabus",
    href: "/syllabus",
    items: [
      { title: "B.Sc. Nursing", href: "/syllabus/bsc-nursing" },
      ...Array.from({ length: 8 }, (_, i) => ({
        title: `Semester ${i + 1}`,
        href: `/syllabus/semester-${i + 1}`,
      })),
    ],
  },
  {
    title: "MUHS Mandate",
    href: "/muhs-mandate",
    items: [
      { title: "A.Y. 2026-27", href: "/muhs-mandate/ay-2026-27" },
      { title: "A.Y. 2027-28", href: "/muhs-mandate/ay-2027-28" },
      { title: "Annexures", href: "/muhs-mandate/annexures" },
      ...Array.from({ length: 18 }, (_, i) => ({
        title: `Annexure ${i + 1}`,
        href: `/muhs-mandate/annexure-${i + 1}`,
      })),
      { title: "Annexure XIII (A)", href: "/muhs-mandate/annexure-13-a" },
      { title: "Annexure XIII (B)", href: "/muhs-mandate/annexure-13-b" },
    ],
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
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (title: string) => {
    setOpenDropdown(prev => (prev === title ? null : title))
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-28">
            <Image src="/logo-image.png" alt="Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 ml-6 relative">
          <nav className="flex items-center gap-0 text-xs ">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {item.title}
                  {item.items.length > 0 && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Dropdown */}
                <div
  className={`absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto transition-all duration-300 transform ${
    openDropdown === item.title ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
  }`}
>

                    <ul className="p-2 space-y-1 text-xs">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem.href}
                            className="block p-2 rounded hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                

              </div>
            ))}

            {singleItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden" size="icon">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
            <nav className="flex flex-col space-y-3 mt-4">
              <div className="flex items-center space-x-3 pb-4 border-b">
                <div className="relative h-10 w-28">
                  <Image src="/logo-image.png" alt="Logo" fill className="object-contain" />
                </div>
              </div>

              {navigationItems.map((item) => (
                <Collapsible key={item.title}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-gray-700 hover:text-blue-600">
                    {item.title}
                    {item.items.length > 0 && <ChevronDown className="h-4 w-4" />}
                  </CollapsibleTrigger>
                  {item.items.length > 0 && (
                    <CollapsibleContent className="space-y-1 pl-4 border-l-2 border-blue-100">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block py-1.5 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-3"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  )}
                </Collapsible>
              ))}

              {singleItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
