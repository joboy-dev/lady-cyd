import Footer from "@/components/shared/Footer";
import InvitationRequest from "@/components/shared/InvitationRequest";
import PublicNavbar from "@/components/shared/navbar/PublicNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitation Form | Invite Lady Cyd",
  description:
    "Speaking, teaching and ministry engagement request for Lady Cyd. Share the details of your gathering and begin the conversation.",
};

export default function InviteRequestPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <InvitationRequest />
      <Footer />
    </div>
  );
}
