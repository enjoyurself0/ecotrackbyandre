import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-privacy-title">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                EcoTrack is committed to protecting your privacy and personal information. This Privacy Policy 
                has been developed in accordance with the Australian Privacy Principles (APPs) as set out in the 
                Privacy Act 1988 (Cth).
              </p>
              <p>
                By using EcoTrack, you consent to the collection, use, and disclosure of your personal information 
                as described in this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Account Information:</strong> Username, email address, and password when you create an account
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about your environmental tracking activities, including 
                  energy consumption, water usage, waste generation, and transportation data
                </li>
                <li>
                  <strong>Community Data:</strong> Posts, comments, and interactions within the EcoTrack community
                </li>
                <li>
                  <strong>Technical Information:</strong> Device information, IP address, browser type, and usage patterns
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We take the security of your personal information seriously and implement industry-standard 
                security measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Password Encryption:</strong> All user passwords are hashed using SHA-256 cryptographic 
                  hashing algorithm with proper salt encryption before being stored
                </li>
                <li>
                  <strong>Secure Storage:</strong> Personal information is stored in a secure SQLite database with 
                  appropriate access controls and encryption
                </li>
                <li>
                  <strong>Data Transmission:</strong> All data transmitted between your device and our servers is 
                  encrypted using secure protocols
                </li>
                <li>
                  <strong>Access Controls:</strong> We implement strict access controls to ensure only authorized 
                  personnel can access personal information
                </li>
              </ul>
              <p className="mt-4">
                While we implement robust security measures, no method of transmission over the internet or 
                electronic storage is 100% secure. We cannot guarantee absolute security but continuously work 
                to protect your information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain the EcoTrack service</li>
                <li>To authenticate your account and ensure security</li>
                <li>To track and display your environmental impact metrics</li>
                <li>To enable participation in leaderboards and community features</li>
                <li>To improve and personalize your experience</li>
                <li>To communicate with you about service updates and features</li>
                <li>To comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Public Information:</strong> Information you choose to share publicly on leaderboards 
                  and community posts (username, scores, and public posts)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our legal rights
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted service providers who assist in operating 
                  our platform, subject to strict confidentiality agreements
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights Under the Privacy Act 1988</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Under the Australian Privacy Principles, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>Withdraw consent for certain data processing activities</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
              </ul>
              <p className="mt-4">
                To exercise these rights or if you have any privacy-related concerns, please contact us 
                through the support channels provided in the application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We retain your personal information for as long as your account is active or as needed to 
                provide you with our services. If you wish to delete your account, we will delete or anonymize 
                your personal information, except where we are required by law to retain certain information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                EcoTrack is not intended for use by children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you become aware that a child has provided us 
                with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                legal requirements. We will notify you of any material changes by posting the new Privacy 
                Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of EcoTrack after any changes indicates your acceptance of the updated 
                Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us through the application's support channels.
              </p>
              <p className="mt-4">
                For complaints or concerns about how we handle your personal information, you may also 
                contact the Office of the Australian Information Commissioner (OAIC):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Website: www.oaic.gov.au</li>
                <li>Phone: 1300 363 992</li>
                <li>Email: enquiries@oaic.gov.au</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                This privacy policy has been developed in accordance with the Australian Privacy Principles 
                (APPs) contained in the Privacy Act 1988 (Cth). EcoTrack is committed to complying with all 
                applicable privacy laws and regulations in Australia.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
