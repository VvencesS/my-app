import LayoutRow from "./LayoutRow";
import ComboBox from "./ComboBox";
import InputText from "./InputTex";

function DynamicInput({ formik, handleChange, mergerList, values }) {
  return (
    <>
      {mergerList.map((item, index) => (
        <LayoutRow
          key={index}
          children1={(() => {
            if (item[0] != null) {
              if (item[0]?.component?.componentType?.code === "COMBOBOX") {
                console.log(item[0]);
                return (
                  <ComboBox
                    value={values[item[0]?.code]}
                    key={"ComboBox" + item[0]?.component?.componentType?.code}
                    label={item[0].componentLabel}
                    name={item[0].code}
                    loadOptions={async (search, loadedOptions, { page }) => {
                      const authToken = await localStorage.getItem(
                        "accessToken"
                      );
                      const response = await fetch(
                        `http://10.254.61.24:8095/api/categoryData/autocomplete/${
                          item[0]?.component?.category?.id
                        }?max=15&offset=${
                          (page - 1) * 15
                        }&order=desc&query=${search}&sort=`,
                        {
                          method: "GET",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + authToken,
                          },
                        }
                      );
                      let options = [];
                      const responseJSON = await response.json();
                      if (responseJSON?.categoryDataList) {
                        options = responseJSON?.categoryDataList;
                      }
                      return {
                        options: options,
                        hasMore: false,
                        additional: {
                          page: page + 1,
                        },
                      };
                    }}
                    handleChange={(selectedOption) =>
                      formik.setFieldValue(
                        item[0]?.component?.category?.code,
                        selectedOption
                      )
                    }
                  />
                );
              }
              if (item[0]?.component?.componentType?.code === "TEXT") {
                return (
                  <InputText
                    key={"InputText" + item[0]?.component?.componentType?.code}
                    label={item[0].componentLabel}
                    name={item[0].code}
                    handleChange={handleChange}
                  />
                );
              }
            } else {
              return <></>;
            }
          })()}
          children2={(() => {
            if (item[1] != null) {
              if (item[1]?.component?.componentType?.code === "COMBOBOX") {
                return (
                  <ComboBox
                  value={values[item[1]?.code]}
                    key={"ComboBox" + item[1]?.component?.componentType?.code}
                    label={item[1].componentLabel}
                    name={item[1].code}
                    loadOptions={async (search, loadedOptions, { page }) => {
                      const authToken = await localStorage.getItem(
                        "accessToken"
                      );
                      const response = await fetch(
                        `http://10.254.61.24:8095/api/categoryData/autocomplete/${
                          item[1]?.component?.category?.id
                        }?max=15&offset=${
                          (page - 1) * 15
                        }&order=desc&query=${search}&sort=`,
                        {
                          method: "GET",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + authToken,
                          },
                        }
                      );
                      let options = [];
                      const responseJSON = await response.json();
                      if (responseJSON?.categoryDataList) {
                        options = responseJSON?.categoryDataList
                      }
                      return {
                        options: options,
                        hasMore: false,
                        additional: {
                          page: page + 1,
                        },
                      };
                    }}
                    handleChange={(selectedOption) =>
                      formik.setFieldValue(
                        item[1]?.component?.category?.code,
                        selectedOption.value
                      )
                    }
                  />
                );
              }
              if (item[1]?.component?.componentType?.code === "TEXT") {
                return (
                  <InputText
                    key={"InputText" + item[1]?.component?.componentType?.code}
                    label={item[1].componentLabel}
                    name={item[1].code}
                    handleChange={handleChange}
                  />
                );
              }
            } else {
              return <></>;
            }
          })()}
        />
      ))}
    </>
  );
}

export default DynamicInput;
