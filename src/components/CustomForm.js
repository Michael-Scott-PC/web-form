import React from 'react';
import PropTypes from 'prop-types';
import form1 from '../form1.json';

const CustomForm = props => {
  const root = document.getElementById('root');

  form1.map(item => console.log(item));

  const renderFormHelper = model => {
    let fields = [];
    for (let item of model) {
      if (item.type == 'FreeText') {
        fields.push(<>{(root.innerHTML = item.content)}</>);
      } else {
        fields.push(
          <div class="row">
            {item.fields.map(field => (
              <div class={`col-${field.colSize.toLowerCase()}`}>
                <label
                  key={field.key}
                  htmlFor={field.label}
                  required={field.required ? field.required : null}
                  style={{ display: 'block' }}
                >
                  {field.label}
                </label>
                <input
                  placeholder={field.placeholder ? field.placeholder : ''}
                  type={field.type}
                ></input>
              </div>
            ))}
          </div>
        );
      }
    }
    fields.shift();
    return fields;
  };

  return <div>{renderFormHelper(form1)}</div>;
};

CustomForm.propTypes = {};

export default CustomForm;
