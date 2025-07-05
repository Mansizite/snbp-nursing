import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any assistance you need
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card className="border-t-4 border-t-primary-blue">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary-blue" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">presidentsnbp@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary-blue">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-secondary-blue" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">+91 7774055233</p>
                <p className="text-medium-gray">+91 7774059624</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent-pink">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent-pink" />
                  <span>Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">
                  GAT.NO.71/1, 90, 94, RIVER RESIDENCY,
                  <br />
                  DEHU-ALANDI ROAD, CHIKALI-PUNE-411062
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary-blue">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary-blue" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-medium-gray">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-medium-gray">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-navy mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-navy mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-navy mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-navy mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <Button className="w-full bg-primary-blue text-white hover:bg-secondary-blue">Send Message</Button>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Find Us on Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-light-blue rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto text-primary-blue mb-4" />
                <h3 className="text-xl font-semibold text-dark-navy mb-2">Our Location</h3>
                <p className="text-medium-gray max-w-md">
                  GAT.NO.71/1, 90, 94, RIVER RESIDENCY, DEHU-ALANDI ROAD, CHIKALI-PUNE-411062
                </p>
                <Button className="mt-4 bg-primary-blue hover:bg-secondary-blue">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
            <CardHeader>
              <CardTitle className="text-primary-blue">Admissions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray mb-4">For admission related queries and information</p>
              <Button className="bg-primary-blue hover:bg-secondary-blue">
                <a href="tel:+917774055233">Call Now</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-secondary-blue">
            <CardHeader>
              <CardTitle className="text-secondary-blue">General Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray mb-4">For general information and support</p>
              <Button className="bg-secondary-blue hover:bg-primary-blue">
                <a href="mailto:presidentsnbp@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-accent-pink">
            <CardHeader>
              <CardTitle className="text-accent-pink">Emergency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray mb-4">For urgent matters and emergency contact</p>
              <Button className="bg-accent-pink hover:bg-pink-600">
                <a href="tel:+917774059624">Emergency Line</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
