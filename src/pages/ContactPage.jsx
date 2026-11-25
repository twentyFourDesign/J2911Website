import useTitle from "../lib/useTitle";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  useTitle("Contact");
  return <ContactSection headingLevel="h1" />;
}
