import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSegments } from "../../store/slices/segmentSlice";
import { sendSegmentData } from "../../utils/api";
import Modal from "../oraganisms/Modal";

const options = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

const Segment = ({ onClose }) => {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [currentSchema, setCurrentSchema] = useState("");
  const dispatch = useDispatch();

  const handleAddSchema = () => {
    if (!currentSchema) return;
    const schema = options.find((opt) => opt.value === currentSchema);
    if (schema) {
      setSelectedSchemas([...selectedSchemas, schema]);
      setCurrentSchema("");
    }
  };

  const handleSave = async () => {
    const schema = selectedSchemas.map((s) => ({ [s.value]: s.label }));
    const payload = { segment_name: segmentName, schema };
    if (segmentName.length < 3) {
      alert("Please Enter a correct Name")
      return;
    }
    if(schema.length===0){
      alert("Please add a schema")
      return;
    }
    dispatch(addSegments(payload));
    // console.log(payload)
    await sendSegmentData(payload);
    onClose();
    alert("Schema Added")
  };
  const removeSchema = (segment_name) => {
    // console.log(segment_name)
    const segmentAfterRemoved = selectedSchemas.filter(
      (segment) => segment.value !== segment_name
    );
    setSelectedSchemas([...segmentAfterRemoved]);
  }

  const availableOptions = options.filter(
    (opt) => !selectedSchemas.find((s) => s.value === opt.value)
  );

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Save Segment</h2>

      <label className="block text-sm font-medium mb-1" >Segment Name
        <input
          type="text"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
          placeholder="Enter segment name"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-400 text-dark"
          name="segment_name"
        />
      </label>
      {selectedSchemas.length !== 0 &&
        <div className="bg-sky-500 p-4 rounded-lg mb-4 text-dark flex flex-col gap-3">
          {selectedSchemas.map((schema, index) => (
            <div key={index} className="flex gap-2">
              <select
                value={schema.value}
                onChange={(e) => {
                  const newValue = e.target.value;
                  const newSchema = options.find((o) => o.value === newValue);
                  const updatedSchemas = [...selectedSchemas];
                  updatedSchemas[index] = newSchema;
                  setSelectedSchemas(updatedSchemas);
                }}
                className="w-full border border-gray-300 bg-gray-800 rounded-md p-2 text-dark"
                name={schema.value}
              >
                {options
                  .filter(
                    (o) =>
                      !selectedSchemas.some(
                        (sel) => sel.value === o.value && sel.value !== schema.value
                      )
                  )
                  .map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
              </select>
              <div className="w-4 h-4 bg-red-600 text-white text-center m-auto flex justify-center items-center cursor-pointer" onClick={() => removeSchema(schema.value)}>-</div>
            </div>
          ))}
        </div>
      }

      <label className="block text-sm font-medium " >
        Add schema to segment

        <select
          value={currentSchema}
          onChange={(e) => setCurrentSchema(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-gray-800"
          name="segment"
        >
          <option value="">{availableOptions.length === 0 ? "Schema if full" : "Select schema"}</option>
          {availableOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
      <button
        onClick={handleAddSchema}
        className="text-sky-600 mt-2 hover:underline text-sm font-medium"
      >
        + Add new schema
      </button>

      <button
        onClick={handleSave}
        className="mt-5 bg-sky-600 text-white w-full py-2 rounded-md hover:bg-sky-700 transition"
      >
        Save the Segment
      </button>
    </Modal>
  );
};

export default Segment;

