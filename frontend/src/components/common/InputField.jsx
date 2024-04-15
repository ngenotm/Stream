const InputField = ({ label, placeholder, type = "text", value, setValue, name, textarea = false }) => {
    return (
        <div className={textarea && "col-span-full"}>
            <label htmlFor={name} className="text-white lg:text-super-sm md:text-sm">{label}</label>
            {textarea ?
                <textarea
                    type={type}
                    className="support-input-field"
                    rows={5}
                    placeholder={placeholder}
                />
                :
                <input
                    type={type}
                    id={name}
                    className="support-input-field"
                    placeholder={placeholder}
                />
            }
        </div>
    );
}

export default InputField;