import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
   } from "@/components/ui/accordion";
   import { Badge } from "@/components/ui/badge";
   
   const FAQSection = () => {
     const faqs = [
       {
         question: "What industries does BriqLabs serve?",
         answer: "BriqLabs serves a wide range of industries including healthcare, finance, retail, manufacturing, and logistics. Our AI solutions are adaptable to various business contexts and can be customized to meet specific industry requirements."
       },
       {
         question: "How long does implementation typically take?",
         answer: "Implementation timelines vary based on solution complexity and integration requirements. Most projects are completed within 4-12 weeks. Our streamlined process ensures minimal disruption to your existing operations while maximizing value delivery."
       },
       {
         question: "Do I need technical expertise to use BriqLabs solutions?",
         answer: "No, our solutions are designed with user-friendly interfaces that require minimal technical knowledge. We provide comprehensive training and ongoing support to ensure your team can effectively utilize our AI tools without specialized expertise."
       },
       {
         question: "How do you ensure data security and privacy?",
         answer: "We implement industry-leading security protocols including end-to-end encryption, regular security audits, and compliance with GDPR, HIPAA, and other relevant regulations. Your data security is our top priority throughout every implementation."
       },
       {
         question: "Can BriqLabs integrate with our existing systems?",
         answer: "Yes, our solutions are built with interoperability in mind. We offer seamless integration with most enterprise systems, including CRMs, ERPs, and custom platforms through our extensive API ecosystem and dedicated integration services."
       }
     ];
   
     return (
       <section id="faq" className="section-padding bg-white">
         <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-12 animate-slide-up">
             <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-3">FAQ</Badge>
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Find answers to common questions about our AI solutions and implementation process
             </p>
           </div>
   
           <div className="max-w-3xl mx-auto animate-slide-up">
             <Accordion type="single" collapsible className="space-y-4">
               {faqs.map((faq, index) => (
                 <AccordionItem
                   key={index}
                   value={`item-${index}`}
                   className="border border-gray-200 rounded-lg overflow-hidden"
                 >
                   <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors font-medium text-left text-gray-800">
                     {faq.question}
                   </AccordionTrigger>
                   <AccordionContent className="px-6 py-4 text-gray-600">
                     {faq.answer}
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </div>
         </div>
       </section>
     );
   };
   
   export default FAQSection;
   