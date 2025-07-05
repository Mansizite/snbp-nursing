import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Award } from "lucide-react"

export default function Semester1Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">B.Sc. Nursing - Semester I</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <CardHeader>
            <Clock className="h-8 w-8 mx-auto text-secondary-pink mb-2" />
            <CardTitle className="text-lg">Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">6 Months</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <BookOpen className="h-8 w-8 mx-auto text-secondary-pink mb-2" />
            <CardTitle className="text-lg">Total Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">25 Credits</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Award className="h-8 w-8 mx-auto text-secondary-pink mb-2" />
            <CardTitle className="text-lg">Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">6 Core Subjects</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Anatomy and Physiology</CardTitle>
            <p className="text-light-black">Credits: 5 | Theory: 3 | Practical: 2</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Theory Topics</h4>
                <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                  <li>Introduction to human body</li>
                  <li>Cell structure and function</li>
                  <li>Tissues and organs</li>
                  <li>Skeletal system</li>
                  <li>Muscular system</li>
                  <li>Cardiovascular system</li>
                  <li>Respiratory system</li>
                  <li>Nervous system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Practical Components</h4>
                <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                  <li>Microscopic study of tissues</li>
                  <li>Skeletal system identification</li>
                  <li>Physiological experiments</li>
                  <li>Blood pressure measurement</li>
                  <li>Pulse rate monitoring</li>
                  <li>Respiratory function tests</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fundamentals of Nursing</CardTitle>
            <p className="text-light-black">Credits: 5 | Theory: 3 | Practical: 2</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Theory Topics</h4>
                <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                  <li>Introduction to nursing</li>
                  <li>Health and illness concepts</li>
                  <li>Nursing process</li>
                  <li>Communication in nursing</li>
                  <li>Infection control</li>
                  <li>Safety and comfort</li>
                  <li>Vital signs</li>
                  <li>Documentation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Practical Skills</h4>
                <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                  <li>Bed making techniques</li>
                  <li>Patient positioning</li>
                  <li>Vital signs measurement</li>
                  <li>Hand hygiene practices</li>
                  <li>Personal protective equipment</li>
                  <li>Patient hygiene care</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Psychology</CardTitle>
            <p className="text-light-black">Credits: 3 | Theory: 2 | Practical: 1</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Theory Topics</h4>
                <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                  <li>Introduction to psychology</li>
                  <li>Human behavior</li>
                  <li>Learning and memory</li>
                  <li>Personality development</li>
                  <li>Stress and coping</li>
                  <li>Mental health concepts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Applications</h4>
                <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                  <li>Patient psychology</li>
                  <li>Therapeutic communication</li>
                  <li>Behavioral assessment</li>
                  <li>Counseling techniques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Microbiology</CardTitle>
              <p className="text-light-black text-sm">Credits: 4</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                <li>Introduction to microorganisms</li>
                <li>Bacterial morphology</li>
                <li>Sterilization methods</li>
                <li>Laboratory techniques</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">English</CardTitle>
              <p className="text-light-black text-sm">Credits: 3</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                <li>Grammar and vocabulary</li>
                <li>Medical terminology</li>
                <li>Professional communication</li>
                <li>Report writing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Computer Applications</CardTitle>
              <p className="text-light-black text-sm">Credits: 2</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-light-black space-y-1 text-sm">
                <li>Basic computer skills</li>
                <li>MS Office applications</li>
                <li>Internet usage</li>
                <li>Healthcare software</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Assessment Pattern</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-dark-gray mb-2">Internal Assessment (40%)</h4>
              <ul className="list-disc list-inside text-light-black space-y-1">
                <li>Class tests and assignments</li>
                <li>Practical examinations</li>
                <li>Viva voce</li>
                <li>Attendance and participation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-dark-gray mb-2">External Assessment (60%)</h4>
              <ul className="list-disc list-inside text-light-black space-y-1">
                <li>University theory examination</li>
                <li>University practical examination</li>
                <li>Minimum 40% required to pass</li>
                <li>Overall 50% for progression</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
