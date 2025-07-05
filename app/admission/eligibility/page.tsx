import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, GraduationCap, Calendar } from "lucide-react"

export default function EligibilityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Eligibility Criteria</h1>

      <Card className="mb-8 border-l-4 border-l-secondary-pink">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-secondary-pink" />
            <span>B.Sc. Nursing - Eligibility Requirements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-light-black mb-4">
            Candidates seeking admission to the B.Sc. Nursing program must meet the following eligibility criteria as
            per Maharashtra University of Health Sciences (MUHS) guidelines:
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Academic Qualifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-light-black">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span>Passed 12th standard (HSC) or equivalent examination</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span>Physics, Chemistry, and Biology as compulsory subjects</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span>English as a compulsory subject</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span>Minimum 45% aggregate marks (40% for reserved categories)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-secondary-pink" />
              <span>Age Criteria</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-light-black">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span>Minimum age: 17 years as on 31st December of admission year</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span>Maximum age: 35 years (relaxation for reserved categories)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Entrance Examination</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">NEET Qualification</h3>
              <ul className="list-disc list-inside text-light-black space-y-2">
                <li>Valid NEET score is mandatory</li>
                <li>Must appear in NEET-UG examination</li>
                <li>Score valid for the admission year</li>
                <li>Counseling through centralized admission process</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">State Quota</h3>
              <ul className="list-disc list-inside text-light-black space-y-2">
                <li>Maharashtra state domicile preferred</li>
                <li>All India quota seats available</li>
                <li>NRI/Management quota seats</li>
                <li>Reservation as per government norms</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <span>Important Notes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>All certificates must be from recognized boards</li>
              <li>Gap years may require additional documentation</li>
              <li>Medical fitness certificate required</li>
              <li>Character certificate from previous institution</li>
              <li>Migration certificate (if applicable)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reservation Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-light-black">Open Category</span>
                <span className="font-semibold">50%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-black">OBC</span>
                <span className="font-semibold">27%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-black">SC</span>
                <span className="font-semibold">13%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-black">ST</span>
                <span className="font-semibold">7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-black">EWS</span>
                <span className="font-semibold">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
