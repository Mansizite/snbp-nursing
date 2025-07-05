import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Vision & Mission</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="border-l-4 border-l-secondary-pink">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-secondary-pink" />
              <span>Our Vision</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black text-lg leading-relaxed">
              To be a premier institution in nursing education, recognized globally for producing competent,
              compassionate, and ethical nursing professionals who contribute significantly to healthcare excellence and
              community well-being.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-secondary-pink">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-secondary-pink" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black text-lg leading-relaxed">
              To provide comprehensive, evidence-based nursing education that integrates theoretical knowledge with
              practical skills, fostering critical thinking, leadership qualities, and a commitment to lifelong learning
              in healthcare professionals.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Heart className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle className="text-lg">Compassionate Care</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Instilling empathy and compassion in every aspect of patient care and professional practice.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle className="text-lg">Excellence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Maintaining the highest standards in education, research, and clinical practice.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Target className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle className="text-lg">Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Embracing new technologies and methodologies to enhance learning and patient care.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Eye className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle className="text-lg">Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Upholding ethical principles and professional standards in all our endeavors.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-center">Our Commitment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-light-black space-y-4">
            <p>
              We are committed to creating an environment that fosters academic excellence, professional growth, and
              personal development. Our institution believes in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Providing quality education that meets international standards</li>
              <li>Encouraging research and evidence-based practice</li>
              <li>Promoting community health and social responsibility</li>
              <li>Supporting diversity, inclusion, and equal opportunities</li>
              <li>Maintaining strong partnerships with healthcare institutions</li>
              <li>Continuous improvement and adaptation to healthcare needs</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
