import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ label, handleChange, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest} />
      {label ? (
        <label
          className={`form-input-label ${rest.value.length ? 'shrink' : ''}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
