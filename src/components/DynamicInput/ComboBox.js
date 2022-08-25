import { AsyncPaginate } from "react-select-async-paginate";
import { FormGroup } from "reactstrap";

function ComboBox({
  label,
  name,
  value,
  loadOptions = () => {
    return {
      options: [],
      hasMore: false,
      additional: {
        page: 1,
      },
    };
  },
  handleChange,
}) {
  console.log(value);
  return (
    <FormGroup>
      <label>{label}</label>
      <AsyncPaginate
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) =>
          option.code ? option.code + " - " + option.name : ""
        }
        value={value}
        name={name}
        style={{ fontSize: "0.8571em" }}
        loadOptions={loadOptions}
        onChange={handleChange}
        additional={{ page: 1 }}
      />
    </FormGroup>
  );
}

export default ComboBox;
