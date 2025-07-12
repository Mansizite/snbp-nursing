// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { GraduationCap, Users, Award, Building } from "lucide-react"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Light Pink Background */}
//       <section className="relative bg-light-pink py-20 min-h-[700px]">
//         <div className="container mx-auto px-4">
//           {/* Main Hero Content */}
//         {/* Main Hero Content */}
// <div className="text-center mb-16">
//   {/* College Name with Line Accent */}
//  <div className="text-center mb-8">
//   <h2 className="text-xl md:text-2xl font-semibold text-accent-pink tracking-wide uppercase">
//     SNBP Nursing College - Chikhali
//   </h2>
//   <div className="mt-2 h-0.5 w-20 mx-auto bg-accent-pink rounded"></div>
// </div>


//   {/* Hero Heading */}
//   <h1 className="text-4xl md:text-6xl font-bold text-dark-navy leading-tight mb-6">
//     Excellence in <span className="text-accent-pink">Healthcare</span> Education
//   </h1>

//   {/* Subheading */}
//   <p className="text-xl text-medium-gray mb-8 max-w-3xl mx-auto">
//     Shaping the future of healthcare through comprehensive nursing education and training
//   </p>


//             {/* Admission Information */}
//             <div className="bg-white border-l-4 border-l-accent-pink p-6 rounded-lg inline-block mb-8 shadow-lg max-w-2xl">
//               <div className="flex items-center justify-center space-x-4 mb-4">
//                 <div className="text-accent-pink text-2xl">🎓</div>
//                 <h2 className="text-2xl font-bold text-dark-navy">Admissions Open 2025-26</h2>
//               </div>
              
//               <div className="mt-4 space-x-4">
//                 <Button asChild size="lg" className="bg-primary-blue hover:bg-secondary-blue">
//                   <Link href="/admission">Apply Now</Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white bg-transparent"
//                 >
//                   <Link href="/admission/eligibility">Check Eligibility</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Image Cards with Transparent Titles */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">Modern Campus</h3>
//                   <p className="text-white/90 text-sm">State-of-the-art infrastructure for quality education</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">Advanced Labs</h3>
//                   <p className="text-white/90 text-sm">Fully equipped laboratories for practical training</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">Expert Faculty</h3>
//                   <p className="text-white/90 text-sm">Experienced professionals guiding your journey</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">100% Placement</h3>
//                   <p className="text-white/90 text-sm">Guaranteed career opportunities after graduation</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Why Choose Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
//               <CardHeader>
//                 <GraduationCap className="h-12 w-12 mx-auto text-primary-blue mb-4" />
//                 <CardTitle className="text-dark-navy">Quality Education</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   Comprehensive B.Sc. Nursing program with experienced faculty and modern curriculum
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-secondary-blue">
//               <CardHeader>
//                 <Building className="h-12 w-12 mx-auto text-secondary-blue mb-4" />
//                 <CardTitle className="text-dark-navy">Modern Facilities</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   State-of-the-art laboratories, library, auditorium, and hostel facilities
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-accent-pink">
//               <CardHeader>
//                 <Users className="h-12 w-12 mx-auto text-accent-pink mb-4" />
//                 <CardTitle className="text-dark-navy">Expert Faculty</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   Dedicated full-time and visiting faculty with extensive healthcare experience
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
//               <CardHeader>
//                 <Award className="h-12 w-12 mx-auto text-primary-blue mb-4" />
//                 <CardTitle className="text-dark-navy">MUHS Affiliated</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   Affiliated with Maharashtra University of Health Sciences for recognized degrees
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       {/* <section className="py-16 bg-light-blue">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Our Courses</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="hover:shadow-xl transition-shadow">
//               <CardHeader>
//                 <CardTitle className="text-primary-blue">B.Sc. Nursing</CardTitle>
//                 <CardDescription>4-year undergraduate program</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray mb-4">
//                   Comprehensive nursing education with clinical training and theoretical knowledge
//                 </p>
//                 <Button asChild className="w-full bg-primary-blue hover:bg-secondary-blue">
//                   <Link href="/courses/bsc-nursing">Learn More</Link>
//                 </Button>
//               </CardContent>
//             </Card>

           
//           </div>
//         </div>
//       </section> */}
      


//       {/* CTA Section */}
//       <section className="py-16 bg-dark-navy text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Your Healthcare Journey?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
//             Join our nursing college and become part of the healthcare revolution. Apply now for the upcoming academic
//             year.
//           </p>
//           <div className="space-x-4">
//             <Button asChild size="lg" className="bg-accent-pink text-white hover:bg-pink-600">
//               <Link href="/admission">Apply Now</Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-white text-white hover:bg-white hover:text-dark-navy bg-transparent"
//             >
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
// 'use client'
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { GraduationCap, Users, Award, Building, ChevronLeft, ChevronRight } from "lucide-react"
// import { useState, useEffect } from "react"

// const backgroundCarouselImages = [
//   '/images/hero-image1.jpg',
//   '/images/hero-image2.jpg',
//   '/images/hero-image3.jpg',
  
// ]

// export default function HomePage() {
//   const [currentBgSlide, setCurrentBgSlide] = useState(0)

//   // Auto-rotate background carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgSlide((prev) => (prev + 1) % backgroundCarouselImages.length)
//     }, 6000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Background Carousel */}
//       <section className="relative py-20 min-h-[700px] overflow-hidden">
//         {/* Background Carousel */}
//         <div className="absolute inset-0">
//           {backgroundCarouselImages.map((image, index) => (
//             <div 
//               key={index}
//               className={`absolute inset-0 bg-cover bg-center duration-1000 `}
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           ))}
//           <div className="absolute inset-0 bg-light-pink/90"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           {/* Main Hero Content */}
//           <div className="text-center mb-16">
//             {/* College Name with Line Accent */}
//             <div className="text-center mb-8">
//               <h2 className="text-xl md:text-2xl font-semibold text-accent-pink tracking-wide uppercase">
//                 SNBP Nursing College - Chikhali
//               </h2>
//               <div className="mt-2 h-0.5 w-20 mx-auto bg-accent-pink rounded"></div>
//             </div>

//             {/* Hero Heading */}
//             <h1 className="text-4xl md:text-6xl font-bold text-dark-navy leading-tight mb-6">
//               Excellence in <span className="text-accent-pink">Healthcare</span> Education
//             </h1>

//             {/* Subheading */}
//             <p className="text-xl text-medium-gray mb-8 max-w-3xl mx-auto">
//               Shaping the future of healthcare through comprehensive nursing education and training
//             </p>

//             {/* Admission Information */}
//             <div className="bg-white border-l-4 border-l-accent-pink p-6 rounded-lg inline-block mb-8 shadow-lg max-w-2xl">
//               <div className="flex items-center justify-center space-x-4 mb-4">
//                 <div className="text-accent-pink text-2xl">🎓</div>
//                 <h2 className="text-2xl font-bold text-dark-navy">Admissions Open 2025-26</h2>
//               </div>
              
//               <div className="mt-4 space-x-4">
//                 <Button asChild size="lg" className="bg-primary-blue hover:bg-secondary-blue">
//                   <Link href="/admission">Apply Now</Link>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   size="lg"
//                   className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white bg-transparent"
//                 >
//                   <Link href="/admission/eligibility">Check Eligibility</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Image Cards with Transparent Titles - KEEPING ORIGINAL STRUCTURE */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">Modern Campus</h3>
//                   <p className="text-white/90 text-sm">State-of-the-art infrastructure for quality education</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">Advanced Labs</h3>
//                   <p className="text-white/90 text-sm">Fully equipped laboratories for practical training</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">Expert Faculty</h3>
//                   <p className="text-white/90 text-sm">Experienced professionals guiding your journey</p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-white text-xl font-bold mb-2">100% Placement</h3>
//                   <p className="text-white/90 text-sm">Guaranteed career opportunities after graduation</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Why Choose Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
//               <CardHeader>
//                 <GraduationCap className="h-12 w-12 mx-auto text-primary-blue mb-4" />
//                 <CardTitle className="text-dark-navy">Quality Education</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   Comprehensive B.Sc. Nursing program with experienced faculty and modern curriculum
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-secondary-blue">
//               <CardHeader>
//                 <Building className="h-12 w-12 mx-auto text-secondary-blue mb-4" />
//                 <CardTitle className="text-dark-navy">Modern Facilities</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   State-of-the-art laboratories, library, auditorium, and hostel facilities
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-accent-pink">
//               <CardHeader>
//                 <Users className="h-12 w-12 mx-auto text-accent-pink mb-4" />
//                 <CardTitle className="text-dark-navy">Expert Faculty</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   Dedicated full-time and visiting faculty with extensive healthcare experience
//                 </CardDescription>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
//               <CardHeader>
//                 <Award className="h-12 w-12 mx-auto text-primary-blue mb-4" />
//                 <CardTitle className="text-dark-navy">MUHS Affiliated</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-medium-gray">
//                   Affiliated with Maharashtra University of Health Sciences for recognized degrees
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-dark-navy text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Your Healthcare Journey?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
//             Join our nursing college and become part of the healthcare revolution. Apply now for the upcoming academic
//             year.
//           </p>
//           <div className="space-x-4">
//             <Button asChild size="lg" className="bg-accent-pink text-white hover:bg-pink-600">
//               <Link href="/admission">Apply Now</Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="border-white text-white hover:bg-white hover:text-dark-navy bg-transparent"
//             >
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription,
  CardHeader, CardTitle
} from "@/components/ui/card"
import {
  GraduationCap, Users, Award, Building
} from "lucide-react"

const backgroundCarouselImages = [
  '/images/hero-image1.jpg',
  '/images/hero-image2.jpg',
  '/images/hero-image3.jpg',
]

export default function HomePage() {
  const [currentBgSlide, setCurrentBgSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgSlide((prev) => (prev + 1) % backgroundCarouselImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <section className="relative py-24 min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 transition-all duration-1000">
          {backgroundCarouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentBgSlide ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Hero Content */}
          <div className="text-center mb-16 text-white">
           <div className="text-center mb-8">
  <div className="text-center mb-8">
  <p className="text-sm md:text-base text-gray-200 uppercase tracking-widest">
    Subhadra's Educational Society's
  </p>
  <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
    SNBP Institute of Nursing, Chikhali, Pune
  </h2>
  <div className="w-16 h-1 bg-accent-pink mt-4 mx-auto rounded-full" />
</div>

</div>


            {/* <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Excellence in <span className="text-accent-pink">Healthcare</span> Education
            </h2> */}

            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Shaping the future of healthcare through comprehensive nursing education and practical training.
            </p>

            <div className="bg-white/90 border-l-4 border-accent-pink p-6 rounded-lg inline-block mb-8 shadow-lg max-w-2xl">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-accent-pink text-2xl">🎓</div>
                <h2 className="text-2xl font-bold text-dark-navy">Admissions Open 2025–26</h2>
              </div>
              <div className="mt-4 space-x-4">
                <Button asChild size="lg" className="bg-primary-blue hover:bg-secondary-blue">
                  <Link href="/admission">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white"
                >
                  <Link href="/admission/eligibility">Check Eligibility</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modern Campus",
                desc: "State-of-the-art infrastructure for quality education",
                url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Advanced Labs",
                desc: "Fully equipped laboratories for practical training",
                url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Expert Faculty",
                desc: "Experienced professionals guiding your journey",
                url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "100% Placement",
                desc: "Guaranteed career opportunities after graduation",
                url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${card.url}&auto=format&fit=crop&w=2070&q=80')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
              <CardHeader>
                <GraduationCap className="h-12 w-12 mx-auto text-primary-blue mb-4" />
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive B.Sc. Nursing program with modern curriculum and dedicated faculty
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-secondary-blue">
              <CardHeader>
                <Building className="h-12 w-12 mx-auto text-secondary-blue mb-4" />
                <CardTitle>Modern Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Smart classrooms, library, labs, auditorium, and hostel
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-accent-pink">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-accent-pink mb-4" />
                <CardTitle>Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Highly qualified and experienced academic mentors from the field
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-primary-blue mb-4" />
                <CardTitle>MUHS Affiliated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Courses recognized by Maharashtra University of Health Sciences
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Healthcare Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join our institute and become a part of the next generation of nursing professionals.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-accent-pink text-white hover:bg-pink-600">
              <Link href="/admission">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark-navy bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
