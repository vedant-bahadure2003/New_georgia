import Image from "next/image";
import Homepage from "@/_components/homepage/Homepage";
import JusticeHelpSecurityDashboard from "@/_components/homepage/Justice";
import GrievancePortals from "@/_components/homepage/GrievancePortals";
import ComplaintSection from "@/_components/homepage/ComplaintSection";
import CommissionerMessage from "@/_components/homepage/CommissionerMessage";
import WhatsappSection from "@/_components/homepage/WhatsappSection";
import Kumbh from "@/_components/homepage/Kumbh";
import PoliceStationLocator from "@/_components/homepage/PoliceStationLocator";
import WhatsAppDashboard from "@/_components/homepage/WhatsAppDashboard";
import SecurityInitiative from "@/_components/homepage/SecurityInitiative";
import LatestActivities from "@/_components/homepage/LatestActivities";
import SocialMediaFeed from "@/_components/homepage/SocialMediaFeed";
export default function Home() {
  return (
    <>
      <Homepage />
      <JusticeHelpSecurityDashboard />

      <GrievancePortals />
      <ComplaintSection />
      <CommissionerMessage />
      <WhatsappSection />
      <WhatsAppDashboard />
      <PoliceStationLocator />
      <SecurityInitiative />
      <LatestActivities />
      <SocialMediaFeed />
      <Kumbh />
    </>
  );
}
