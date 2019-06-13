import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import * as fields from 'client/constants';

import { Title, Body, Submit } from './styles';

const SubmitSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  detailedDescription: Yup.string()
    .required('Description is required'),
  });

class NewsForm extends Component {
  handleSubmit = (values, {resetForm}) => {
    const { id, closeForm } = this.props;
    let submit = typeof id === 'undefined' ? this.props.handleAddArticle : this.props.handleEditArticle;
    const article = {
      title: values.title,
      detailedDescription: values.detailedDescription,
      id,
    };
    submit(article);
    resetForm({title: '', detailedDescription: ''});
    closeForm();
  };

  render() {
    const { title, detailedDescription, formButtonName } = this.props;
    return(
      <Formik
      initialValues={{
        title,
        detailedDescription,
      }}
      validationSchema={SubmitSchema}
      onSubmit={this.handleSubmit}
      render={() => {
        return (
          <Form>
            <Title>
              <p>
                Title:
              </p>
              <Field component="input" name={fields.TITLE_FIELD} />
              <ErrorMessage name="title">
                {errorMessage => <div>{errorMessage}</div>}
              </ErrorMessage>
            </Title>
              <Body>
                <p>
                  Description:
                </p>
                <Field component="textarea" name={fields.DETAILED_DESCRIPTION_FIELD} />
                <ErrorMessage name="detailedDescription">
                  {errorMessage => <div>{errorMessage}</div>}
                </ErrorMessage>
              </Body>
              <Submit>
                <button type="submit">
                  {formButtonName}
                </button>
              </Submit>
          </Form>
        )
        }}
        />
    )
  }
}

NewsForm.propTypes = {
  title: PropTypes.string,
  detailedDescription: PropTypes.string,
  handleAddArticle: PropTypes.func,
  handleEditArticle: PropTypes.func,
}

export default NewsForm;
