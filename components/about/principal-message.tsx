import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function PrincipalMessage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Principal's Message</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="w-32 h-32 bg-primary-pink rounded-full mx-auto mb-4"></div>
            <CardTitle className="text-2xl">Dr. [Principal Name]</CardTitle>
            <p className="text-light-black">Principal, Nursing College</p>
          </CardHeader>
        </Card>

        <Card>
          <CardContent className="p-8">
            <Quote className="h-8 w-8 text-secondary-pink mb-4" />
            <div className="text-light-black space-y-4 text-lg leading-relaxed">
              <p>Dear Students, Faculty, and Stakeholders,</p>
              <p>
                It gives me immense pleasure to welcome you to our esteemed nursing college. As we embark on this
                journey of healthcare education, I am reminded of the noble profession of nursing that combines
                scientific knowledge with compassionate care.
              </p>
              <p>
                Our institution stands committed to nurturing competent, ethical, and compassionate nursing
                professionals who will serve as the backbone of our healthcare system. We believe in providing holistic
                education that encompasses not just theoretical knowledge but also practical skills, critical thinking,
                and moral values.
              </p>
              <p>
                The nursing profession demands dedication, empathy, and continuous learning. Our comprehensive
                curriculum, experienced faculty, and state-of-the-art facilities are designed to prepare you for the
                challenges and rewards of this noble profession.
              </p>
              <p>
                I encourage all our students to make the most of the opportunities provided here, engage actively in
                learning, and develop the skills necessary to become healthcare leaders of tomorrow.
              </p>
              <p className="font-semibold">
                Together, let us work towards building a healthier society through excellence in nursing education.
              </p>
              <p className="text-right font-semibold mt-6">
                Warm regards,
                <br />
                Dr. [Principal Name]
                <br />
                Principal
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
