import { useState } from "react";

import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const defaultValues = {
  name: "",
  code: "",
  hod: "",
  description: "",
};

const DepartmentForm = ({
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
      <Input
        label="Department Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Department Code"
        name="code"
        value={formData.code}
        onChange={handleChange}
      />

      <Input
        label="Head of Department"
        name="hod"
        value={formData.hod}
        onChange={handleChange}
      />

      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Saving..."
          : "Save Department"}
      </Button>
    </form>
  );
};

export default DepartmentForm;