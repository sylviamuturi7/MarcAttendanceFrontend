import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import PersonalInfoForm from "../components/PersonalInfoForm";
import ProfilePhotoUpload from "../components/ProfilePhotoUpload";
import SecurityDetailsForm from "../components/SecurityDetailsForm";

function PersonalInformation({ admin, onSubmit, onUpload, onPasswordSubmit, error, loading }) {
  if (error) 
    return <p>Failed to load profile. Please try again.</p>;
  if (loading) 
    return <p>Loading...</p>;
  if (!admin) 
    return <p>No profile information found.</p>;

  return (
    <DashboardLayout>
      <PageHeader title="Personal Information" />
      <ProfilePhotoUpload onUpload={onUpload} />
      <PersonalInfoForm admin={admin} onSubmit={onSubmit} />
      <SecurityDetailsForm onSubmit={onPasswordSubmit} />
    </DashboardLayout>
  );
}

export default PersonalInformation;
