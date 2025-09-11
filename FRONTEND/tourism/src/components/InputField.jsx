const InputField = ({ icon, label, id, value, onChange, type = "number", placeholder, min = 1 }) => (
  <div className="relative">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="flex items-center">
      <span className="absolute left-3 text-gray-500">{icon}</span>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
      />
    </div>
  </div>
);

export default InputField