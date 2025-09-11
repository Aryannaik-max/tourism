const LocationCheckbox = ({ id, name, checked, onChange, description }) => (
    <div className="relative flex items-start p-3 rounded-lg hover:bg-teal-50 transition-colors duration-200">
        <div className="flex items-center h-5">
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded cursor-pointer"
            />
        </div>
        <div className="ml-3 text-sm">
            <label htmlFor={id} className="font-medium text-gray-800 cursor-pointer">{name}</label>
            <p className="text-gray-500">{description}</p>
        </div>
    </div>
);

export default LocationCheckbox