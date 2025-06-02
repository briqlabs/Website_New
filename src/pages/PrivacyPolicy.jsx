import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Separator } from "../components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last Updated: "1st" August 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">
                At Briqlabs, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you engage with our AI solutions and services. By using our website or services, you agree to the terms of this Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Personal Information:</strong> Name, email address, contact details, and other information you provide when creating an account, making inquiries, or purchasing our services.</li>
                <li><strong>Business Information:</strong> Data related to your business operations provided for customized AI solutions.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website or services, including IP address, browser type, operating system, and pages viewed.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience on our website. You can manage your cookie preferences through your browser settings.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">Briqlabs uses your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Provide, operate, and maintain our AI solutions and services.</li>
                <li>Customize and improve our services to meet your business needs.</li>
                <li>Communicate with you, including responding to inquiries, providing customer support, and sending updates or promotional content (with your consent).</li>
                <li>Analyze usage data to improve website functionality and user experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
              <p className="mb-4">
                We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Service Providers:</strong> We may share data with third-party vendors who assist us in operating our business and delivering services, such as payment processors, hosting services, and data analytics.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect the rights and safety of Briqlabs or others.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
              <p className="mb-6">
                We implement industry-standard security measures to protect your personal and business information from unauthorized access, alteration, or destruction. However, no data transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Access, correct, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Restrict or object to the processing of your data.</li>
                <li>Withdraw consent where applicable.</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, please contact us at <a href="mailto:hello@briqlabs.com" className="text-blue-600 hover:text-blue-800">hello@briqlabs.com</a>.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before sharing your information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children Privacy</h2>
              <p className="mb-6">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it immediately.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
              <p className="mb-6">
                Briqlabs reserves the right to update this Privacy Policy at any time. We will notify you of significant changes by posting the updated policy on our website or sending an email. Continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-6">
                If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:hello@briqlabs.com" className="text-blue-600 hover:text-blue-800">hello@briqlabs.com</a>
              </p>
              
              <Separator className="my-8" />
              
              <p className="text-center text-gray-600">
                This Privacy Policy ensures transparency in how Briqlabs handles your data and keeps your information secure.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
