import { useState } from "react";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  employeeId: "",
  department: "",
};

const TeacherForm = ({
  initialValues = defaultValues,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] =
    useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <Input
        label="Employee ID"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleChange}
      />

      <Input
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Saving..."
          : "Save Teacher"}
      </Button>
    </form>
  );
};

export default TeacherForm;