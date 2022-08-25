import { FormGroup, Input } from "reactstrap";

function InputText({label, name, handleChange}) {
  return (
    <FormGroup>
      <label>{label}</label>
      <Input
        placeholder={`Nhập ${label}...`}
        type="text"
        name={name}
        onChange={handleChange}
      />
    </FormGroup>
  );
}

export default InputText;
