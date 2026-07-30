import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Join FinTrack and take control of your finances."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
