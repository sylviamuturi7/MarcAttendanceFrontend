// NOTE: "Layout" is capital L — previous file used lowercase which broke on Linux
import PageHeader from "@/components/Layout/PageHeader";
import PersonalInfoForm from "../components/PersonalInfoForm";
import ProfilePhotoUpload from "../components/ProfilePhotoUpload";
import SecurityDetailsForm from "../components/SecurityDetailsForm";

// DashboardLayout is NOT included — DashboardRoutes already wraps all pages in it
function PersonalInformation({ admin, onSubmit, onUpload, onPasswordSubmit, error, loading }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load profile. Please try again.</p>;
  if (!admin) return <p>No profile information found.</p>;

  return (
    <>
      <PageHeader title="Personal Information" />
      <ProfilePhotoUpload onUpload={onUpload} />
      <PersonalInfoForm admin={admin} onSubmit={onSubmit} />
      <SecurityDetailsForm onSubmit={onPasswordSubmit} />
    </>
  );
}

export default PersonalInformation;
