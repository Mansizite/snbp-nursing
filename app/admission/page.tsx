import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FileText, CreditCard, CheckCircle, Calendar, Users } from "lucide-react"

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admission 2024-25</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our prestigious nursing college and embark on a rewarding career in healthcare
          </p>
          <div className="bg-white text-primary-blue px-6 py-3 rounded-lg inline-block text-lg font-semibold">
            🎓 Applications Now Open - Limited Seats Available
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-t-4 border-t-primary-blue">
              <CardHeader>
                <Users className="h-10 w-10 mx-auto text-primary-blue mb-2" />
                <CardTitle className="text-2xl">60</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Total Seats</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-secondary-blue">
              <CardHeader>
                <Calendar className="h-10 w-10 mx-auto text-secondary-blue mb-2" />
                <CardTitle className="text-2xl">4 Years</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Course Duration</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-accent-pink">
              <CardHeader>
                <GraduationCap className="h-10 w-10 mx-auto text-accent-pink mb-2" />
                <CardTitle className="text-2xl">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Placement Rate</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-t-primary-blue">
              <CardHeader>
                <CheckCircle className="h-10 w-10 mx-auto text-primary-blue mb-2" />
                <CardTitle className="text-2xl">MUHS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Affiliated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-lg">Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Submit online application with required documents</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-lg">NEET Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Valid NEET-UG score required for admission</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-lg">Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Participate in centralized admission counseling</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <CardTitle className="text-lg">Admission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Complete admission formalities and fee payment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Admission Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary-blue mb-4" />
                <CardTitle>B.Sc. Nursing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">Complete course details and curriculum information</p>
                <Button asChild className="w-full bg-primary-blue hover:bg-secondary-blue">
                  <Link href="/admission/bsc-nursing">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-secondary-blue mb-4" />
                <CardTitle>Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">Check eligibility criteria and requirements</p>
                <Button asChild className="w-full bg-secondary-blue hover:bg-primary-blue">
                  <Link href="/admission/eligibility">Check Eligibility</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-accent-pink mb-4" />
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">List of required documents for admission</p>
                <Button asChild className="w-full bg-accent-pink hover:bg-pink-600">
                  <Link href="/admission/documents">View Documents</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-primary-blue mb-4" />
                <CardTitle>Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">Detailed fee structure and payment options</p>
                <Button asChild className="w-full bg-primary-blue hover:bg-secondary-blue">
                  <Link href="/admission/fee-structure">View Fees</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Important Dates</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-dark-navy mb-4">Application Timeline</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-medium-gray">Application Start</span>
                        <span className="font-semibold text-primary-blue">June 1, 2024</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-medium-gray">Application End</span>
                        <span className="font-semibold text-accent-pink">July 15, 2024</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-medium-gray">NEET Counseling</span>
                        <span className="font-semibold text-secondary-blue">August 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-medium-gray">Classes Begin</span>
                        <span className="font-semibold text-primary-blue">September 2024</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-navy mb-4">Contact for Admission</h3>
                    <div className="space-y-3">
                      <p className="text-medium-gray">
                        <span className="font-semibold">Phone:</span> +91 7774055233 / 7774059624
                      </p>
                      <p className="text-medium-gray">
                        <span className="font-semibold">Email:</span> presidentsnbp@gmail.com
                      </p>
                      <p className="text-medium-gray">
                        <span className="font-semibold">Office Hours:</span> 9:00 AM - 5:00 PM (Mon-Fri)
                      </p>
                      <Button asChild className="w-full mt-4 bg-primary-blue hover:bg-secondary-blue">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
