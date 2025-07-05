import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function ChairmanMessagePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Chairman's Message</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="w-32 h-32 bg-primary-pink rounded-full mx-auto mb-4"></div>
            <CardTitle className="text-2xl">Dr. [Chairman Name]</CardTitle>
            <p className="text-light-black">Chairman, Governing Body</p>
          </CardHeader>
        </Card>

        <Card>
          <CardContent className="p-8">
            <Quote className="h-8 w-8 text-secondary-pink mb-4" />
            <div className="text-light-black space-y-4 text-lg leading-relaxed">
              <p>Dear Students, Faculty, and Well-wishers,</p>
              <p>
                It is with great pride and satisfaction that I address you as the Chairman of this esteemed nursing
                institution. Our college stands as a beacon of excellence in healthcare education, committed to
                nurturing the next generation of nursing professionals.
              </p>
              <p>
                The healthcare sector is evolving rapidly, and the role of nurses has become more critical than ever.
                Our institution is dedicated to preparing competent, compassionate, and confident nursing professionals
                who can meet the challenges of modern healthcare delivery.
              </p>
              <p>
                We have invested significantly in creating world-class infrastructure, recruiting experienced faculty,
                and establishing partnerships with leading healthcare institutions. Our comprehensive curriculum,
                combined with hands-on clinical training, ensures that our graduates are well-prepared for their
                professional journey.
              </p>
              <p>
                I encourage all our students to make the most of the opportunities available here. Embrace learning with
                enthusiasm, develop your skills with dedication, and always remember that nursing is not just a
                profession—it's a calling to serve humanity.
              </p>
              <p className="font-semibold">
                Together, we will continue to set new standards in nursing education and contribute to building a
                healthier society.
              </p>
              <p className="text-right font-semibold mt-6">
                Best wishes,
                <br />
                Dr. [Chairman Name]
                <br />
                Chairman, Governing Body
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
