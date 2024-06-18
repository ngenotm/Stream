import PropTypes from 'prop-types';
import React from 'react';

const InputField = React.memo(({ label, placeholder, type = "text", value, onChange, name, textarea = false, customClass }) => {
    return (
        <div className={textarea ? "col-span-full" : ""}>
            <label htmlFor={name} className="text-white lg:text-super-sm md:text-sm">{label}</label>
            {textarea ? (
                <textarea
                    type={type}
                    className={`support-input-field ${customClass}`}
                    rows={5}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    className={`support-input-field ${customClass}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
});

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    textarea: PropTypes.bool,
    customClass:PropTypes.string
};

export default InputField;