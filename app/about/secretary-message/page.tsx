import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function SecretaryMessagePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Secretary's Message</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="w-32 h-32 bg-primary-pink rounded-full mx-auto mb-4"></div>
            <CardTitle className="text-2xl">Prof. [Secretary Name]</CardTitle>
            <p className="text-light-black">Secretary, Governing Body</p>
          </CardHeader>
        </Card>

        <Card>
          <CardContent className="p-8">
            <Quote className="h-8 w-8 text-secondary-pink mb-4" />
            <div className="text-light-black space-y-4 text-lg leading-relaxed">
              <p>Dear Students and Colleagues,</p>
              <p>
                As the Secretary of this prestigious nursing college, I am delighted to share our vision and commitment
                to excellence in nursing education. Our institution has been built on the foundation of quality
                education, ethical values, and professional integrity.
              </p>
              <p>
                We understand that nursing education requires a perfect blend of theoretical knowledge and practical
                skills. Our curriculum is designed to meet the evolving needs of the healthcare industry while
                maintaining the highest academic standards set by the Maharashtra University of Health Sciences.
              </p>
              <p>
                Our faculty members are not just educators but mentors who guide students through their academic
                journey. We have created an environment that encourages critical thinking, research, and innovation in
                nursing practice.
              </p>
              <p>
                The college is equipped with modern laboratories, a well-stocked library, and clinical facilities that
                provide students with hands-on experience. We also emphasize the importance of community health and
                social responsibility through various outreach programs.
              </p>
              <p>
                I invite you to be part of our academic community where learning never stops, and excellence is not just
                a goal but a way of life.
              </p>
              <p className="text-right font-semibold mt-6">
                Warm regards,
                <br />
                Prof. [Secretary Name]
                <br />
                Secretary, Governing Body
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
