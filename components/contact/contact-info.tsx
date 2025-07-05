import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondary-pink" />
                <span>Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light-black">presidentsnbp@gmail.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondary-pink" />
                <span>Phone</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light-black">+91 7774055233</p>
              <p className="text-light-black">+91 7774059624</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-secondary-pink" />
                <span>Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light-black">
                GAT.NO.71/1, 90, 94, RIVER RESIDENCY,
                <br />
                DEHU-ALANDI ROAD, CHIKALI-PUNE-411062
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-secondary-pink" />
                <span>Office Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-light-black">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-light-black">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-light-black">Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-light-black mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-light-black mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-light-black mb-2">Phone</label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-light-black mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <Button className="w-full bg-secondary-pink text-dark-gray hover:bg-primary-pink">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
