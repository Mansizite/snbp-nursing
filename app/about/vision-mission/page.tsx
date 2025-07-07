
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Target, Eye, Heart, Users, BookOpen, FlaskConical, Globe, Scale } from "lucide-react"

// export default function VisionMissionPage() {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       {/* Hero Header */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-dark-navy mb-4">
//           Our <span className="text-secondary-pink">Vision & Mission</span>
//         </h1>
//         <p className="text-lg text-medium-gray max-w-3xl mx-auto">
//           Guiding principles that shape our commitment to nursing excellence and healthcare transformation
//         </p>
//       </div>

//       {/* Vision & Mission Cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//         {/* Vision Card */}
//         <Card className="relative border-0 shadow-md hover:shadow-lg transition-all">
//           <div className="relative z-10 p-8 h-full bg-white rounded-xl">
//             <CardHeader className="px-0">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="p-3 rounded-full bg-secondary-pink/10">
//                   <Eye className="h-8 w-8 text-secondary-pink" />
//                 </div>
//                 <CardTitle className="text-2xl text-dark-navy">Our Vision</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent className="px-0">
//               <p className="text-medium-gray leading-relaxed">
//               To be a globally recognized leader in nursing education, research, and practice, advancing compassionate and evidence-based care. With a commitment to excellence, innovation, and community partnership, our School of Nursing Institute strives to empower future generations of nurses who will transform healthcare delivery and improve patient outcomes worldwide. We envision a future where our graduates lead with integrity, empathy, and clinical expertise, driving positive change in healthcare systems and positively impacting the health and well- being of individuals and communities.
//               </p>
//             </CardContent>
//           </div>
//         </Card>

//         {/* Mission Card */}
//         <Card className="relative border-0 shadow-md hover:shadow-lg transition-all">
//           <div className="relative z-10 p-8 h-full bg-white rounded-xl">
//             <CardHeader className="px-0">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="p-3 rounded-full bg-secondary-pink/10">
//                   <Target className="h-8 w-8 text-secondary-pink" />
//                 </div>
//                 <CardTitle className="text-2xl text-dark-navy">Our Mission</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent className="px-0">
//               <p className="text-medium-gray leading-relaxed mb-4">
//                At SNBP Institute of Nursing, our mission is to educate and empower future nurses who are dedicated to compassionate care, evidence-based practice, and leadership in healthcare. We are committed to fostering a learning environment that cultivates critical thinking, ethical decision-making, and lifelong learning. Through innovative curriculum, experiential learning opportunities, and interdisciplinary collaboration, we prepare our students to meet the challenges of a dynamic healthcare landscape.
//               </p>
//               <p className="text-medium-gray leading-relaxed">
//                 Our institute is dedicated to advancing nursing science through research that addresses current and emerging health issues. We strive to contribute to the body of nursing knowledge and promote best practices in patient care. With a focus on community engagement and service, we aim to improve health outcomes and reduce health disparities through partnerships with local and global communities. At SNBP Institute of Nursing, we uphold the highest standards of professionalism, integrity, and respect for diversity. We are committed to nurturing a diverse student body and faculty who reflect the populations we serve. By equipping our graduates with the knowledge, skills, and values necessary for excellence in nursing practice, we aim to make a positive impact on the health and well- being of individuals and communities.
//               </p>
//             </CardContent>
//           </div>
//         </Card>
//       </div>

//       {/* Core Values */}
      
//       {/* Full Commitment Section */}
//       <Card className="border-0 shadow-lg overflow-hidden bg-white rounded-xl">
//         <div className="md:flex">
//           <div className="md:w-1/3 bg-secondary-pink/10 p-8 flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-dark-navy mb-4">Our Complete Commitment</h2>
//             <p className="text-medium-gray">
//               The pillars that define our institutional philosophy and educational approach
//             </p>
//           </div>
//           <div className="md:w-2/3 p-8">
//             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {["Providing world-class nursing education",
//                 "Advancing research and evidence-based practice",
//                 "Promoting community health initiatives",
//                 "Championing diversity and inclusion",
//                 "Building healthcare partnerships",
//                 "Continuous curriculum innovation",
//                 "Developing leadership skills",
//                 "Fostering global perspectives"].map((item, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <div className="flex-shrink-0 mt-1">
//                     <div className="h-5 w-5 rounded-full bg-secondary-pink flex items-center justify-center">
//                       <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </div>
//                   </div>
//                   <span className="text-medium-gray text-sm">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </Card>

//       {/* Call to Action */}
//       <div className="mt-16 text-center bg-white border border-secondary-pink/30 rounded-xl p-10 shadow-sm">
//         <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-4">Join Our Nursing Community</h2>
//         <p className="text-medium-gray mb-6 max-w-2xl mx-auto">
//           Become part of an institution that's shaping the future of healthcare through excellence in nursing education
//         </p>
//         <button className="bg-pink-600  text-white px-8 py-3 rounded-full font-semibold hover:transition-colors shadow-lg">
//           Explore Programs
//         </button>
//       </div>
//     </div>
//   )
// }
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto px-4 py-16 relative overflow-hidden">
      {/* Decorative Background Gradient Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-secondary-pink/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-secondary-pink/20 rounded-full blur-3xl z-0"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark-navy leading-tight mb-4">
          Our <span className="text-secondary-pink">Vision & Mission</span>
        </h1>
        <p className="text-lg text-medium-gray max-w-3xl mx-auto">
          Guiding principles that shape our commitment to nursing excellence and healthcare transformation
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 relative z-10">
        {/* Vision Card */}
        <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
          <div className="p-10 h-full">
            <CardHeader className="px-0">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
                  <Eye className="h-8 w-8 text-secondary-pink" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark-navy">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-gray-600 text-base leading-relaxed tracking-wide">
                To be a globally recognized leader in nursing education, research, and practice, advancing compassionate and evidence-based care. With a commitment to excellence, innovation, and community partnership, our School of Nursing Institute strives to empower future generations of nurses who will transform healthcare delivery and improve patient outcomes worldwide. We envision a future where our graduates lead with integrity, empathy, and clinical expertise, driving positive change in healthcare systems and positively impacting the health and well-being of individuals and communities.
              </p>
            </CardContent>
          </div>
        </Card>

        {/* Mission Card */}
        <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
          <div className="p-10 h-full">
            <CardHeader className="px-0">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
                  <Target className="h-8 w-8 text-secondary-pink" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark-navy">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-0 space-y-4">
              <p className="text-gray-600 text-base leading-relaxed tracking-wide">
                At SNBP Institute of Nursing, our mission is to educate and empower future nurses who are dedicated to compassionate care, evidence-based practice, and leadership in healthcare. We are committed to fostering a learning environment that cultivates critical thinking, ethical decision-making, and lifelong learning. Through innovative curriculum, experiential learning opportunities, and interdisciplinary collaboration, we prepare our students to meet the challenges of a dynamic healthcare landscape.
              </p>
              <p className="text-gray-600 text-base leading-relaxed tracking-wide">
                Our institute is dedicated to advancing nursing science through research that addresses current and emerging health issues. We strive to contribute to the body of nursing knowledge and promote best practices in patient care. With a focus on community engagement and service, we aim to improve health outcomes and reduce health disparities through partnerships with local and global communities. At SNBP Institute of Nursing, we uphold the highest standards of professionalism, integrity, and respect for diversity. We are committed to nurturing a diverse student body and faculty who reflect the populations we serve. By equipping our graduates with the knowledge, skills, and values necessary for excellence in nursing practice, we aim to make a positive impact on the health and well-being of individuals and communities.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Core Commitment */}
      <Card className="border-0 shadow-xl overflow-hidden bg-white rounded-2xl relative z-10">
        <div className="md:flex">
          <div className="md:w-1/3 bg-secondary-pink/10 p-10 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-bold text-dark-navy mb-4">Our Complete Commitment</h2>
            <p className="text-gray-600">
              The pillars that define our institutional philosophy and educational approach
            </p>
          </div>
          <div className="md:w-2/3 p-10">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Providing world-class nursing education",
                "Advancing research and evidence-based practice",
                "Promoting community health initiatives",
                "Championing diversity and inclusion",
                "Building healthcare partnerships",
                "Continuous curriculum innovation",
                "Developing leadership skills",
                "Fostering global perspectives",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-secondary-pink flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <div className="mt-20 text-center bg-white border border-secondary-pink/30 rounded-2xl p-10 shadow-lg relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
          Join Our Nursing Community
        </h2>
        <p className="text-medium-gray mb-6 max-w-2xl mx-auto text-base">
          Become part of an institution that's shaping the future of healthcare through excellence in nursing education
        </p>
        <button className="bg-white hover:bg-pink-700 text-black px-8 py-3 rounded-full font-semibold shadow-md transition duration-300">
          Explore Programs
        </button>
      </div>
    </div>
  )
}
